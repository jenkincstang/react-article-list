import React from "react";
import useFetch from "../functions/useFetch";

export default function DataLoader(){
    const users = useFetch(`https://jsonplaceholder.typicode.com/users`);
    return(
        <div>
            <ol>
                {users.map(user => {
                    return <li key={user.id}>{user.name} : {user.email}</li>
                })}
            </ol>
        </div>
    )
}