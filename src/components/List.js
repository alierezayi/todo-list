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
      {state.todoList.length ? (
        state.todoList.map((task) => <Task key={task.id} task={task} />)
      ) : (
        <div className={styles.noData}>
          <span>There is no data for show!</span>
        </div>
      )}
    </ul>
  );
};

export default List;
