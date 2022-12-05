import React from "react";

// Styles
import styles from "./TodoApp.module.css";

// Components
import Form from "./Form";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const TodoApp = () => {
  return (
    <div className={styles.todoContainer}>
      <header className={styles.todoHeader}>
        <h1 className={styles.todoTitle}>To Do List</h1>
        <Form />
      </header>
      <section>
        <div className={styles.label}>
          <span>What needs to be done?</span>
        </div>
        <Outlet />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default TodoApp;
