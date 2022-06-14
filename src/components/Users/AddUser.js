import React ,{useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css';

const AddUser = (props) =>{

    const [enteredUsername,setenteredUsername]= useState('');
    const [enteredAge,setenteredAge]= useState('');

    const addUserHandler = (event) =>{
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length ===0){
            return;
        } 
        if(+enteredAge <1){
            return;
        }
        console.log(enteredUsername,enteredAge);
        setenteredUsername('');
        setenteredAge('');
    }

    const userNameChangeHandler = (event) =>{
        setenteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) =>{
        setenteredAge(event.target.value);
    }
return(
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" value={enteredUsername} onChange={userNameChangeHandler}/>
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
    </form>
   
    </Card>

);
}

export default AddUser;