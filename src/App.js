
// Context
import TodoContextProvider from "./context/TodoContextProvider";

// Styles
import styles from "./App.module.css";

// Components
import Form from "./components/Form";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <TodoContextProvider>
        <div className={styles.todoContainer}>
          <header className={styles.todoHeader}>
            <h1 className={styles.todoTitle}>To Do List</h1>
            <Form />
          </header>
          <section>
            <div className={styles.label}>
              <span>What needs to be done?</span>
            </div>
            <List />
          </section>
          <footer>
            <Footer />
          </footer>
        </div>
      </TodoContextProvider>
    </>
  );
}

export default App;
