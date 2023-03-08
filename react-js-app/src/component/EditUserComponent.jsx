import React, { Component } from 'react'
import ApiService from '../service/ApiService';

class EditUserComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            gender: '',
            age: ''
        }
        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        ApiService.fetchUserById(window.localStorage.getItem("userId"))
            .then((res) => {
                let user = res.data.result;
                this.setState({
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    gender: user.gender,
                    age: user.age,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
        let user = { id: this.state.id, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, gender: this.state.gender, age: this.state.age };
        ApiService.editUser(user)
            .then(res => {
                this.setState({ message: 'User added successfully.' });
                this.props.history.push('/users');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit User</h2>
                <form>

                    <div className="form-group">
                        <label>User Name:</label>
                        <input type="text" placeholder="username" name="username" className="form-control" readonly="true" defaultValue={this.state.username} />
                    </div>

                    <div className="form-group">
                        <label>First Name:</label>
                        <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Last Name:</label>
                        <input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Gender:</label>
                        <input type="number" placeholder="gender" name="gender" className="form-control" value={this.state.gender} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Age:</label>
                        <input type="number" placeholder="age" name="age" className="form-control" value={this.state.age} onChange={this.onChange} />
                    </div>

                    <button className="btn btn-success" onClick={this.saveUser}>Update</button>
                </form>
            </div>
        );
    }
}

export default EditUserComponent;