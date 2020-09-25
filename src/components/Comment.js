import React from "react"



class Comment extends React.Component {

  handleSubmit = () =>{
    // console.log(this.props.singleComment)
    this.props.removeComment(this.props.singleComment)
  }

  render(){

    return(

      <div className="commentContainer">

        <div className="commentsUserProfileContainer">


          <div className="commentsUserProfileImage">
            <div>userProfileImage</div>
          </div>

          <div className="commentsUserProfileName">
            <p>{this.props.singleComment.user.username}</p>
          </div>

        </div>

        <div className="commentsContent">
          <p>{this.props.singleComment.content}</p>
        </div>

        <input type="submit" value="Delete Post" onClick={this.handleSubmit}/>

      </div>
    )
  }
}
export default Comment
