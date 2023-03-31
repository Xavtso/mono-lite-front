import React, { useState } from 'react';
import User1 from '../../images/user-1.jpg';
import User2 from '../../images/user-2.jpg';
import User3 from '../../images/user-3.jpg';
import Slide from './Slide';

const slides = [
  {
    id: 1,
    header: 'Best financial decision ever!',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis et asperiores laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus id alias reiciendis, perferendis facere pariatur dolore veniam autem esse non voluptatem saepe provident nihil molestiae.',
    photo: User1,
    name: 'Aarav Lynn',
    location: 'San Francisco, USA'
  },
  {
    id: 2,
    header: 'The last step to becoming a complete minimalist',
    text: 'Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam perferendis veritatis neque repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt exercitationem deleniti.',
    photo: User2,
    name: 'Miyah Miles',
    location: 'London, UK'
  },
  {
    id: 3,
    header: 'Finally free from old-school banks',
    text: 'Debitis, nihil sit minus suscipit magni aperiam vel tenetur incidunt commodi architecto numquam omnis nulla autem, necessitatibus blanditiis mod...',
    photo: User3,
    name: 'Ashwin Singh',
    location: 'Mumbai, India'
  }
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const createDots = () => {
    return slides.map((_, i) => (
      <button
        key={i}
        className={`dots__dot ${i === currentSlide ? "dots__dot--active" : ""}`}
        onClick={() => {
          setCurrentSlide(i);
        }}
      />
    ));
  };

 

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const dotContainer = createDots();

  return (
    <section className="section" id="section--3">
      <div className="section__title section__title--testimonials">
        <h2 className="section__description">Not sure yet?</h2>
        <h3 className="section__header">
          Millions of Bankists are already making their lifes simpler.
        </h3>
      </div>

      <div className="slider" onKeyDown={(e) => { 
        if (e.keyCode === 39) {
          nextSlide();
        } else if (e.keyCode === 37) {
          prevSlide();
        };

      }}>
        
          {slides.map((slide, i) => (
            <Slide key={i} slide={slide} currentSlide={currentSlide} />
          ))}
        
        <div
          className="dots"
          
        >
          {dotContainer}
        </div>
        <button className="slider__btn slider__btn--left"  onClick={prevSlide}>
          &larr;
        </button>
        <button className="slider__btn slider__btn--right" onClick={nextSlide}>
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default Testimonial;