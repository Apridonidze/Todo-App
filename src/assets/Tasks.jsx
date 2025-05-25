import checked from '../../src/img/finished-tasks-icon.svg';
import unchecked from '../../src/img/unchecked-icon.svg' ;
import deleteLogo from '../../src/img/delete-icon.svg';
import completedTaskIcon from '../../src/img/completed-task-icon.svg';
import todaysTasks from '../../src/img/todays-tasks-icon.svg';

export default function Tasks({setTasks, tasks, setFinishedTasks,finishedTasks}){

    
    const deleteTask = (index) => {
        const updatedtask = tasks.filter((_,i) => i !== index);
        setTasks(updatedtask)
    };

    const checkTask = (index) => {
        setFinishedTasks(f => [...f, tasks[index]]) 
        const updatedtask = tasks.filter((_,i) => i !== index)
        setTasks(updatedtask)
    };

    
    let dragStartIndex = 0;
    let dragEndIndex = 0 ;

    const handleDrag = () => {
        const tasksClone = [...tasks]
        const temp = tasksClone[dragStartIndex];
        tasksClone[dragStartIndex] = tasksClone[dragEndIndex]
        tasksClone[dragEndIndex] = temp;
        setTasks(tasksClone);
    };

    return(
        <div className="tasks-container">
            <ul>
                {tasks.map((task,index) => 
                    <li key={index}
                        onCopy={() => ('')} 
                        draggable 
                        onDragStart={() => (dragStartIndex = index)} 
                        onDragEnter={dragEndIndex = index} 
                        onDragEnd={handleDrag} 
                        onDragOver={(e) => e.preventDefault()}>

                            <img onClick={() => checkTask(index)} src={unchecked} alt='Check Task'/> 
                               <span>{task}</span>
                            <img src={deleteLogo} alt='Delete Task' onClick={() => deleteTask(index)} />

                    </li>
                )}</ul>

            <ul>
                {finishedTasks.map((finishedTask,finishedIndex) => 
                <li key={finishedIndex}>
                   <img src={checked} alt='Checked Task'/>
                   <span key={finishedIndex}>{finishedTask}</span>
                </li>)}
            </ul>         

            <div>
                <div>
                    <h1>tasks to do:{tasks.length}</h1>
                    <h1>Completed Tasks:{finishedTasks.length}</h1>
                </div>
                
                <div>
                    <button onClick={() => {setTasks([]) || setFinishedTasks([])}}>Clear All</button>
                </div>
            </div>
        </div> 
    );
};