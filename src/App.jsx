import './App.css';

import { useState } from 'react';

import Input from './assets/Input';
import Tasks from './assets/Tasks';
import Footer from './assets/Footer';


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
    <div className='main-container container d d-block border border-2 rounded-3 my-5  p-3'>
         <h1 className='text-center p-3'>Get Things Done!</h1>
          <Input  handleSubmit={handleSubmit} setTasks={setTasks} setInput={setInput} input={input} error={error}/>
          <Tasks setTasks={setTasks} tasks={tasks} finishedTasks={finishedTasks} setFinishedTasks={setFinishedTasks}  />
          <Footer setFinishedTasks={setFinishedTasks} setTasks={setTasks} tasksLength={tasks.length} finishedTasksLength={finishedTasks.length}/>
    </div>
  );
};

export default App;