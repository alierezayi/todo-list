import React from "react";

// Styles
import styles from "./TodoList.module.css";

const TodoList = () => {
  return (
    <div className={styles.TodoListContainer}>
      <header className={styles.TodoHeader}>
        <h1 className={styles.TodoTitle}>To Do List</h1>
      </header>
    </div>
  );
};

export default TodoList;
