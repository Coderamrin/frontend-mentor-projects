import React, { useState } from 'react';
import Result from './Result';

export default function ShortenBar() {
  const [originalURL, setOriginalURL] = useState('');
  const [sendUrl, setSendUrl] = useState(false);
  const [shortenedURL, setShortenedURL] = useState('');

  const handleChange = (e) => {
    setOriginalURL(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (originalURL !== undefined) setSendUrl(true);

    fetch(
      `https://api.shrtco.de/v2/shorten?url=${originalURL}/very/long/link.html`
    )
      .then((response) => response.json())
      .then((data) => setShortenedURL(data.result.short_link));
  };

  return (
    <section className='test'>
      <div className=' container shortenBar'>
        <input
          type='text'
          placeholder='Shorten a link here...'
          onChange={handleChange}
        />
        <span className='error-msg'></span>

        <a href='#' className='btn btn--square' onClick={handleClick}>
          Shorten it!
        </a>
      </div>

      <Result
        originalURL={sendUrl ? originalURL : ''}
        shortedURL={sendUrl ? shortenedURL : ''}
      />
    </section>
  );
}
