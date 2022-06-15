import React ,{useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css';

const AddUser = (props) =>{

    const [enteredUsername,setenteredUsername]= useState('');
    const [enteredAge,setenteredAge]= useState('');
    const [error,setError] = useState();
    const addUserHandler = (event) =>{
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length ===0){
            setError({
                title: 'Invalid input',
                message: 'Please enter valid name'
            });
            return;
        } 
        if(+enteredAge <1){
            setError({
                title: 'Invalid input',
                message: 'Please enter valid age'
               
            });
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setenteredUsername('');
        setenteredAge('');
    }

    const errorHandler = () =>{
        setError(null);
    }

    const userNameChangeHandler = (event) =>{
        setenteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) =>{
        setenteredAge(event.target.value);
    }
return(
    <div>
        {error && (<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>)}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
         <label htmlFor="username">UserName</label>
         <input 
            id="username" 
            type="text" 
            value={enteredUsername} 
            onChange={userNameChangeHandler}/>
         <label htmlFor="age">Age(Years)</label>
         <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
         <Button type="submit">Add User</Button>
        </form>
   
        </Card>
    </div>

);
}

export default AddUser;