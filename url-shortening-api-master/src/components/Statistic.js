import React from 'react';
import brandIcon from '../images/icon-brand-recognition.svg';
import detaildIcon from '../images/icon-detailed-records.svg';
import customizeIcon from '../images/icon-fully-customizable.svg';

const Statistic = () => {
  const cardInfo = [
    {
      icon: brandIcon,
      title: 'Brand Recognition',
      desc: `Boost your brand recognition with each click. Generic links don’t 
      mean a thing. Branded links help instil confidence in your content.`,
    },
    {
      icon: detaildIcon,
      title: 'Detailed Records',
      desc: `Gain insights into who is clicking your links. Knowing when and where 
      people engage with your content helps inform better decisions.`,
    },
    {
      icon: customizeIcon,
      title: 'Fully Customizable',
      desc: `Improve brand awareness and content discoverability through customizable 
      links, supercharging audience engagement.`,
    },
  ];

  return (
    <section className='statistic'>
      <section className='statistic__top container'>
        <h2> Advanced Statistics </h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </section>
      <section className='statistic__bottom container'>
        {cardInfo.map((card, i) => (
          <div key={i}>
            <div className={`card card-${i}`}>
              <img src={card.icon} alt='card icon' />
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Statistic;
