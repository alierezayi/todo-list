import React from "react";

// Styles
import styles from "./TodoApp.module.css";

// Components
import Form from "./Form";
import List from "./List"

const TodoApp = () => {
  return (
    <div className={styles.todoContainer}>
      <header className={styles.todoHeader}>
        <h1 className={styles.todoTitle}>To Do List</h1>
        <Form />
      </header>
      <List />
    </div>
  );
};

export default TodoApp;
