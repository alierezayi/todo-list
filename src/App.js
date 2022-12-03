import "./App.css";
import TodoApp from "./components/TodoApp";
import TodoContextProvider from "./context/TodoContextProvider";

function App() {
  return (
    <>
      <TodoContextProvider>
        <TodoApp />
      </TodoContextProvider>
    </>
  );
}

export default App;
