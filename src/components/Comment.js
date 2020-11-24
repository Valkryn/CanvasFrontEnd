import React from "react"



class Comment extends React.Component {

  handleSubmit = () =>{
    // console.log(this.props.singleComment)
    this.props.removeComment(this.props.singleComment)
  }

  render(){

    return(
      <div className="commentContainer">

      <div className="comment-container theme--light">
    <div className="comments" >
      <div>
        <div className="card v-card v-sheet theme--light elevation-2">
          <div className="header">
            <div className="v-avatar avatar" style={{height: "50px" , width: "50px"}}>
              <img src={`${this.props.singleComment.user.image}`} alt="profile"/>
            </div>
            <span className="displayName title">
              {this.props.singleComment.user.username}
            </span> <span className="displayName caption"></span>
            </div>
          <div className="wrapper comment">
            <p>{this.props.singleComment.content}</p>
          </div>
          <div className="actions">
          </div>
          <div className="v-dialog__container" style={{display: "block"}}></div>
          <input className="deletebtn"type="submit" value="Delete Comment" onClick={this.handleSubmit}/>
        </div>
      </div>
    </div>

</div>
  </div>



    )
  }
}
export default Comment
