import React from 'react'
import ImageUpload from "./ImageUpload"


class Profile extends React.Component {
  state = {
    image: this.props.currentUser.image,
    bio: this.props.currentUser.bio
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch("http://localhost:3000/profile", {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(r => r.json())
      .then(updatedUser => {
        this.props.updateUser(updatedUser)
      })
  }

  render() {
    const { image, bio } = this.state
    const { username } = this.props.currentUser

    return (
      <div className="thiswiththat">

        <form className="profileContainer" onSubmit={this.handleSubmit}>
          <input
            type="hidden"
            name="image"
            autoComplete="off"
            value={image}
            onChange={this.handleChange}
          />
          <div className="profileImageContainer">
            <img className="profileImage" src={image ? image : "https://cdn.iconscout.com/icon/free/png-512/account-profile-avatar-man-circle-round-user-30452.png"} alt={username} />
          </div>
          <h1>{username}'s Profile</h1>



          <label>Bio</label>
          <textarea
            name="bio"
            value={bio}
            onChange={this.handleChange}
          />

          <input type="submit" value="Update" />
        </form>

        <div>
            <ImageUpload handleAddingNewImageToCollection={this.props.handleAddingNewImageToCollection}
                          currentUser={this.props.currentUser} />
        </div>


      </div>
    )
  }
}

export default Profile
