import React from "react"



class CommentForm extends React.Component {

  state ={
    content:"",
    user_id: "5",
    post_id:`${this.props.postId}`
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value })
  }



  handleSubmit = (evt) => {
    evt.preventDefault()
    const comment = this.state
    fetch("http://localhost:3000/comments", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comment)
    })
      .then(r => r.json())
      .then((object) => {
        this.props.updateComment(object)
      })
      this.setState((prevState)=>({
        content:""
      }))
  }




  render(){

    return(

      <div className="CommentFormContainer">

        <form className="commentForm" onSubmit={this.handleSubmit}>

          <div id="text" className="card v-card v-sheet theme--light elevation-2" ><span className="headline" >Leave a comment</span>
      <div class="sign-in-wrapper" >
      <textarea cols="60"
      rows="2"
      className="caption disclaimer"
      name="content"
      placeholder="Leave a comment"
      value={this.state.content}
      onChange={this.handleChange}
      />


        <p className="error-message" ></p>

        <input
        type="hidden"
        name="user_id"
        autoComplete="off"
        value={this.state.user_id}
        onChange={this.handleChange}
        />


        <input
        type="hidden"
        name="post_id"
        autoComplete="off"
        value={this.props.postId}
        onChange={this.handleChange}
        />

        <input type="submit" value="Submit Comment" />
      </div>
    </div>

        </form>
      </div>
    )
  }
}
export default CommentForm
