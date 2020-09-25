import React from "react"
import CommentsContainer from "./CommentsContainer"
import CommentForm from "./CommentForm"

class PostPage extends React.Component {

  state = {
    post: [],
    user: [],
    category:[],
    comments:[],
    likes:[]

  }

  componentDidMount() {
    const id = this.props.match.params.id
    fetch(`http://localhost:3000/posts/${id}`)
    .then(resp => resp.json())
    .then(post => {
      this.setState({
        post:post ,
        user:post.user,
        category:post.category,
        comments:post.comments,
        likes:post.likes
      })
    })
  }

  addComment = (comment) => {
    let arrCom = [comment, ...this.state.comments]
    this.setState({
      comments: arrCom
    })
  }

  removeComment = (obj) =>{
    let newComments = this.state.comments.filter(comment => comment.id !==obj.id)

    this.setState((prevState) => ({
      comments:newComments
    }))

    fetch(`http://localhost:3000/comments/${obj.id}`, {
      method:"DELETE"
    })
    .then(resp => resp.json())
    .then((obj) => {
      let newComments = this.state.comments.filter(comment => comment.id !==obj.id)
      this.setState((prevState) => ({
        comments:newComments
      }))
    })
  }



  render(){

    return(
      <div>

        <div>
          <div className="postPageImageContainer">
            <img className="postPageImage" src={`${this.state.post.content}`} alt={`${this.state.post.title}`}/>
          </div>
        </div>

        <div className="stuffContainer">
          <div className="stuff">
          stuff
          </div>

          <div className="morestuff">
          more stuff
          </div>
        </div>

        <div>
          <CommentForm postId={this.props.match.params.id} updateComment={this.addComment} />
          <CommentsContainer comments={this.state.comments} removeComment={this.removeComment} />
        </div>

      </div>
    )
  }
}
export default PostPage
