import React, { useState } from 'react';

export default function TodoList() {
  const [todoData, setTodoData] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  

  const addTodo = () => {
    if (newTodo) {
      setTodoData([...todoData, { text: newTodo, done: false }]);
      setNewTodo('');
    }
  };

  const toggleDone = (index) => {
    const updatedTodoData = [...todoData];
    updatedTodoData[index].done = !updatedTodoData[index].done;
    setTodoData(updatedTodoData);
  };

  const removeTodo = (index) => {
    const updatedTodoData = [...todoData];
    updatedTodoData.splice(index, 1);
    setTodoData(updatedTodoData);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="text-center">ITA Todo Liste</h1>
            <div className="mb-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="todoInput"
                  placeholder="Tilføj ny opgave"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                />
                <button className="btn btn-primary" onClick={addTodo}>
                  Tilføj
                </button>
              </div>
            </div>
            <ul className="list-group" id="todoList">
              {todoData.map((todo, index) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  key={index}
                >
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`doneCheckbox${index}`}
                      checked={todo.done}
                      onChange={() => toggleDone(index)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`doneCheckbox${index}`}
                      style={todo.done ? { textDecoration: 'line-through' } : {}}
                    >
                      {todo.text}
                    </label>
                  </div>
                  <button className="btn btn-danger" onClick={() => removeTodo(index)}>
                    Fjern
                  </button>
                  <button className="btn2 btn-danger" onClick={() => removeTodo(index)}>
                    Rediger
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};