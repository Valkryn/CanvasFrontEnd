import React from "react"
import Post from "./Post"

class PostContainer extends React.Component {

  render () {

    let renderPhoto = this.props.objects.map((singleObject) => {
      return <Post key={singleObject.id} singleObject={singleObject} handleViews={this.props.handleViews} />
      })

    return(
      <div className="imgContainer">
        {renderPhoto}
      </div>
    )
  }
}
export default PostContainer
