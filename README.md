# Customer Support Zone 🎧

A React-based single-page application for managing customer support tickets — track, progress, and resolve issues efficiently.

---

## 🚀 Live Features

- 📋 View all customer tickets in a 2-column responsive grid
- ➕ Click a ticket to add it to your **Task Status** panel
- ✅ Mark tickets as complete — they move to **Resolved** and counts update live
- 🔔 All actions use **React-Toastify** toast notifications (no browser alerts)
- 📱 Fully responsive on mobile, tablet, and desktop

---

## 🛠️ Tech Stack

- **React.js** (with hooks)
- **Tailwind CSS** + **DaisyUI**
- **React Icons**
- **React-Toastify**
- **Vite** (build tool)

---

## ❓ React Concepts — Q&A

### 1. What is JSX, and why is it used?

JSX stands for **JavaScript XML**. It's a syntax extension that lets you write HTML-like code right inside your JavaScript files. Instead of calling `React.createElement()` every time you want to create a UI element (which gets very messy fast), you can just write something that looks like HTML:

```jsx
const greeting = <h1>Hello, World!</h1>;
```

Behind the scenes, a tool called Babel compiles this into regular JavaScript. We use JSX because it makes our code much more readable and intuitive — you can see the structure of your UI at a glance, just like reading an HTML file, but with the full power of JavaScript expressions using `{ }` syntax.

---

### 2. What is the difference between State and Props?

Think of **props** as the arguments you pass into a function — they come from the outside (the parent component) and the component receiving them **cannot change** them. They're read-only data flowing downward.

**State**, on the other hand, is data that lives *inside* a component and *can change over time*. When state changes, React re-renders the component to reflect the new values.

Here's a simple mental model:
- **Props** = information someone hands you (you can read it, not change it)
- **State** = your own notepad that you control and can update

```jsx
// Props example — parent passes data down
<TicketCard title="Login Bug" priority="High" />

// State example — component manages its own data
const [count, setCount] = useState(0);
```

---

### 3. What is the useState hook, and how does it work?

`useState` is a React hook that lets a functional component keep track of data that **can change**. Before hooks existed, only class components could have state. Now any function component can use it.

You call `useState` with an initial value and it gives you back two things: the **current value** and a **setter function** to update it:

```jsx
const [tickets, setTickets] = useState([]);
// tickets → current value (starts as empty array)
// setTickets → function to update the value
```

Whenever you call the setter (e.g., `setTickets([...newTickets])`), React knows the data changed and **re-renders** the component automatically so the UI shows the latest data. You should never mutate state directly — always use the setter.

---

### 4. How can you share state between components in React?

The most common approach is called **"lifting state up"**. Instead of each component having its own copy of the data, you move the state to the **closest common parent** component and pass it down via **props**.

In this project, `App.jsx` holds all the ticket state. It passes the data and handler functions down to `TicketList`, `TicketCard`, `TaskStatus`, etc. as props:

```jsx
// App.jsx — state lives here
const [inProgressTickets, setInProgressTickets] = useState([]);

// Passed down to children
<TicketList onAddToProgress={handleAddToProgress} />
<TaskStatus inProgressTickets={inProgressTickets} onComplete={handleComplete} />
```

For larger apps (many nested components), you'd use **React Context** or a state manager like **Redux** to avoid "prop drilling" (passing props through many layers just to reach one deep child).

---

### 5. How is event handling done in React?

In React, you attach event handlers directly in JSX using **camelCase** names and passing a **function**. Unlike plain HTML where you'd write `onclick="myFunction()"` as a string, React takes an actual function reference:

```jsx
// HTML (old way)
<button onclick="handleClick()">Click Me</button>

// React (correct way)
<button onClick={handleClick}>Click Me</button>

// Or with an inline arrow function (common for passing arguments)
<button onClick={() => onAddToProgress(ticket)}>Take Task</button>
```

React wraps browser events in a **SyntheticEvent** — a cross-browser normalized version — so behavior is consistent everywhere. Common events include `onClick`, `onChange`, `onSubmit`, `onMouseEnter`, etc.

One important rule: avoid calling the function accidentally. Write `onClick={handleClick}` (reference), **not** `onClick={handleClick()}` (immediately invoked).

---

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Top navigation bar
│   ├── Banner.jsx      # Hero section with ticket stats
│   ├── TicketCard.jsx  # Individual ticket card
│   ├── TicketList.jsx  # 2-column ticket grid
│   ├── TaskStatus.jsx  # In-progress task panel
│   └── Footer.jsx      # Footer section
├── App.jsx             # Root component & state
├── main.jsx            # Entry point
└── index.css           # Tailwind CSS imports
public/
└── tickets.json        # Sample ticket data
```

---

*Built with love using React.js + Tailwind CSS*
