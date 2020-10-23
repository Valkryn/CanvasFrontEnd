import React from 'react';
import '../App.css';
import Post from './Post'

class PostContainer extends React.Component {




  render () {
    let renderObject = this.props.collection.map((singleObject) => {
    return <Post key={singleObject.id}
    singleObject={singleObject}
     /> })
  return (
    <div>
      <h1> Post Container</h1>
      {renderObject}
    </div>
  );
  }
}

export default PostContainer;
