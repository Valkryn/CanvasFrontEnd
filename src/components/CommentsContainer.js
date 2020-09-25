import React from "react"
import Comment from "./Comment"


class CommentsContainer extends React.Component {


  render(){


    let renderComment = this.props.comments.map((singleComment) => {
      return <Comment key={singleComment.id} singleComment={singleComment} removeComment={this.props.removeComment}/>
      })

    return(
      <div className="commentsContainer">

        <div className="numberOfComments">
          {this.props.comments.length} Comments
        </div>

        {renderComment}
      </div>
    )
  }
}
export default CommentsContainer
