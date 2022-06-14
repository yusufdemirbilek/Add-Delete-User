import React from "react";
import Card from "../UI/Card";
import classes from './UserList.module.css';

const UserList = (props) =>{
    return <Card classes={classes.users}>
    <ul>
        {props.users.map(user =>
             <li>{user.name} {(user.age)} years old
        </li>)}
    </ul>
    </Card>
}

export default UserList;