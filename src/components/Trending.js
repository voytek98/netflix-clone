import React from "react";

const Trending = ({ trending }) => {
  console.log(trending);
  let thumbnail = "https://image.tmdb.org/t/p/w300";

  const trendingList = trending.map(video => {
    return (
      <div className="ui card" key={video.id}>
        <div className="image">
          <img src={`${thumbnail}${video.backdrop_path}`} alt="thumbnail" />
        </div>
        <div className="content">
          <span className="right floated">{video.vote_average}/10</span>
          <h2 className="header">{video.title || video.name}</h2>
          <p className="description">{video.overview}</p>
        </div>
      </div>
    );
  });

  return <div>{trendingList}</div>;
};

export default Trending;
