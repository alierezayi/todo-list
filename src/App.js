import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

// Context
import TodoContextProvider from "./context/TodoContextProvider";

// Components
import TodoApp from "./components/TodoApp";
import List from "./components/List";
import ActiveList from "./components/ActiveList";

function App() {
  return (
    <>
      <TodoContextProvider>
        <Routes>
          <Route path="/" element={<TodoApp />}>
            <Route path="all-tasks" element={<List />} />
            <Route path="active-tasks" element={<ActiveList />} />
            <Route path="/" element={<Navigate to="all-tasks" />} />
          </Route>
        </Routes>
      </TodoContextProvider>
    </>
  );
}

export default App;
