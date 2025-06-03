import { useState } from 'react';


import checked from '../../src/img/finished-tasks-icon.svg'; /* importing imgs*/
import unchecked from '../../src/img/unchecked-icon.svg' ;/* importing imgs*/
import deleteLogo from '../../src/img/delete-icon.svg'; /* importing imgs*/
import completedTaskIcon from '../../src/img/completed-task-icon.svg'; /* importing imgs*/
import todaysTasks from '../../src/img/todays-tasks-icon.svg'; /* importing imgs*/
import collapseIcon from '../../src/img/collapse-icon.svg'; /* importing imgs*/


export default function Tasks({setTasks, tasks, setFinishedTasks,finishedTasks}){

    const [collapsed,setCollapsed] = useState(false);     /*collapse function's states*/
    const [collapsed2,setCollapsed2] = useState(false);/*collapse function's states*/
    const [transfromVar,setTransfrom] = useState(''); /*collapse function's states*/
    const [transfromVar2,setTransfrom2] = useState(''); /*collapse function's states*/

    const deleteTask = (index) => {
        const updatedtask = tasks.filter((_,i) => i !== index);
        setTasks(updatedtask);
        /* deletes tasks from Tasks */
    };

    const checkTask = (index) => {
        setFinishedTasks(f => [...f, tasks[index]]) 
        const updatedtask = tasks.filter((_,i) => i !== index);
        setTasks(updatedtask);
        /*sets unfinished task's status to finished */
    };
    const uncheckTask = (finishedIndex) => {
        setTasks(t => [...t,finishedTasks[finishedIndex]]);
        const updatedFinishedTask = finishedTasks.filter((_,i) => i !== finishedIndex);
        setFinishedTasks(updatedFinishedTask);
        
        /*sets finished task's status to unfinished */
    }
    
    let dragStartIndex = 0;
    let dragEndIndex = 0 ;

    const handleDrag = () => {
        const tasksClone = [...tasks]
        const temp = tasksClone[dragStartIndex];
        tasksClone[dragStartIndex] = tasksClone[dragEndIndex]
        tasksClone[dragEndIndex] = temp;
        setTasks(tasksClone);

        /*drag function for unfinished tasks */
    };

    const collapsedFnct = () => {
        setCollapsed(!collapsed);
        {collapsed ? setTransfrom('0deg') : setTransfrom('-180deg')};

        /*triggers collapse animation for unfinished tasks */
    }

    const collapsedFnct2 = () => {
        setCollapsed2(!collapsed2);
        {collapsed2 ? setTransfrom2('0deg') : setTransfrom2('-180deg')};
        /*triggers collapse animation for unfinished tasks */
    
    }

    return(
        <div className='Tasks-container'>
    
            <div className="todo-tasks-container d d-block d-block border-bottom border-2 rounded-0 mb-3" > 

                <div className="container-header d d-flex justify-content-between align-center text-center py-3">
                    <span className='d-flex gap-3 align-items-center fs-4'><img src={todaysTasks} alt="Todays Tasks Icon" style={{width: '30px'}} />Finished Tasks :</span>
                    <img src={collapseIcon} alt='collapse icon' style={{width: '15px',transform: `rotate(${transfromVar2})`,transition:"all 0.25s"}} onClick={() => collapsedFnct2()} className='d d-sm' type="button" data-bs-toggle="collapse" data-bs-target="#collapseDiv" aria-expanded="true" aria-controls="collapseDiv" /> 
                </div>

                <div className="collapse show " id='collapseDiv'>
                  <ul className='list-group py-3' >
                    {tasks == 0 ? <h1 className='fs-4 text-muted'>No Tasks Yet...</h1>:  tasks.map((task,index) => 
                        <li className='list-group-item d d-flex justify-content-between border border-secondary my-1 border rounded-1'
                            key={index}
                            draggable 
                            onCopy={() => ('')} 
                            onDragStart={() => (dragStartIndex = index)} 
                            onDragEnter={dragEndIndex = index} 
                            onDragEnd={handleDrag} 
                            onDragOver={(e) => e.preventDefault()}>

                            <img className='pe-auto' onClick={() => checkTask(index)} src={unchecked} alt='Check Task' 
                            role='button'/> 
                               <span>{task}</span>
                            <img src={deleteLogo} alt='Delete Task' 
                            role='button' onClick={() => deleteTask(index)} />

                        </li>

                    )} 
                   </ul>
                </div>
            </div>


            <div className="finished-tasks-container py-3">

                    <div className="container-header d d-flex justify-content-between align-center text-center py-2">
                        <span className='d-flex gap-3 align-items-center fs-4'><img src={completedTaskIcon} alt="Completed Task Icon" style={{width: '30px'}} />Finished Tasks :</span>
                        <img src={collapseIcon} alt='collapse icon' style={{width: '15px',transform: `rotate(${transfromVar})`,transition:"all 0.25s"}} onClick={() => collapsedFnct()} className='d d-sm' type="button" data-bs-toggle="collapse" data-bs-target="#collapseDiv2" aria-expanded="true" aria-controls="collapseDiv2" />
                    </div>

                <div className='collapse show' id='collapseDiv2'>
                    <ul className='list-group d d-flex justify-content-between py-3'>
                        {finishedTasks == 0 ? <h1 className='fs-4 text-muted'>No Finished Tasks Yet...</h1> : finishedTasks.map((finishedTask,finishedIndex) => 
                        <li className='list-group-item d d-flex gap-3 my-1 border rounded-1' key={finishedIndex}>
                          <img src={checked} alt='Checked Task' 
                            role='button' onClick={() => uncheckTask(finishedIndex)}/>
                          <span key={finishedIndex}>{finishedTask}</span>
                        </li>)}
                    </ul> 
                </div>

            </div>

        </div> 
    );
};