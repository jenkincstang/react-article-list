import React ,{useEffect, useState} from "react";
import AddToDo from "./AddToDo";
import axios from "axios"
import ToDoItem from "./ToDoItem";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    const [todos,setTodos] = useState([]);
    const deleteTodo = (todo) => {
        const filteredTodos = todos.filter(item => item.id !== todo.id);
        setTodos(
            filteredTodos
        )
    };
    const editTodo = (todo) => {
        const mapedTodos = todos.map(item => {
            if(item.id === todo.id){
                return {
                    ...item,
                    completed:!item.completed
                }
            }else{
                return item
            }
        });
        setTodos(
            mapedTodos
        )
    }
    const addTodo = (todo) =>{
        setTodos(
            [...todos,todo]
        )
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then(response =>{
            const todos = response.data;
            setTodos(todos);
        })
    },[])
    return(
        <div>
            <AddToDo addToDo={addTodo}></AddToDo>
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
                        todos.map(todo => {
                            return (
                                <ToDoItem key={uuidv4()} deleteTodo={deleteTodo} editTodo={editTodo} todo={todo}></ToDoItem>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}