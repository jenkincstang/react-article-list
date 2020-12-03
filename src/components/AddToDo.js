import React , {useEffect, useState} from "react";

export default function AddToDo(props){

    const initState = {
        id:"",
        title:"",
        completed: "false"
    }
    const [state,setState] = useState(initState);

    const handleChange = (event) =>{
        setState({
            ...state,
            [event.target.id] : event.target.value
        })
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        props.addToDo(state);
        setState(initState);
    }
    
    return(
        <div>
            <h1>Add To Do</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input id="id" className="form-control" placeholder="Enter Id" value={state.id} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <input id="title" className="form-control" placeholder="Enter Title" value={state.title} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <select id="completed" className="form-control" value={state.completed} onChange={handleChange}>
                        <option name="pending" value="false">Penging</option>
                        <option name="done" value="true">Done</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary form-control">AddToDo</button>
                </div>
            </form>
        </div>
    )
}