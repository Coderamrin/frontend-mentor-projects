import React from 'react';

export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero__img'></div>

      <div className='hero__text container'>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <a className='btn hero__btn' href='#'>
          Get Started
        </a>
      </div>
    </section>
  );
}
