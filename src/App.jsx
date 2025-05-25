import './App.css';


import { useState } from 'react';

import Input from './assets/Input';
import Tasks from './assets/Tasks';



function App() {
  

  const [input,setInput] = useState('');
  const [tasks,setTasks] = useState([]);
  const [error,setError] = useState('');
  const [finishedTasks,setFinishedTasks] = useState([]);


  function handleSubmit(e){
    e.preventDefault();



    const specialChar = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

    if(input === '' || input === null || input.trim() === ''){
      setError("Input Shouldn't Be Empty")
      setInput('')
    }else if (specialChar.test(input)){
      setError("Input Shouldn't Contain Special Characteristics")
      setInput('')
    }else if (input.length > 30){
      setError("Input Shouln't Be This Long")
      setInput('')
    }else {
      setTasks(t => [...t,input])
      setInput('')
      setError('')
    }
  }


  return (
    <div className='main-container'>
      <h1>Get Things Done!</h1>
      <Input  handleSubmit={handleSubmit} setTasks={setTasks} setInput={setInput} input={input}/>
      <Tasks setTasks={setTasks} tasks={tasks} finishedTasks={finishedTasks} setFinishedTasks={setFinishedTasks}  error={error}/>
      {/* add local  storage to save tasks and after date changes delete all from localstorage()*/}
      {/*add label to input / pass error to Input component and render it on label*/}

    </div>
  );
};

export default App;