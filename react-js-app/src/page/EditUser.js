import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import ApiService from "../service/ApiService";

export default function EditUser() {
    let navigate = useNavigate();

    const { id } = useParams();

    const [user, setUser] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        gender: "",
        age: ""
    });

    const { firstName, lastName, gender, age } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const saveUser = async (e) => {
        e.preventDefault();
        ApiService.editUser(user)
            .then(() => {
                alert('User updated successfully.');
                navigate("/");
            }).catch((e) => {
                // alert("Error while updating user!");
                console.log("error:", e);
            });
    };

    const loadUser = async () => {
        ApiService.fetchUserById(id)
            .then((res) => {
                console.log("loadUser:", res);
                setUser(res.data.result);
            });
    };

    return (
        <div>
            <Typography variant="h4" style={{ style }}>Edit User</Typography>
            <form style={formContainer} onSubmit={(e) => saveUser(e)}>
                <TextField type="text" label="Enter your first name" fullWidth margin="normal" name="firstName" value={firstName} onChange={(e) => onInputChange(e)} />

                <TextField type="text" label="Enter your last name" fullWidth margin="normal" name="lastName" value={lastName} onChange={(e) => onInputChange(e)} />

                <TextField type="text" label="Enter your gender" fullWidth margin="normal" name="gender" value={gender} onChange={(e) => onInputChange(e)} />

                <TextField type="number" label="Enter your age" fullWidth margin="normal" name="age" value={age} onChange={(e) => onInputChange(e)} />

                <Button variant="contained" style={buttonCancel} type="submit">Update</Button>
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