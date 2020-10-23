import React from 'react';
import '../App.css';

class Search extends React.Component {

  state = {
    searchTerm: ""
  }

handleChange = (evt) => {
  let newValue = evt.target.value
  this.setState((prevState) => ({
    searchTerm: newValue
  }))
}



             // onChange={e => this.props.onChange(e.target) /* TODO: update search state in parent component */}


  render () {
  return (
    <div>
    <form className="search">
          <input
            type="text"
            placeholder="Search listings..."
            value={this.state.searchTerm}
            onChange={(evt) => this.handleChange(evt)}
          />
          <input type="submit"/>
        </form>
    </div>
  );
  }
}

export default Search;
