import { IAddNewUser } from "@src/Types/UserTypes";
import React, { useState } from "react";

const AddNewUser =({handleAddNewUser}:IAddNewUser) =>{
 const [name,setName] = useState<string>("");
 const [email,setEmail] = useState<string>("");
 const [city,setCity] = useState<string>("");
 const [company,setCompany] = useState<string>("");

 const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const newUser = {
        id: Date.now(),
        name: name,
        email:email,
        address:{city:city},
        company:{name:company}
    }
    handleAddNewUser(newUser);
    //toast('User adde successfully!')
 }


    return(
        <div>
            <form onSubmit={(e)=> handleAddNewUser(e)}>
                <div>
                    <label>Name:</label>
                    <input type="text"  value={name} onChange={(e)=> setName(e.target.name)}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" value={email} onChange={(e)=> setEmail(e.target.name)}/>
                </div>
                <div>
                    <label>City:</label>
                    <input type="text" value={city} onChange={(e)=> setCity(e.target.name)}/>
                </div>
                <div>
                    <label>Company:</label>
                    <input type="text" value={company} onChange={(e)=> setCompany(e.target.name)}/>
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddNewUser;