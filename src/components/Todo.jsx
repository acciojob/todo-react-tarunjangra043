import React, { useState } from "react";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setTodos([...todos, inputValue]);
    setInputValue("");
  }

  function handleDlt(index) {
    console.log(index);
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  }

  return (
    <>
      <h1>To-Do List</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button>Add Todo</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button
              onClick={() => {
                handleDlt(index);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
