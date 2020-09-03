import React from "react";
import {Link} from "react-router-dom";


export default class CreateUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    onSubmit = event => {
        event.preventDefault();
        const info = {
            name: this.name.value, lastName: this.lastName.value,
            age: this.age.value, username: this.username.value,
            password: this.password.value, email: this.email.value, phone: this.phone.value
        };
        console.log(info);
        const data = this.state.data;
        data.push(info);
        this.setState({
            data: data
        });
    };

    render() {
        return (
            <div>
                <h1>CREATE A USER </h1>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <h1></h1>
                <form className="form-inline" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className="form-control mb-2 mr-sm-2 mb-sm-0"
                        placeholder="Name"
                        ref={input => this.name = input}/>

                    <input
                        type="text"
                        className="form-control mb-2 mr-sm-2 mb-sm-0"
                        placeholder="Last name"
                        ref={input => this.lastName = input}/>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Age"
                        ref={input => this.age = input}/>

                    <input
                        type="text"
                        className="form-control mb-2 mr-sm-2 mb-sm-0"
                        placeholder="Username"
                        ref={input => this.username = input}/>

                    <input
                        type="password"
                        className="form-control mb-2 mr-sm-2 mb-sm-0"
                        placeholder="Password"
                        ref={input => this.password = input}/>

                    <input
                        type="text"
                        className="form-control mb-2 mr-sm-2 mb-sm-0"
                        placeholder="Email"
                        ref={input => this.email = input}/>

                    <input
                        type="text"
                        className="form-control mb-2 mr-sm-2 mb-sm-0"
                        placeholder="Phone"
                        ref={input => this.phone = input}/>


                    <button
                        type="submit"
                        className="btn btn-primary">Save
                    </button>
                </form>
            </div>
        );
    }
}


