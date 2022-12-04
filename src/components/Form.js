import React, { useContext, useState } from "react";
import uuid from "react-uuid";

// Context
import { TodoContext } from "../context/TodoContextProvider";

// Styles
import styles from "./Form.module.css";

const Form = () => {
  const { state, dispatch } = useContext(TodoContext);

  console.log(state.todoList);
  const [text, setText] = useState("");

  const addTask = () => {
    !text
      ? alert("Please enter your task.")
      : dispatch({ type: "ADD_TASK", payload: { text, id: uuid() } });
    setText("");
  };

  return (
    <div className={styles.todoForm}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        className={styles.todoFormInput}
        placeholder="Title ..."
      />
      <button onClick={addTask} className={styles.todoFormButton}>
        Submit
      </button>
    </div>
  );
};

export default Form;
