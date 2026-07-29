# Day 11 - Async / Await (Part 1)

## Topics Covered

- async keyword
- await keyword
- Promise.resolve()
- async function return value
- await execution flow
- async vs Promise.then()
- Top-Level Await (Introduction)

---

## Key Learnings

- Every async function returns a Promise.
- Returning a normal value from an async function is equivalent to returning Promise.resolve(value).
- await pauses only the current async function.
- await does not block the JavaScript engine.
- The remaining code after await resumes through the Microtask Queue.

---

## Programs Practiced

- async function returning string
- async function returning number
- Promise.resolve()
- getUser()
- getCompany()
- getRole()
- square()
- welcome()
