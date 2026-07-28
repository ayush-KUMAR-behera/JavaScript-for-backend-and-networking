# Day 10 - JavaScript Promises & Event Loop (Advanced)

## Topics Covered

### Promises

- What is a Promise?
- Why Promises were introduced
- Promise States
  - Pending
  - Fulfilled
  - Rejected
- resolve()
- reject()
- then()
- catch()
- finally()

### Promise Flow

```
Pending
    │
    ├── resolve() → Fulfilled → then()
    │
    └── reject() → Rejected → catch()
```

---

## Microtask Queue vs Macrotask Queue

### Microtask Queue (High Priority)

- Promise.then()
- Promise.catch()
- Promise.finally()

### Macrotask Queue (Lower Priority)

- setTimeout()
- setInterval()
- DOM Events

### Event Loop Rule

1. Execute synchronous code.
2. Empty the **Microtask Queue** completely.
3. Execute **one Macrotask**.
4. Repeat.

---

## Key Learnings

- Promises solve Callback Hell.
- Promise callbacks are scheduled in the Microtask Queue.
- Microtasks always execute before Macrotasks.
- `setTimeout(..., 0)` does **not** execute immediately.
- A Promise can settle only once.
- `resolve()` and `reject()` change a Promise from Pending to a settled state.

---

## Programs Practiced

- Login Promise
- Invalid Password Promise
- Vote Eligibility Promise
- Payment Simulation
- Promise + setTimeout execution order
- Multiple Promise execution
- Microtask Queue vs Macrotask Queue examples

---
## Status
✅ Day 10 Completed