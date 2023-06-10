import React, { useState, useEffect } from 'react';
export default function StarRating({
  name,
  handleClick,
  limit = 5,
  handleMouseOver,
  onMouseLeave,
}) {
  const [ratingCount, setRatingCount] = useState(0);

  useEffect(() => {
    console.log(limit);
  }, []);

  return (
    <div className="star_container">
      <h3 className="heading">Star Rating : {name}</h3>
      <div
        className="star_wrapper"
        onClick={(e) => {
          handleClick(e, setRatingCount);
        }}
        onMouseOver={(e) => {
          handleMouseOver(e, setRatingCount);
        }}
        onMouseLeave={(e) => {
          onMouseLeave(e, ratingCount);
        }}
      >
        {[...new Array(limit).keys()]
          .map((item, index) => item)
          .map((item, index) => {
            return (
              <div className="star" dataIndex={item}>
                &#9733;
              </div>
            );
          })}
      </div>
      <div>Rating Count : {ratingCount}</div>
    </div>
  );
}
