import React from 'react';
import '../App.css';

class SignUp extends React.Component {

  state = {
    name:"",
    email: "" ,
    bio:"",
    password: ""
  }


  handleChange = (evt) => {
    const { name , value} = evt.target
    this.setState((prevState) => ({
      [name]: value
    }))
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    fetch("http://localhost:3000/users",{
      method:"POST",
      credentials: "include",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
  }


  render () {
  return (
    <div>
      <form onSubmit= {this.handleSubmit} >
        <h1> Sign Up </h1>

        <label> Name </label>
        <input type="text" name="name" autoComplete="off" value={this.state.name} onChange={this.handleChange} />

        <br />

        <label> Email </label>
        <input type="text" name="email" autoComplete="off" value={this.state.email} onChange={this.handleChange} />

        <br />
        <label> Bio </label>
        <textarea nam="bio" rows = "5" cols = "50" name = "bio" autoComplete="off" value={this.state.bio} onChange={this.handleChange} />

        <br />

        <label> Password </label>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} autoComplete="current-password" />

        <br />

        <input type="submit" value="SignUp" />
      </form>
    </div>
  );
  }
}

export default SignUp;
