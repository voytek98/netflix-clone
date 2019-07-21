import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";

import "./SearchBox.css";

import Context from "../store/context";

const SearchBox = ( { location, history }) => {
  const { state, actions } = useContext(Context);
  const [value, setValue] = useState("");
  
  // const handleChange = (event) => {
  //   // If user type at least one character, app redirect to search route
  //   // console.log(event.length)
  //   setValue(event)
  //   if (location.pathname !== '/search') {
  //     if (event.length >= 1) {
  //       history.push('/search')
  //     }
  //   } else { //If searchbox is empty app goes back to previous page
  //     if (event.length === 0) {
  //       actions({ type: "setState", payload: { ...state, result: event } })
  //       history.goBack()
  //     }
  //   }
    
  // }

  const handleSubmit = () => {
    if (location.pathname !== '/search') {
      history.push('/search')
    }
    actions({ type: "setState", payload: { ...state, result: value } })
  }

  return (
    <form
      onSubmit={handleSubmit}
      action=""
    >
      <label htmlFor="">
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
  // }
};

export default withRouter(SearchBox);
