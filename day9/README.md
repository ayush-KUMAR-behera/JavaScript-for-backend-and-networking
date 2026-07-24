# Day 9 - Asynchronous JavaScript 

## Topics Covered

- Synchronous Programming
- Asynchronous Programming
- Blocking vs Non-blocking
- JavaScript Runtime
- Browser APIs vs Node APIs
- Call Stack
- Callback Queue
- Event Loop
- setTimeout()
- Callback Functions
- Callback Hell

## Key Learnings

- JavaScript is single-threaded.
- The Browser/Node runtime provides APIs like `setTimeout()`.
- `setTimeout()` does not execute immediately, even with a delay of 0 ms.
- Callback functions are passed as arguments and executed later.
- The Event Loop moves callbacks from the Callback Queue to the Call Stack only when the stack is empty.
- Deeply nested callbacks lead to Callback Hell, which Promises solve.
