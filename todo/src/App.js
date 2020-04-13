import React, { useState, useReducer } from 'react';
import './App.css';
import {Reducer, initialState} from "./reducers/Reducer"
import ToDoList from "./components/ToDoList"

function App() {

  const [state, dispatch] = useReducer(Reducer, initialState);
  const [newTask, setNewTask] = useState("");
  console.log(state)

  const handleChanges = e => {
    setNewTask(e.target.value);
  }

  const submitForm = e => {
    e.preventDefault();
    dispatch({type:"ADD_TASK", payload:newTask})
    setNewTask("")
  }
  const toggleTask = id => {
    dispatch({type:"TOGGLE_TASK", payload:id})
  }

  const clearComplete = e => {
    e.preventDefault();
    dispatch({type:"CLEAR_COMPLETE"})
  }
  return (
    <div className="App">
      <h1>Reducer To Do</h1>
        <div>
          <input 
          type="text"
          value={newTask}
          name="newTask"
          onChange={handleChanges}/>
        <button onClick={submitForm}>Submit</button>
        <button onClick={clearComplete}>Clear Complete</button>
        </div>
        <ToDoList task ={state} toggleTask={toggleTask}/>

    </div>
  );
}

export default App;
