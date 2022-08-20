import React from 'react';


// so in this form we will add a function that will update the input state inside the app, so that we can use the data
// second would be to add an event to the input element of the form, using the onChnage event. So that whenever anything is inputted 
// the inputHandler function will run

// here we passed todos, input and setInput because we didnt write the in a way that allows to acces them, like this, = props.input, for example
// we didnt inclue setTodos since we used it in props.setTodos in the submitHandler function
// there is another wya to tap into the form properties import this {todos, input, setTodos, setInput} inside the form(import here) instead of using props.
function Form(props) {
 //here we added the props or properties so that we get the data from the form   
    function inputHandler(event){
        //the event.target.value will give the data that was inputted(whatever you wrote in the input)
        //here will add the prop that will take our recently inputted data and will transfer into the input variable
        return (props.setInput(event.target.value));
        //in this step we add the data inputted into the setInput function so that the input variable is updated in the app component
    }
    //this function will prevent the form rom refreshing when data is submitted. Moreover, it will include the setTodos function for a similiar purpose to the function found above.
    function submitHandler(event){
        event.preventDefault();
        //this will have destructured style where if we have stuff inside the todos it will passed on. Here you will have a bunch of things you would to pass, whether the todo was completed
        //and the value of the input and an id unique for every todo input
        //if you use props.setTodos it will not work
        props.setTodos([...props.todos, {text: props.input, completed: false, id: Math.floor(Math.random()*1000)}])
        //...todos is for any existing data to be included, what is after is for any new data entered. The new state was not updating
        props.setInput("");
    }
    // now to tackle another problem which is how to remove the data from the input without having to do it manually. As it will store whatever that was inputted at all times
    //we need to add the submitHandler function that the setInput will be reseset into an empty string
    function selectionHandler(event){
        props.setAlltodos(event.target.value);
    }

    
  return (  
    <div className='form-todo'>
        <form onSubmit={submitHandler}>
            <input className='form-input' type="text" onChange={inputHandler} value={props.input} />
            <button className='form-btn' type='submit'>+
            <i className="fas fa-plus-square"></i>
            </button>
            <div className='select'>
                <select onChange={selectionHandler} ename='todos' className='selectTodos'>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Form;