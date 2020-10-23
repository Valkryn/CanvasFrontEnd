import React from 'react';
import '../App.css';

class Login extends React.Component {

  state = {
    email: "" ,
    password: ""
  }


  handleChange = (evt) => {
    const { name , value} = evt.target
    this.setState((prevState) => ({
      [name]: value
    }))
  }

  handleSubmit = (evt) => {
    
  }


  render () {
  return (
    <div>

      <form onSubmit= {this.handleSubmit} >
        <h1> Log in </h1>

        <label> Email </label>
        <input type="text" name="email" autoComplete="off" value={this.state.email} onChange={this.handleChange} />

        <label> Password </label>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} autoComplete="current-password" />

        <input type="submit" value="Login" />
      </form>

    </div>
  );
  }
}

export default Login;
