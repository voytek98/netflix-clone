import React from "react";
import { withRouter } from "react-router-dom";

import "./SearchBox.css";

class SearchBox extends React.Component {
  state = {
    value: ""
  }

  handleChange = async (e) => {
    // If user type at least one character, app redirect to search route
    await this.setState({value: e.target.value})

    if (this.props.location.pathname !== '/search') {
      if (this.state.value.length >= 1) {
        this.props.history.push('/search')
      }
    } else { //If searchbox is empty app goes back to previous page
      if (this.state.value.length === 0) {
        this.props.history.goBack()
      }
    }
  }

  handleSubmit = (e) => {
    console.log(this.state.value)
    this.props.history.push(`/search/${this.state.value}`)
    e.preventDefault()
  }
  
  render() {

    return (
      <form onSubmit={this.handleSubmit} action="">
        <label htmlFor="">
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>
    )
  }
}

export default withRouter(SearchBox);
