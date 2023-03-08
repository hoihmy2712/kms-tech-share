import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListUserComponent from "./ListUserComponent";
import AddUserComponent from "./AddUserComponent";
import EditUserComponent from "./EditUserComponent";

const AppRouter = () => {
    return (
        <div>
            <Router>
                <div className="col-md-6">
                    <h1 className="text-center" style={style}>React User Application</h1>
                    <Routes>
                        <Route path="/" component={<ListUserComponent />} />
                        <Route path="/users" component={<ListUserComponent />} />
                        <Route path="/add-user" component={<AddUserComponent />} />
                        <Route path="/edit-user" component={<EditUserComponent />} />
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

const style = {
    color: 'red',
    margin: '10px'
}

export default AppRouter;