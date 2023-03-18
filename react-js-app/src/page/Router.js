import React from "react";
import { Routes, Route } from "react-router-dom";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import Home from "./Home";

function AppRouter() {
    return (
        <div style={style}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-user" element={<AddUser />} />
                <Route path="/edit-user/:id" element={<EditUser />} />
            </Routes>
        </div>
    )
}

const style = {
    marginTop: "20px"
}

export default AppRouter;