import React from 'react';
import '../App.css';
import PostDetails from './PostDetails';
import { Image } from 'semantic-ui-react'


class Post extends React.Component {


  render () {
    console.log(this.props.singleObject.posts)
  return (
    // <div className="postImageContainer">
    //     <Image className="postImage" src={`${this.props.singleObject.posts}`} size='medium' rounded />
    // </div>

  <div className="postImageContainer">
    <div className="column">
      <Image className="postImage" src={`${this.props.singleObject.posts}`} size='medium' rounded />
      <span> name</span>
    </div>
  </div>
  );
  }
}

export default Post;
