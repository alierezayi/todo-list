import { createContext, useReducer } from "react";

const initialState = {
  todoList: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newTask = {
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      };
      return {
        ...state,
        todoList: [...state.todoList, newTask],
      };

    case "DELETE_TASK":
      const newtodoList = state.todoList.filter(
        (task) => task.id !== action.payload.id
      );
      return {
        ...state,
        todoList: [...newtodoList],
      };

    case "COMPLETE_TASK":
      const updateALLTasks = state.todoList.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      return {
        ...state,
        todoList: [...updateALLTasks],
      };

    case "DELETE_COMPLETED":
      const clearCompletedItems = state.todoList.filter(
        (item) => item.completed === false
      );
      return {
        ...state,
        todoList: [...clearCompletedItems],
      };

    default:
      return state;
  }
};

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
