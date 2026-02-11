# Assignment: Order Processing Application -- Modules and Imports

## Overview

This assignment focuses on organizing a Python application using modules
and folders.

The provided order processing program must be restructured into multiple
files using a clear folder structure.

The goal is to demonstrate correct use of Python modules, imports,
`__init__.py`, `__all__`, and execution control using the `__name__`
variable.

This assignment tests your understanding of how Python modules work and
how code execution is handled when importing files.

## Your Task

Restructure the order processing application into a modular project
using folders.

Split the code into separate modules based on responsibility.

The business logic must not remain inside `main.py`.

The program must demonstrate correct use of:

- Folder organization
- Custom modules
- Import statements
- `__init__.py`
- `__all__`
- `if __name__ == "__main__"` pattern

Do not redesign the logic of the program. Only organize it correctly.

## Project Structure Requirements

The application must be structured into folders.

The structure must include:

- A `main.py` file acting as the entry point
- A `data` folder containing the dataset
- A `services` folder containing business logic
- A `utils` folder containing helper functions

Each folder must contain an `__init__.py` file.

## Import Requirements

The application must use proper import statements.

It must demonstrate importing specific functions from a package.

It must demonstrate using relative imports inside folders.

It must use clean top level imports in the main file.

Imports must be controlled through the `__init__.py` files.

## Execution Behavior

The program must behave correctly in both situations.

When the main file is executed directly the program runs and prints the report.

When modules are imported into another file nothing should execute automatically except definitions.

The main file must include the following condition

    ```py
    if __name__ == "__main__":
        main()
    ```

This ensures the program runs only when executed directly.

## Export Control

The project must use the `__all__` variable inside `__init__.py`.

`__all__` must define which names are publicly accessible from the
package.

This ensures a clear public interface and prevents exposing internal functions unintentionally.
