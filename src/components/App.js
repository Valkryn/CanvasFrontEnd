import React from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'
import NavBar from './NavBar'
import Profile from './Profile'
import PostContainer from './PostContainer'
import PostPage from "./PostPage"
import Filter from "./Filter"





class App extends React.Component {
  state = {
    currentUser: null,
    collection:[],
    categories:[],
    allCollection:[],
    filtered: false,
    selectedCategory:""
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
        collection:obj,
        allCollection:obj
      }))
    })
    fetch("http://localhost:3000/categories")
    .then(resp => resp.json())
    .then((obj) => {
      this.setState((prevState) => ({
        categories:obj
      }))
    })
  }

  updateUser = newUser => {
    this.setState({ currentUser: newUser })
  }

  handleLogin = currentUser => {
    this.setState({ currentUser }, () => {
      this.props.history.push('/profile')
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

  handleAddingNewImageToCollection = (obj) => {
    let newObject = obj
    let copyOfCollection = this.state.collection
    let newCollection = [newObject, ...copyOfCollection]
    this.setState((prevState) => ({
      collection:newCollection
    }))
      this.props.history.push('/')
  }

  selectedCategory = (category) => {
    let copyOfCollection = this.state.collection
    let copyOfAllCollection = this.state.allCollection
    let results = copyOfCollection.filter(obj => obj.category.kind ===category)
    this.setState((prevState)=>({
      selectedCategory:category
    }))
    if (category === "All"){
      this.setState((prevState) => ({
        collection:copyOfAllCollection
      }))
    }else if (this.state.filtered === false){
      this.setState((prevState) => ({
        collection:results,
        filtered:true
      }))
    } else if (this.state.filtered === true){
      this.setState((prevState) => ({
        collection:this.state.allCollection,
        filtered:false
      }))
      this.setState((prevState) => ({
        collection:results,
        filtered:true
      }))
    }

  }

  handleTitle = () =>{
    if (this.state.selectedCategory === "All"){
      return "Gallery Seven"
    } else if (this.state.selectedCategory === ""){
      return "Gallery Seven"
    }else {
      return this.state.selectedCategory
    }
  }

  render() {

    return (
      <>
        <NavBar currentUser={this.state.currentUser} handleLogout={this.handleLogout} />

        <main>

          <Switch>

            <Route path="/signup">
              <SignUp handleLogin={this.handleLogin} />
            </Route>

            <Route path="/login">
              <Login handleLogin={this.handleLogin} />
            </Route>

            <Route path="/profile">
              {this.state.currentUser ? <Profile currentUser={this.state.currentUser}
                                                 updateUser={this.updateUser}
                                                 handleAddingNewImageToCollection={this.handleAddingNewImageToCollection}
                                                 collection={this.state.collection}/> : <Redirect to='/' />}
            </Route>

            <Route path="/home">
              {this.state.currentUser ? <h1 className="welcome">Welcome to Gallery Seven {this.state.currentUser.username}</h1> : <Redirect to='/' />}
            </Route>

            <Route path="/posts/:id" component={PostPage} />


            <Route path="/">
              <div className="welcome">
              <Filter categories={this.state.categories} selectedCategory={this.selectedCategory}/>
                <h1 className="collectionContainerHeader">{this.handleTitle()}</h1>
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
