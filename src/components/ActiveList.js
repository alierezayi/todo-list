import React, { useContext } from "react";

// Styles
import styles from "./ActiveList.module.css";

// Context
import { TodoContext } from "../context/TodoContextProvider";

// Components
import ActiveTask from "./ActiveTask";

const ActiveList = () => {
  const { state } = useContext(TodoContext);

  const filteredTodoList = state.todoList.filter(
    (item) => item.completed === false
  );

  return (
    <ul className={styles.listContainer}>
      {filteredTodoList.length ? (
        filteredTodoList.map((task) => <ActiveTask key={task.id} task={task} />)
      ) : (
        <div className={styles.noData}>
          <span>There is no data for show!</span>
        </div>
      )}
    </ul>
  );
};

export default ActiveList;
