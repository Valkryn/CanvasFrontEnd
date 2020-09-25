import React from "react"

class ImageUpload extends React.Component {

  state={
    title:"",
    content:"",
    description:"",
    views:"0",
    user_id:"",
    category_id:""
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(resp => resp.json())
      .then(post => {

      })
  }


  render () {
  return (

    <div >
      <h1>ImageUpload</h1>
      <form onSubmit={this.handleSubmit}>

        <input type="file" id="myFile" name="content" />

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

        <label>Views</label>
        <input type="text"
               name="views"
               autoComplete="off"
               value={this.state.views}
               onChange={this.handleChange} />

         <label>User</label>
         <input type="text"
                name="user_id"
                autoComplete="off"
                value={this.state.user_id}
                onChange={this.handleChange} />

        <label>Category</label>
        <input type="text"
               name="category_id"
               autoComplete="off"
               value={this.state.category_id}
               onChange={this.handleChange} />

        <input type="submit" />
      </form>
    </div>

    )
  }
}

export default ImageUpload
