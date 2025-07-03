# ⚛️ React Revision Notes

### Introduction to State and Hooks

React components often deal with dynamic data that changes over time. This dynamic data is handled using **state**, which is a core concept in React. State is local to the component, and whenever it changes, the component **re-renders**, ensuring the user interface reflects the most recent data.

---

## 🔧 useState Hook

`useState` is one of the fundamental **React hooks**. It allows functional components to have their own local state, which was previously only available in class components through `this.state`.

In a typical scenario, a state variable is declared along with its updater function. The state is initialized with a default value and can be updated later based on user actions or other events. State updates in React are **asynchronous** and trigger a re-render of the component, ensuring the UI is always up-to-date.

A classic example of this is a **Counter**, where the value is incremented or decremented based on user interaction. React ensures that the count displayed on the screen always matches the current state value.

---

## 🔁 useEffect Hook – Lifecycle Management

`useEffect` is another powerful hook that allows you to perform **side effects** in functional components. Side effects include tasks like:

- Fetching data from an API
- Setting up event listeners or subscriptions
- Modifying the DOM directly

The `useEffect` hook takes a function and a **dependency array**. This determines **when** the effect should run.

### Phases:

- **Mounting:** If the dependency array is empty, the effect runs once after the component is mounted. This is equivalent to `componentDidMount` in class components.
- **Updating:** If the effect depends on specific variables, it re-runs whenever any of those values change.
- **Unmounting:** If the effect returns a function, this function is executed during the unmount phase to perform cleanup operations. This is useful for clearing timers, aborting fetch requests, or unsubscribing from services.

A common example is fetching data on mount, where the fetched data is stored in a state variable and the component re-renders to show the updated content.

---

## 🔼 Advanced Concept: Lifting State Up

When two or more components need access to the same state, it's often a sign that the state should be **lifted up** to their nearest common ancestor. This technique ensures a **single source of truth** and eliminates redundant or inconsistent state management across components.

For example, in a temperature converter app:

- Having each input component manage its own state can lead to inconsistencies.
- By moving the shared temperature state to the parent component, all children can read from and write to the same state, resulting in synchronized updates.

This approach promotes **clean architecture** and avoids data duplication across components.

---

## ⚠️ Best Practices and Considerations

- **Avoid Direct Mutation of State:** Always create new copies of arrays or objects when updating state. Mutating state directly can lead to bugs and unpredictable behavior.
- **Be Mindful of Asynchronous Updates:** State updates are not immediate. React may batch updates for performance, so avoid relying on the new state value immediately after calling a setter.
- **Use Functional Updates When Needed:** When the new state depends on the previous state, use a functional form of the updater to ensure accuracy.

---

## ✅ Conclusion

Understanding and mastering **React Hooks** like `useState` and `useEffect` is essential for building reactive, maintainable, and efficient applications. These hooks simplify component logic, make lifecycle management more intuitive, and promote better separation of concerns.

By lifting state up when necessary, managing side effects cleanly, and respecting immutability, you can build applications that scale well and behave predictably in complex user scenarios.

Keep practicing, keep building. Happy coding! 🚀
