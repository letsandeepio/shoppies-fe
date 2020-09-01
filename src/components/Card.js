import React from 'react';

const Card = ({ movie }) => {
  return (
    <div>
      <div className="poster">
        <img src={movie.Poster} alt=""></img>
      </div>
      <div className="title">{movie.Title}</div>
    </div>
  );
};

export default Card;
