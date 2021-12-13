import React from 'react';

const Result = ({ originalURL, shortedURL }) => {
  const handleClick = (e) => {
    e.preventDefault();

    navigator.clipboard.writeText(shortedURL);
  };

  return (
    <div
      className={
        originalURL ? 'result container' : 'hide-for-mobile hide-for-desktop'
      }
    >
      <p className='original__url'>{originalURL}</p>
      <p className='result__url'>{shortedURL}</p>
      <a href='#' className='btn btn--square' onClick={handleClick}>
        copy
      </a>
    </div>
  );
};

export default Result;
