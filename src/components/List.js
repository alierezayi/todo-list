import React, { useContext } from "react";

// Styles
import styles from "./List.module.css";

// Context
import { TodoContext } from "../context/TodoContextProvider";
import Task from "./Task";

const List = () => {
  const { state } = useContext(TodoContext);

  return (
    <ul className={styles.listContainer}>
      {state.todoList.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default List;
