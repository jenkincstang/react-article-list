import React ,{Component} from "react";
import AddToDo from "./AddToDo";
import axios from "axios"
import ToDoItem from "./ToDoItem";
import { v4 as uuidv4 } from 'uuid';

export default class TodoList extends Component{
    state = {
        todos:[]
    };
    deleteTodo = (todo) => {
        const filteredTodos = this.state.todos.filter(item => item.id !== todo.id);
        this.setState({
            todos:filteredTodos
        })
    };
    editTodo = (todo) => {
        const mapedTodos = this.state.todos.map(item => {
            if(item.id === todo.id){
                return {
                    ...item,
                    completed:!item.completed
                }
            }else{
                return item
            }
        });
        this.setState({
            todos:mapedTodos
        })
    }
    addTodo = (todo) =>{
        this.setState({
            todos:[...this.state.todos,todo]
        })
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then(response =>{
            const todos = response.data;
            this.setState({todos});
        })
    }
    render(){
        return(
            <div>
                <AddToDo addToDo={this.addTodo}></AddToDo>
                <h1>To Do List</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(todo => {
                                return (
                                    <ToDoItem key={uuidv4()} deleteTodo={this.deleteTodo} editTodo={this.editTodo} todo={todo}></ToDoItem>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}