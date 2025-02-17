# Express.js Route Handler Missing Return Statement

This repository demonstrates a common error in Express.js route handlers: omitting the `return` statement within a conditional branch.  This can lead to unexpected behavior, where multiple responses are sent or the wrong status code is returned.

## Bug

The `bug.js` file contains an Express.js route handler that fetches user data.  If the user is not found, it should return a 404 status code. However, the conditional branch that handles the `!userData` case is missing a `return` statement. This means that even if the user is not found, the code continues to execute, potentially causing unexpected errors or sending an unintended response.

## Solution

The `bugSolution.js` file shows the corrected route handler.  The `return` statement is added to the conditional branch, ensuring that only one response is sent and that the appropriate status code is returned when a user is not found.