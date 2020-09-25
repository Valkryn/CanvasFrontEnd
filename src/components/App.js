import React from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'
import NavBar from './NavBar'
import Profile from './Profile'
import PostContainer from './PostContainer'
// import '../index.css';
import ImageUpload from "./ImageUpload"
import PostPage from "./PostPage"





class App extends React.Component {
  state = {
    currentUser: null,
    collection:[]
  }


  componentDidMount() {
    fetch("http://localhost:3000/autologin", {
      credentials: "include"
    })
      .then(resp => {
        if (resp.ok) {
          return resp.json()
        } else {
          throw Error("Not logged in!")
        }
      })
      .then(user => {
        this.handleLogin(user)
      })
      .catch((err) => console.error(err))

      fetch("http://localhost:3000/posts")
    .then(resp => resp.json())
    .then((obj) => {
      this.setState((prevState) => ({
        collection:obj
      }))
    })
  }

  updateUser = newUser => {
    this.setState({ currentUser: newUser })
  }

  handleLogin = currentUser => {
    // set current user, then redirect to home page
    this.setState({ currentUser }, () => {
      this.props.history.push('/')
    })
  }

  handleLogout = () => {
    fetch("http://localhost:3000/logout", {
      credentials: "include"
    })
      .then(resp => resp.json())
      .then(() => {
        this.setState({ currentUser: null }, () => {
          this.props.history.push('/')
        })
      })
  }

  handleViews = (obj) =>{
    let newViewCount = parseInt(obj.views) + 1
    let newObject = obj
    newObject.views = newViewCount
    let targetPost = this.state.collection.filter(object => object.id !==obj.id)
    let newCollection = [newObject, ...targetPost]

    fetch(`http://localhost:3000/posts/${obj.id}`, {
      method:"PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        views:newViewCount
      })
    })
    .then(resp => resp.json())
    .then((obj) => {
      this.setState((prevState) => ({
        collection :newCollection
      }))
    })
  }

  render() {
    return (
      <>
        <NavBar currentUser={this.state.currentUser} handleLogout={this.handleLogout} />

        <main>
        <div>
        <ImageUpload />
        </div>
          <Switch>

            <Route path="/signup">
              <SignUp handleLogin={this.handleLogin} />
            </Route>

            <Route path="/login">
              <Login handleLogin={this.handleLogin} />
            </Route>

            <Route path="/profile">
              {this.state.currentUser ? <Profile currentUser={this.state.currentUser} updateUser={this.updateUser} /> : <Redirect to='/' />}
            </Route>

            <Route path="/home">
              {this.state.currentUser ? <h1 className="welcome">Welcome to Gallery Seven {this.state.currentUser.username}</h1> : <Redirect to='/' />}
            </Route>

            <Route path="/posts/:id" component={PostPage} />


            <Route path="/">
              <div className="welcome">
                <h1>Gallery Seven</h1>
                <PostContainer objects={this.state.collection} handleViews={this.handleViews}/>
              </div >
            </Route>

          </Switch>


        </main>
      </>
    );
  }
}

export default withRouter(App);
