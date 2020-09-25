import React from "react"



class CommentForm extends React.Component {

  state ={
    content:"",
    user_id: "",
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
  }




  render(){

    return(

      <div>

        <form onSubmit={this.handleSubmit}>

          <textarea
          name="content"
          placeholder="Leave a comment"
          value={this.state.content}
          onChange={this.handleChange}
          />

          <label>user_id</label>
          <input
            type="text"
            name="user_id"
            autoComplete="off"
            value={this.state.user_id}
            onChange={this.handleChange}
          />

          <label>post_id</label>
          <input
            type="text"
            name="post_id"
            autoComplete="off"
            value={this.props.postId}
            onChange={this.handleChange}
          />

          <input type="submit" value="Submit Comment" />

        </form>
      </div>
    )
  }
}
export default CommentForm
