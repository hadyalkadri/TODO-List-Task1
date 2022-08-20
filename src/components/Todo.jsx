import React from 'react';

//we are adding the text prop from  the todos array.
//now to add a deleting functionality to our todo list we need to create a function that will allow for manipulation of the
//setTodos function which takes control of the array (todos)
function Todo({todo, text, todos, setTodos}) {

    function removeTodo(){
    //this is piece of code is used to filter out the elements of the todos array, so that when the id matches to an element 
    //from the todos array it will remove it
    setTodos(todos.filter((element) => element.id !== todo.id))
}
    function checkCompletion(){
        setTodos(todos.map((item) => {
                if(item.id === todo.id){
                    return {
                        //what does the ...item mean leave all the properties and just modify what comes after the comma
                        ...item, completed: !item.completed //!item.completed here is true the opposit of false
                    }}
                    return item;
        }))};
 

  return (
    <div className='todo'>
    {/* here we will add to the className of the list tag some brackets for the purpose of adding a linethrough completed tasks 
    and we use a different quotation mark the one below the escape button*/}
    {/*`todo-item ${todo.completed ? "completed" : null}`
    style={todo.completed ? "textDecoration: lineThrough": null}
    */}
        <li className={`todo-item ${todo.completed ? "completed" : null}`} >{text}</li>
        <button className='complete-btn' onClick={checkCompletion}>✓</button>
        <button className='trash-btn' onClick={removeTodo}>✗</button>
    </div>
  )
}

export default Todo;