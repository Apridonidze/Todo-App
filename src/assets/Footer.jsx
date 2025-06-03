export default function Footer({setFinishedTasks,setTasks,tasksLength,finishedTasksLength}){
    return(

        <div className="Footer-container d d-block d-md-flex justify-content-between  border-2 border-top pt-3">

                <div className="d d-flex gap-3 justify-content-start py-3 pr-1">

                    <span className="fs-5 fs-md-1">Tasks To Do: {tasksLength}</span>
                    <span className="fs-5 fs-md-1">Completed Tasks: {finishedTasksLength}</span>

                </div>
                
                <div className="d d-flex justify-content-start gap-3 py-4 pr-1">

                    <span className="text-decoration-underline pe-auto fs-6" role="button" 
                    onClick={() => {setTasks([])}}>Clear Tasks</span>                              {/*clear all tasks from unfinished tasklist */}

                    <span className="text-decoration-underline pe-auto fs-6" role="button" 
                    onClick={() => {setFinishedTasks([])}}>Clear Finished Tasks</span>             {/*clear all tasks from finished tasklist */}


                    <span className="text-decoration-underline pe-auto fs-6" role="button" 
                    onClick={() => {setTasks([]) || setFinishedTasks([])}}>Clear All</span>        {/*clear all tasks*/}

                </div>

            </div>

    );
};