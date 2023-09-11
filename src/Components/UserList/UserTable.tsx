import { IUserProps } from "@src/Types/UserTypes";
import React from "react";

const UserTable =({users}:IUserProps) =>{

    

    return(
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=>
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                        <td>{user.company.name}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;