# Copyright (c) 2016-present, Facebook, Inc.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.


import itertools
import logging
import os
from pathlib import Path
from typing import Callable, NamedTuple, Optional


CONFIGURATION_FILE: str = ".pyre_configuration"
LOCAL_CONFIGURATION_FILE: str = ".pyre_configuration.local"
BINARY_NAME: str = "pyre.bin"
CLIENT_NAME: str = "pyre-client"


LOG: logging.Logger = logging.getLogger(__name__)


def _find_parent_directory_containing(
    base: Path, target: str, predicate: Callable[[Path], bool]
) -> Optional[Path]:
    resolved_base = base.resolve(strict=False)
    # Using `itertools.chain` to avoid expanding `resolve_base.parents` eagerly
    for candidate_directory in itertools.chain([resolved_base], resolved_base.parents):
        candidate_path = candidate_directory / target
        try:
            if predicate(candidate_path):
                return candidate_directory
        except PermissionError:
            # We might not have sufficient permission to read the file/directory.
            # In that case, pretend the file doesn't exist.
            pass
    return None


def find_parent_directory_containing_file(base: Path, target: str) -> Optional[Path]:
    """
    Walk directories upwards from `base`, until the root directory is
    reached. At each step, check if the `target` file exist, and return
    it if found. Return None if the search is unsuccessful.
    """

    def is_file(path: Path) -> bool:
        return path.is_file()

    return _find_parent_directory_containing(base, target, predicate=is_file)


def find_global_root(base: Path) -> Optional[Path]:
    """Pyre always runs from the directory containing the nearest .pyre_configuration,
    if one exists."""
    return find_parent_directory_containing_file(base, CONFIGURATION_FILE)


def find_local_root(base: Path) -> Optional[Path]:
    found_global_root = find_parent_directory_containing_file(
        Path(base), CONFIGURATION_FILE
    )
    found_local_root = find_parent_directory_containing_file(
        Path(base), LOCAL_CONFIGURATION_FILE
    )

    # If the global configuration root is deeper than local configuration, ignore local.
    if (
        found_global_root is not None
        and found_local_root is not None
        # This would work because both `find_root` always return resolved path
        and found_local_root in found_global_root.parents
    ):
        return None
    else:
        return found_local_root


class FoundRoot(NamedTuple):
    global_root: Path
    local_root: Optional[Path] = None


def find_global_and_local_root(base: Path) -> Optional[FoundRoot]:
    """
    Walk directories upwards from `base` and try to find both the global and local
    pyre configurations.
    Return `None` if no global configuration is found.
    If a global configuration exists but no local configuration is found below it,
    return the path to the global configuration.
    If both global and local exist, return them as a pair.
    """
    found_global_root = find_parent_directory_containing_file(base, CONFIGURATION_FILE)
    if found_global_root is None:
        return None

    found_local_root = find_parent_directory_containing_file(
        base, LOCAL_CONFIGURATION_FILE
    )
    if found_local_root is None:
        return FoundRoot(found_global_root)

    # If the global configuration root is deeper than local configuration, ignore local.
    if found_local_root in found_global_root.parents:
        return FoundRoot(found_global_root)
    else:
        return FoundRoot(found_global_root, found_local_root)


def find_parent_directory_containing_directory(
    base: Path, target: str
) -> Optional[Path]:
    """
    Walk directories upwards from base, until the root directory is
    reached. At each step, check if the target directory exist, and return
    it if found. Return None if the search is unsuccessful.
    """

    def is_directory(path: Path) -> bool:
        return path.is_dir()

    return _find_parent_directory_containing(base, target, predicate=is_directory)


def find_typeshed() -> Optional[Path]:
    override = os.getenv("PYRE_TYPESHED")
    if override:
        return Path(override)

    current_directory = Path(__file__).parent

    # Prefer the typeshed we bundled ourselves (if any) to the one
    # from the environment.
    bundled_typeshed = find_parent_directory_containing_directory(
        current_directory, "pyre_check/typeshed/"
    )
    if bundled_typeshed:
        return bundled_typeshed

    try:
        import typeshed  # pyre-fixme: Can't find module import typeshed

        return Path(typeshed.typeshed)
    except ImportError:
        LOG.debug("`import typeshed` failed, attempting a manual lookup")

    # This is a terrible, terrible hack.
    return find_parent_directory_containing_directory(current_directory, "typeshed/")


def find_taint_models_directory() -> Optional[Path]:
    return find_parent_directory_containing_directory(
        Path(__file__).parent, "pyre_check/taint/"
    )