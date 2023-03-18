import React, { useEffect, useState } from "react";
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ApiService from "../service/ApiService";

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        ApiService.fetchUsers()
            .then((res) => {
                console.log("loadUsers:", res);
                setUsers(res.data.result);
            });
    };

    const deleteUser = async (userId) => {
        ApiService.deleteUserById(userId)
            .then(() => {
                alert("User deleted successfully.");
                loadUsers();
            }).catch((e) => {
                alert("Error occurred while deleting a user with id" + userId);
                console.log("error:", e);
            });
    };

    return (
        <div>
            <Typography variant="h4" style={{ style }}>User Details</Typography>
            <Link to={`/add-user`} style={{ textDecoration: 'none' }}>
                <Button variant="contained" startIcon={<Add />}>
                    Add User
                </Button>
            </Link>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>FirstName</TableCell>
                        <TableCell>LastName</TableCell>
                        <TableCell>UserName</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map(
                            user =>
                                <TableRow key={user.id}>
                                    <TableCell component="th" scope="row">{user.id}</TableCell>
                                    <TableCell>{user.firstName}</TableCell>
                                    <TableCell>{user.lastName}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.gender}</TableCell>
                                    <TableCell>{user.age}</TableCell>
                                    <TableCell>
                                        <Link to={`/edit-user/${user.id}`}>
                                            <Button><Edit></Edit></Button>
                                        </Link>
                                        <Button onClick={() => deleteUser(user.id)}>
                                            <Delete></Delete>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </div>
    );
}

const style = {
    display: "flex",
    justifyContent: "center"
}