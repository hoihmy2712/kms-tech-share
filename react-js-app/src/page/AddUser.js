import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiService from "../service/ApiService";

export default function AddUser() {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        gender: "",
        age: ""
    });

    const { username, password, firstName, lastName, gender, age } = user;

    const saveUser = async (e) => {
        e.preventDefault();
        let user = { username: username, password: password, firstName: firstName, lastName: lastName, gender: gender, age: age };
        ApiService.addUser(user)
            .then(() => {
                alert('User added successfully.');
                navigate('/');
            }).catch((e) => {
                alert("Error to add new user!");
                console.log("error:", e);
            });
    }

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <Typography variant="h4" style={{ style }}>Add User</Typography>
            <form style={formContainer} onSubmit={(e) => saveUser(e)}>
                <TextField type="text" placeholder="Enter your username" label="Enter your username" fullWidth name="username" value={username} onChange={(e) => onInputChange(e)} />

                <TextField type="password" size="32" placeholder="Enter your password" label="Enter your password" fullWidth margin="normal" name="password" value={password} onChange={(e) => onInputChange(e)} />

                <TextField type="text" placeholder="Enter your first name" label="Enter your first name" fullWidth margin="normal" name="firstName" value={firstName} onChange={(e) => onInputChange(e)} />

                <TextField type="text" placeholder="Enter your last name" label="Enter your last name" fullWidth margin="normal" name="lastName" value={lastName} onChange={(e) => onInputChange(e)} />

                <TextField type="text" placeholder="Enter your gender" label="Enter your gender" fullWidth margin="normal" name="gender" value={gender} onChange={(e) => onInputChange(e)} />

                <TextField type="number" placeholder="Enter your age" label="Enter your age" fullWidth margin="normal" name="age" value={age} onChange={(e) => onInputChange(e)} />

                <Button variant="contained" style={buttonCancel} type="submit">Save</Button>
                <Link to={`/`} style={cancel}><Button variant="contained" style={buttonCancel}>Cancel</Button></Link>
            </form>
        </div>
    );
}

const formContainer = {
    display: "flex",
    flexFlow: "row wrap"
};

const style = {
    display: "flex",
    justifyContent: "center"
}

const cancel = {
    textDecoration: "none"
}

const buttonCancel = {
    margin: "5px"
}