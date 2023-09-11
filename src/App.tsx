import React, { useEffect, useState } from "react";
import {BrowserRouter, Link, Route, Routes}  from "react-router-dom";
import UserTable from "./Components/UserList/UserTable";
import AddNewUser from "./Components/AddNewUser/AddNewUser";
import './App.css';
import { IUser } from "./Types/UserTypes";

const App: React.FC = () => {
  const [users,setUsers] = useState<IUser[]>([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((result)=> {
        result.sort((a:IUser,b:IUser)=> a.name > b.name ? 1 : -1)
        setUsers(result);
    })
},[]);

const handleAddNewUser = (user:IUser) =>{
  setUsers([...users,user])
}
  

  return (
    <BrowserRouter>
    <header>
      <ul>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/add-new-user">Add New Users</Link></li>
      </ul>
    </header>
    <div className="appContainer">
    <Routes>
      <Route path="/users" element={<UserTable users={users}/>} />
      <Route path="/add-new-user" element={<AddNewUser handleAddNewUser={handleAddNewUser}/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
};
export default App;
