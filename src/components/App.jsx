import {React, useState, useEffect} from 'react';
import Form from "./Form";
import TodoList from './TodoList';

function App() {
  
  //Takes care of the text inputted
  //to update our input, we need to the pass the setInput function as prop in the form jsx element
  const [input, setInput] = useState("")
  //our second state that will contain  . Here it is an array because it will contain a bunch of objects.
  const [todos, setTodos] = useState([])
  // adding a state that will contain both completed and uncompleted tasks
  const [allTodos, setAlltodos] = useState("all")
  const [compTodos, setCompTodos] = useState([])
  // useeffect allows for a function to be run whenever a specific state changes.
  //the thing within the array is the state that you want to link it to. So that when that state changes the function is run
  useEffect(() => {filterSelection();}, 
  [todos, allTodos]);

  function filterSelection(){
    switch(allTodos){
      //these cases are for when you choose different options in the selector
      case "completed": 
        setCompTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setCompTodos(todos.filter(todo => todo.completed === false));  
        break;
      default:
        setCompTodos(todos);
        break;  
      }
  }

  return (
    <div>
    <h1 style={{display: "flex", justifyContent: "center"}}>Todo List </h1>
    <Form
    //this is how we use props to get data from the input on the form into the setInput function here in the app or state var which is the input 
    //this is our way of manipulating the data within the form component
     input={input}
     setInput={setInput}
     todos={todos}
     setTodos={setTodos}
     allTodos={allTodos}
     setAlltodos={setAlltodos}
     />
     {/*now what we are going to do is add the input variable into the list so that we have our inputted text show in the list*/}
    <TodoList
      todos={todos}
      setTodos={setTodos}
      compTodos={compTodos}
     />
    </div>
    
    
  )
}

export default App;

// so now with the first state we will store the intial inputted data, once we start inputting stuff in the input
// the second state will have an array containing all the details of the inputted data, once we hit on submit