import React, { useState, useEffect } from 'react';
import StarRating from './StarRating';
import './style.css';

export default function App() {
  function handleClick(e, setRatingCount) {
    let dataIndex = parseInt(e.target.getAttribute('dataIndex'));
    // console.log(typeof dataIndex);
    setRatingCount(dataIndex + 1);
    let starArr = Object.values(e.target.parentNode.children);

    //remove star_filled
    starArr.map((item) => item.classList.remove('star_filled'));

    starArr.map((item, index) => {
      if (index <= dataIndex) {
        dataIndex, item.classList.add('star_filled');
      }
    });
  }
  function handleMouseOver(e, setRatingCount) {
    let dataIndex = parseInt(e.target.getAttribute('dataIndex'));
    // console.log(typeof dataIndex);
    // setRatingCount(dataIndex + 1);
    let starArr = Object.values(e.target.parentNode.children);

    //remove star_filled
    starArr.map((item) => item.classList.remove('star_filled'));

    starArr.map((item, index) => {
      if (index <= dataIndex) {
        dataIndex, item.classList.add('star_filled');
      }
    });
  }
  function onMouseLeave(e, ratingCount) {
    let starArr = Object.values(e.target.parentNode.children);
    //remove star_filled
    starArr.map((item) => item.classList.remove('star_filled'));

    starArr.map((item, index) => {
      // console.log(index, ratingCount);
      if (index < ratingCount) {
        item.classList.add('star_filled');
      }
    });
    // console.log('onMosueLeave');
  }
  return (
    <div className="app">
      {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((item, index) => (
        <div className="star_card" key={index}>
          <StarRating
            name={item}
            handleClick={handleClick}
            handleMouseOver={handleMouseOver}
            onMouseLeave={onMouseLeave}
            // limit={}
          />
        </div>
      ))}
    </div>
  );
}
