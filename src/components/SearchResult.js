import React, {useContext, useEffect, useState} from "react";

import './SearchResult.css';
import moviesdb from '../api/moviedb';
import Context from "../store/context";

import Card from "../components/Card";

const SearchResult = () => {
  const {state} = useContext(Context);
  const [titlesList, setTitlesList] = useState([])

  // Make request on component update, if search query is not empty
  useEffect(() => {
    if (state.result.length > 0) {
      searchRequest(state.result)
    }
  }, [state.result])

  const searchRequest = async (searchQuery) => {
    let res = await moviesdb.get("/search/multi", {
      params: { 
        api_key: process.env.REACT_APP_API,
        query: searchQuery,
        media_type: 'movie'
      }
    });

    // Exclude persons from multi search
    let filteredSearch = res.data.results.filter((el)=> {
      return el.media_type !== 'person'
    })

    setTitlesList(filteredSearch)
  }

  const renderedList = titlesList.map(video => {
    return <Card search={true} video={video} key={video.id}/>
  });
  
  return (
    <div className="search">
      <h1>Your search results will appear here:</h1>
      <div className="search__results">
        {renderedList}
      </div>
    </div>
  )
}

export default SearchResult;