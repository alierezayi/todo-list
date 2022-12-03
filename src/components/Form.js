import React, { useContext } from "react";

// Context
import { TodoContext } from "../context/TodoContextProvider";

// Styles
import styles from "./Form.module.css";

const Form = () => {
  const { state, dispatch } = useContext(TodoContext);

  console.log(state.newTask);
  console.log(state.todoList);

  return (
    <div className={styles.todoForm}>
      <input
        type="text"
        value={state.newTask}
        onChange={(event) => dispatch({ type: "INPUT_VALUE", payload: event })}
        className={styles.todoFormInput}
        placeholder="Title ..."
      />
      <button
        onClick={() => dispatch({ type: "ADD_TASK" })}
        className={styles.todoFormButton}
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
