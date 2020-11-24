import React from "react"
import CommentsContainer from "./CommentsContainer"
import CommentForm from "./CommentForm"
// import { Link } from "react-router-dom"

class PostPage extends React.Component {

  state = {
    post: [],
    featured_image: [],
    user: [],
    category:[],
    comments:[],
    likes:[],
    postUser:[]
  }

  componentDidMount() {
    const id = this.props.match.params.id
    fetch(`http://localhost:3000/posts/${id}`)
    .then(resp => resp.json())
    .then(post => {
      this.setState({
        post:post ,
        featured_image: post.featured_image,
        user:post.user,
        category:post.category,
        comments:post.comments,
        likes:post.likes,
        postUser:post.user
      })
      // debugger
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
      <div className="postPageContainer">
      <div className="mainContainer">

        <div className="postPageImageContainer">
        <a href={this.state.featured_image.url} target="_blank" rel="noopener noreferrer">
          <img className="postPageImage" src={`${this.state.featured_image.url}`} alt={`${this.state.post.title}`}/>
          </a>
        </div>

        <div className="stuffContainer">
          <div className="stuff">

          </div>
          <div className="morestuff">

          </div>
        </div>

        <div className="postAuthorInfoContainer">
          <div className="postAuthorImage">
            <img className="authorImage" src={`${this.state.postUser.image}`} alt="profile" />
          </div>
          <div className="postAuthorContainedInfo">
            <div className="postName">
              {this.state.post.title}
            </div>
            <div className="postAuthorName">
              Created by: <span className="authorName">{this.state.postUser.username}</span>
            </div>
          </div>
        </div>

        <div className="postDescription">
        {this.state.post.description}
        </div>

        <div>
          <CommentForm postId={this.props.match.params.id} updateComment={this.addComment} />
          <CommentsContainer comments={this.state.comments} removeComment={this.removeComment} />
        </div>

      </div>

      <div className="sideContainer">
        <p className="more"> More Canvas by this Creator</p>
        <div className="moreByCreater">
          <img className="extraImages" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d125df43-37f9-4450-a601-50d3aa7fa501/db8km88-fb0c2597-26aa-4d28-980d-690bd163d94c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZDEyNWRmNDMtMzdmOS00NDUwLWE2MDEtNTBkM2FhN2ZhNTAxXC9kYjhrbTg4LWZiMGMyNTk3LTI2YWEtNGQyOC05ODBkLTY5MGJkMTYzZDk0Yy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.fs88WwLNvOsWCywzFimHCjcZJ1TtjefjJRpsbEwfgVs" alt="something" />
          <img className="extraImages" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d125df43-37f9-4450-a601-50d3aa7fa501/dbe4gq5-b912a2fc-6590-4e9f-a665-ba6ecb6e29a1.png/v1/fill/w_1024,h_683,q_80,strp/spit_brothers_by_tsaoshin_dbe4gq5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02ODMiLCJwYXRoIjoiXC9mXC9kMTI1ZGY0My0zN2Y5LTQ0NTAtYTYwMS01MGQzYWE3ZmE1MDFcL2RiZTRncTUtYjkxMmEyZmMtNjU5MC00ZTlmLWE2NjUtYmE2ZWNiNmUyOWExLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.jqUqhaniaIF4EWUroIeBiRjXwJVgiLZU4sNSsp1f27M" alt="something" />
          <img className="extraImages" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d125df43-37f9-4450-a601-50d3aa7fa501/dah33co-6a58e97a-9892-48eb-af90-84507a298689.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZDEyNWRmNDMtMzdmOS00NDUwLWE2MDEtNTBkM2FhN2ZhNTAxXC9kYWgzM2NvLTZhNThlOTdhLTk4OTItNDhlYi1hZjkwLTg0NTA3YTI5ODY4OS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.E9lugwPdD03BQAboDoNdPXyl7Wia5Gn0nmOAv2-C8X0" alt="something" />
          <img className="extraImages" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d125df43-37f9-4450-a601-50d3aa7fa501/d7i57wg-4f678d07-8f17-4fcd-9489-7d65ae66b69c.png/v1/fill/w_1280,h_854,q_80,strp/stitch_and_toothless_by_tsaoshin_d7i57wg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NTQiLCJwYXRoIjoiXC9mXC9kMTI1ZGY0My0zN2Y5LTQ0NTAtYTYwMS01MGQzYWE3ZmE1MDFcL2Q3aTU3d2ctNGY2NzhkMDctOGYxNy00ZmNkLTk0ODktN2Q2NWFlNjZiNjljLnBuZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FOnrpJ3sHU_HtOvMZc2w_jkgTw2wrf01pl_8QUecw4I" alt="something" />
          <img className="extraImages" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d125df43-37f9-4450-a601-50d3aa7fa501/d6pyxbr-41311940-112a-49f2-b7a5-59523fbdb0f3.png/v1/fill/w_1280,h_854,q_80,strp/a_very_httyd_halloween_by_tsaoshin_d6pyxbr-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NTQiLCJwYXRoIjoiXC9mXC9kMTI1ZGY0My0zN2Y5LTQ0NTAtYTYwMS01MGQzYWE3ZmE1MDFcL2Q2cHl4YnItNDEzMTE5NDAtMTEyYS00OWYyLWI3YTUtNTk1MjNmYmRiMGYzLnBuZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Kk8nBQcEPyIu6UEE2OQYkDLzvcFcFF-uGQlYlMGOTKI" alt="something"/>
          <img className="extraImages" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cbbfa8a9-2233-484f-abbe-e81d19f9f48b/ddwozy7-00e7cd47-41b4-4a24-b566-4c92c25efecb.jpg/v1/fill/w_1024,h_768,q_75,strp/ancient_unicorn_with_bhutanese_boy_by_petronellavanree_ddwozy7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03NjgiLCJwYXRoIjoiXC9mXC9jYmJmYThhOS0yMjMzLTQ4NGYtYWJiZS1lODFkMTlmOWY0OGJcL2Rkd296eTctMDBlN2NkNDctNDFiNC00YTI0LWI1NjYtNGM5MmMyNWVmZWNiLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.kDr1NbsZWGbikQjSd3QEvgrtVfyTrgcfRA1MqhwLNIw" alt="something"/>
        </div>
      </div>

      </div>
    )
  }
}
export default PostPage
