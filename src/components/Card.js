import React from 'react';
import './Card.css';

const Card = ({ movie }) => {
  return (
    <div className="card">
      <img src={movie.Poster} alt=""></img>
      <h6>{movie.Title}</h6>
    </div>
  );
};

export default Card;
