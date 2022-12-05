import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

// Styles
import styles from "./Footer.module.css";

// Context
import { TodoContext } from "../context/TodoContextProvider";

const Footer = () => {
  const { state, dispatch } = useContext(TodoContext);

  const leftItems = state.todoList.filter(
    (item) => item.completed === false
  );

  return (
    <div className={styles.footerContainer}>
      <div className={styles.todoLeft}>
        <span>{leftItems.length}</span>
        <span>Item left</span>
      </div>
      <div className={styles.linkGroup}>
        <NavLink to="all-tasks" className={({ isActive }) => isActive ? styles.activeLink : styles.inActiveLink}>
          All
        </NavLink>
        <NavLink to="active-tasks" className={({ isActive }) => isActive ? styles.activeLink : styles.inActiveLink}
        >
          Active
        </NavLink>
      </div>
      <button className={styles.clearCompleted} onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>clear completed</button>
    </div>
  );
};

export default Footer;
