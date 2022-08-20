import React from 'react';
import Todo from "./Todo";

function TodoList({todos, setTodos, compTodos}) {
  return (
    <div>
    <ul>
    {compTodos.map(function (todo){
      //we are adding the data from the todos states into a parameter and then we tap into the info inside the array
      return <Todo 
      todo={todo}
        key={todo.id}
        text={todo.text}
        setTodos={setTodos}
        todos={todos}
        compTodos={compTodos}
      />
    })}
    </ul>
    </div>
  )
}

export default TodoList;