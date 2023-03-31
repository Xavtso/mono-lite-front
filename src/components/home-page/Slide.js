import React from "react";

const Slide = ({ slide, currentSlide }) => {
  const { header, text, photo, name, location } = slide;
  const transformX = (slide.id - 1 - currentSlide) * 100;

  return (
    <div
      className={`slide ${
        slide.id === currentSlide + 1 ? `slide--${currentSlide}` : ""
      }`}
      style={{ transform: `translateX(${transformX}%)` }}
    >
      <div className="testimonial">
        <h5 className="testimonial__header">{header}</h5>
        <blockquote className="testimonial__text">{text}</blockquote>
        <address className="testimonial__author">
          <img
            src={photo}
            alt={`${name} from ${location}`}
            className="testimonial__photo"
          />
          <h6 className="testimonial__name">{name}</h6>
          <p className="testimonial__location">{location}</p>
        </address>
      </div>
    </div>
  );
};

export default Slide;
