import React, { useState } from 'react';
import people from './data';
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const nextPeople = () => {
    console.log(index);
    console.log(people.length);
    if (index === people.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevPeople = () => {
    console.log(index);
    if (index <= 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const randomPeople = () => {
    const randomValue = Math.floor(Math.random() * people.length);

    console.log(randomValue);
    setIndex(randomValue);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="button-container">
        <button className="prev-btn" onClick={prevPeople}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPeople}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPeople}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
