import React from "react"
import { Link } from "react-router-dom"


class Post extends React.Component {



  handleclick = () =>{
    this.props.handleViews(this.props.singleObject)
  }



  render () {

  return (

    <div className="coloumn">

      <div className="row">
        <Link to={`/posts/${this.props.singleObject.id}`}>
          <div className="mainPageImageBorder" onClick={this.handleclick}>
            <img className="PostContainerImage" src={`${this.props.singleObject.content}`} alt = {`${this.props.singleObject.content}`}/>
            <div className="mainPageImageBorderInfo"> {this.props.singleObject.title} </div>
          </div>
        </Link>

        <div className="singleImageInfo">

          <span className="miniProfileContainer">
            <img className="miniProfileImage" src={`${this.props.singleObject.user.image}`} alt="profile"/>
            <div>
              <strong>{this.props.singleObject.user.username}</strong>
            </div>
          </span>

          <span className="miniProfileContainer">

            <span className="miniProfileContainer">

              <span className="fafa">
                <i className="fa fa-thumbs-up" aria-hidden="false"></i>
              </span>

              <div>
                {this.props.singleObject.likes.length}
              </div>

            </span>

            <span className="miniProfileContainer">

              <span className="fafa">
                <i className="fa fa-eye" aria-hidden="true"></i>
              </span>

              <div>
                {this.props.singleObject.views}
              </div>

            </span>

          </span>

        </div>
      </div>
    </div>

    )
  }
}

export default Post
