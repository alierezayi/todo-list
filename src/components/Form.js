import React from "react";

// Styles
import styles from "./Form.module.css";

const Form = () => {
  return (
    <form className={styles.todoForm}>
      <input type="text" className={styles.todoFormInput} placeholder="Title ..." />
      <button type="submit" className={styles.todoFormSubmit}>Submit</button>
    </form>
  );
};

export default Form;
