import React from 'react'
import Categories from "./Categories"


class Filter extends React.Component {



  render() {
    let renderCategories = this.props.categories.map((singleCategory) => {
      return <Categories key={singleCategory.id} singleCategory={singleCategory} selectedCategory={this.props.selectedCategory}/>
      })
    return (
      <div>
        <div className="filterContainer">
        {renderCategories}
        </div>
      </div>
    )
  }
}

export default Filter
