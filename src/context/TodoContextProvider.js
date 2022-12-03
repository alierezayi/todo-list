import { createContext, useReducer } from "react";

const initialState = {
  newTask: "",
  todoList: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT_VALUE":
      return {
        ...state,
        newTask: action.payload.target.value,
      };

    case "ADD_TASK":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { id: Date.now(), text: state.newTask, completed: false },
        ],
        newTask: "",
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
