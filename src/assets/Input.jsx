/* input fnc which sends input to App.jsx */
export default function Input({handleSubmit, setInput,input}){


    return(
        <div className="Input-container py-3">

          <form onSubmit={handleSubmit} >
              <div className="input-group">
                
                <input type="text" placeholder="Add Your Tasks..." className="form-control" onChange={(e) => setInput(e.target.value)} value={input}/>
                <input type="submit" value={"Add"} className="btn btn-xxl btn-success"/>
              </div>

          </form>

        </div> 
    );
};