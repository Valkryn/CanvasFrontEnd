import React from 'react';
import '../App.css';
import Header from './Header';
import Category from './Category';
import PostContainer from './PostContainer';
import { Route , Switch } from "react-router-dom"
import Login from "./Login"
import SignUp from "./SignUp"


class App extends React.Component {

  state = {
    collection: []
  }


  // componentDidMount = () =>{
  //   fetch("http://localhost:3000/photos")
  //   .then(resp => resp.json())
  //   .then((obj) => {
  //     this.setState((prevState) => ({
  //       collection:obj
  //     }))
  //   })
  // }

  render () {

  return (
    <div className="App">
      <Header />
      <Category />
      <main>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/hello">
            <h1> Hello</h1>
          </Route>

          <Route path="/bye">
            <h1> Goodbye</h1>
          </Route>

          <Route path="/">
            <PostContainer collection={this.state.collection} />
          </Route>

         </Switch>
       </main>

    </div>
  );
  }
}

export default App;
