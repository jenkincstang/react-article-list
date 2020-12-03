import React , {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ToDoItem(props){
    const todo = props.todo;
    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td style={{color: todo.completed ? "green" : "red"}}>{todo.completed ? "Done":"Pending"}</td>
            <td>
                <button className="btn btn-primary" onClick={()=> props.deleteTodo(todo)}>
                    <span>
                        <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                    </span>
                </button>
                <button className="btn btn-primary" onClick={() => props.editTodo(todo)}>
                    <span>
                        <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                    </span>
                </button>
            </td>
        </tr>
    )  
}