import React, { useState } from 'react';
import prev from './chevron-thin-left.svg';
import next from './chevron-thin-right.svg';
import styles from './Slideshow.module.scss';

const Slideshow = props => {
  const { pictures } = props;
  let navigationContent = '';

  const [currentSlide, setCurrentSlide] = useState(0);
  const nbSlides = pictures.length;

  const switchNextSlideHandler = () => {
    if (nbSlides === 0) return;
    setCurrentSlide(prevState => {
      const newValue = prevState + 1;
      return newValue >= nbSlides ? 0 : newValue;
    });
  };

  const switchPrevSlideHandler = () => {
    if (nbSlides === 0) return;
    setCurrentSlide(prevState => {
      const newValue = prevState - 1;
      return newValue < 0 ? nbSlides - 1 : newValue;
    });
  };

  if (pictures.length > 1)
    navigationContent = (
      <React.Fragment>
        <button
          className={`${styles['slideshow__control']} ${styles['slideshow__control--prev']}`}
          onClick={switchPrevSlideHandler}
        >
          <img
            className={styles['slideshow__control-img']}
            src={prev}
            alt="Précédent"
          />
        </button>
        <button
          className={`${styles['slideshow__control']} ${styles['slideshow__control--next']}`}
          onClick={switchNextSlideHandler}
        >
          <img
            className={styles['slideshow__control-img']}
            src={next}
            alt="Suivant"
          />
        </button>
        <span className={styles['slideshow__enum']}>
          {currentSlide + 1}/{pictures.length}
        </span>
      </React.Fragment>
    );

  return (
    <div className={styles.slideshow}>
      {pictures.map((picture, index) => (
        <div
          key={picture}
          className={styles['slideshow__item']}
          style={{
            transform: `translateX(${100 * (index - currentSlide)}%)`,
          }}
          onClick={switchNextSlideHandler}
        >
          <img
            className={styles['slideshow__item-img']}
            src={picture}
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
      {navigationContent}
    </div>
  );
};

export default Slideshow;
