import React, { useContext } from "react";

// Icon
import Xicon from "../assets/x-mark.svg";

// Styles
import styles from "./ActiveTask.module.css";

// Context
import { TodoContext } from "../context/TodoContextProvider";

const ActiveTask = ({ task }) => {
  const { id, text, completed } = task;

  const { dispatch } = useContext(TodoContext);

  return (
    <li className={completed ? styles.taskCompleted : styles.task}>
      <div className={styles.inputAndTextContainer}>
        <input
          className={styles.taskCheckbox}
          type="checkbox"
          value={completed}
          onChange={() => dispatch({ type: "COMPLETE_TASK", payload: { id } })}
        />
        <span
          className={completed ? styles.taskTextCompleted : styles.taskText}
        >
          {text}
        </span>
      </div>
      <button
        onClick={() => dispatch({ type: "DELETE_TASK", payload: task })}
        className={styles.deleteTask}
      >
        <img src={Xicon} alt="icon" />
      </button>
    </li>
  );
};

export default ActiveTask;
