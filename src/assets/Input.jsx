export default function Input({handleSubmit, setInput,input}){

    

    return(
        <div className="input-container">
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add Your Tasks..." onChange={(e) => setInput(e.target.value)} value={input}/>
            <input type="submit" value={"Add"}/>
            </form>
        </div> 
    );
};