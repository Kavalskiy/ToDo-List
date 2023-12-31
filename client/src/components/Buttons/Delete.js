import React from "react";
import { useDispatch } from "react-redux";
import { updateTodos } from "../redux/actions";
import delete_button from '../Assets/delete-button.svg'

const Delete = (id) => {
  const dispatch = useDispatch();

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:6969/todos");
      const data = await response.json();
      dispatch(updateTodos(data));
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:6969/todos/${id.id}`, {
        method: "DELETE",
      });

      fetchTodos();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <button
      className="delete-button"
        onClick={() => {
          deleteTodo(id);
        }}
      >
        <img src={delete_button}></img>
      </button>
    </div>
  );
};

export default Delete;
