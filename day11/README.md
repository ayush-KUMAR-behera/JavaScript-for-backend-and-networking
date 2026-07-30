# Day 11 - Async / Await (Complete)

## Topics Covered

### Part 1

- async keyword
- await keyword
- Promise.resolve()
- async function return value
- await execution flow
- async vs Promise.then()
- Top-Level Await (Introduction)

---

### Part 2

- Error Handling (try/catch)
- Sequential Execution
- Parallel Execution
- Promise.all()
- Promise.allSettled()
- Promise.race()
- Promise.any()

---

## Key Learnings

### Async / Await

- Every async function always returns a Promise.
- Returning a normal value is internally converted to Promise.resolve(value).
- await pauses only the current async function.
- await never blocks the JavaScript engine.
- After Promise resolution, execution resumes through the Microtask Queue.

---

### Error Handling

- try/catch is used to handle rejected Promises with await.
- Prevents unhandled Promise rejections.

---

### Sequential Execution

```text
Task 1

↓

Task 2

↓

Task 3
```

- Each task waits for the previous one.
- Useful when tasks depend on each other.

---

### Parallel Execution

- Independent tasks can execute simultaneously.
- Improves performance.

---

### Promise.all()

- Executes multiple Promises in parallel.
- Returns all successful results.
- If one Promise rejects, the entire Promise.all() rejects.

---

### Promise.allSettled()

- Waits for every Promise to complete.
- Returns both fulfilled and rejected results.
- Useful when partial failures are acceptable.

---

### Promise.race()

- Returns the first Promise that settles.
- It may be fulfilled or rejected.

---

### Promise.any()

- Ignores rejected Promises.
- Returns the first fulfilled Promise.
- Rejects only if every Promise fails.

---

## Programs Practiced

- async function examples
- await examples
- Promise.resolve()
- Promise.reject()
- try/catch
- Sequential API execution
- Parallel execution
- Promise.all()
- Promise.allSettled()
- Promise.race()
- Promise.any()

---

## Real-World Use Cases

- User Authentication
- Dashboard Loading
- Weather + News + Stocks APIs
- Multiple Backend API Calls
- React Data Fetching
- Parallel API Requests

---

## Important Interview Questions

- What does async do?
- What does await do?
- Does await block JavaScript?
- Difference between async/await and Promise.then()?
- Why use try/catch with await?
- Sequential vs Parallel Execution?
- Promise.all() vs Promise.allSettled()
- Promise.race() vs Promise.any()
- Which Promise method is best for loading dashboard APIs?

---

