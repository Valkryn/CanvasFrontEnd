import React from 'react'


class Categories extends React.Component {

  state = {
    chosenCategory:""
  }

  handleClick = () => {
    this.props.selectedCategory(this.props.singleCategory.kind)
  }

  render() {

    return (
      <div className="categoriesContainer" onClick={this.handleClick}>
        <img className="categoryImage" src= {`${this.props.singleCategory.image}`}  alt="catefory"/>
        <div className="categoryTitle"> {this.props.singleCategory.kind}</div>
      </div>
    )
  }
}

export default Categories
