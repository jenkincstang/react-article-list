import React , {Component} from "react";

export default class AddToDo extends Component{

    state = {
        id:"",
        title:"",
        completed: "false"
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.id] : event.target.value
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log("submit");
        this.props.addToDo(this.state);
        this.setState({
            id:"",
            title:"",
            completed: "false"
        })
    }
    render(){
        return(
            <div>
                <h1>Add To Do</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input id="id" className="form-control" placeholder="Enter Id" value={this.state.id} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <input id="title" className="form-control" placeholder="Enter Title" value={this.state.title} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <select id="completed" className="form-control" value={this.state.completed} onChange={this.handleChange}>
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
}