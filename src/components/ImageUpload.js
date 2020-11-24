import React from "react"

class ImageUpload extends React.Component {

  state={
    title:"",
    featured_image:"",
    description:"",
    views:"0",
    user_id: this.props.currentUser.id ,
    category_id:""
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  onImageChange = event => {
    this.setState({ featured_image: event.target.files[0] });
  };

  // handleSubmit = evt => {
  //   evt.preventDefault()
  //   fetch("http://localhost:3000/posts", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(this.state)
  //   })
  //     .then(resp => resp.json())
  //     .then(post => {
  //
  //     })
  // }

  handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', this.state.title);
    formData.append('description', this.state.description);
    formData.append('views', this.state.views);
    formData.append('user_id', this.state.user_id);
    formData.append('category_id', this.state.category_id);
    formData.append('featured_image', this.state.featured_image);
    fetch('http://localhost:3000/posts', {
      method: 'POST',
      body: formData
    })
    .then(resp =>resp.json())
    .then(obj => {
      this.props.handleAddingNewImageToCollection(obj)
    })
  }



  render () {
    console.log(this.state)
  return (

    <div >
      <form className="uploadImage" onSubmit={this.handleSubmit}>

        <label className="uploadTitle">Add Your Project</label>
        <input type="file" accept="image/*" multiple={false} onChange={this.onImageChange} />


        <label>Title</label>
        <input type="text"
               name="title"
               autoComplete="off"
               value={this.state.title}
               onChange={this.handleChange} />



       <label>Description</label>
       <input type="text"
              name="description"
              autoComplete="off"
              value={this.state.description}
              onChange={this.handleChange} />


        <input type="hidden"
               name="views"
               autoComplete="off"
               value={this.state.views}
               onChange={this.handleChange} />


         <input type="hidden"
                name="user_id"
                autoComplete="off"
                value={this.state.user_id}
                onChange={this.handleChange} />



        <label >Choose a category:</label>
        <select value={this.state.category_id} onChange={this.handleChange} name="category_id">
          <option value="1">Photography</option>
          <option value="2">Fine Arts</option>
          <option value="3">Photoshop</option>
          <option value="4">Illustrator</option>
          <option value="5">Fashion</option>
          <option value="6">Anime/Character Design</option>
          <option value="7">Architecture</option>
        </select>






        <input type="submit" />
      </form>
    </div>

    )
  }
}

export default ImageUpload
