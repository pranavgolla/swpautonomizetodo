
import React, { useState, useEffect } from 'react';
import './Todo.css'


const TodoComponent = () => {
  const [todoList, setTodoList] = useState(getTodoListFromLocalStorage());
  const [todosCount, setTodosCount] = useState(todoList.length);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  function getTodoListFromLocalStorage() {
    let stringifiedTodoList = localStorage.getItem('todoList');
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if (parsedTodoList === null) {
      return [];
    } else {
      return parsedTodoList;
    }
  }

  function onAddTodo() {
    let userInputElement = document.getElementById('todoUserInput');
    let userInputValue = userInputElement.value;

    if (userInputValue === '') {
      alert('Enter Valid Text');
      return;
    }

    setTodosCount(todosCount + 1);

    let newTodo = {
      text: userInputValue,
      uniqueNo: todosCount + 1,
    };

    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
    userInputElement.value = '';
  }

   function onDeleteTodo(uniqueNo) {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => todo.uniqueNo !== uniqueNo)
     );
   }

  return (
    
      
        
          <div className="c1">
            <h1>Daily Goals !</h1>
            <div class='c3'>
            <div className="c2">
            <input
              type="text"
              id="todoUserInput"
              className="todo-user-input"
              placeholder="Add a todo"
            />
            <button className="add-toto-button" id="addTodoButton" onClick={onAddTodo}>
              Add Todo 
            </button>
            </div>
            

            <ul className="ul1">
              {todoList.map((todo) => (
                <li
                  key={todo.uniqueNo}
                  className="l1"
                >
                  
                  
                    <label
                      className="la1"
                    >
                      {todo.text}
                    </label>
                    <div className="d1" onClick={() => onDeleteTodo(todo.uniqueNo)}>
                      X
                    </div>
                  
                </li>
              ))}
            </ul>
            </div>
            

          </div>
        
      
    
  );
};

export default TodoComponent;
