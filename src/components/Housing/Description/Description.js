import React from 'react';
import Collapse from '../../UI/Collapse/Collapse';
import styles from './Description.module.scss';
import grayStar from './gray-star.svg';
import redStar from './red-star.svg';

const Description = props => {
  const {
    housing: {
      title,
      location,
      host: { name: hostName, picture: hostPicture },
      rating,
      tags,
      description,
      equipments,
    },
  } = props;

  const stars = new Array(5)
    .fill(false)
    .map((val, index) => (index < rating ? true : val));

  return (
    <div className={styles.description}>
      <h1 className={styles['description__title']}>{title}</h1>
      <p className={styles['description__location']}>{location}</p>
      <ul className={styles['description__tag-list']}>
        {tags.map(tag => (
          <li className={styles['description__tag-list-item']} key={tag}>
            {tag}
          </li>
        ))}
      </ul>
      <div className={styles['description__host-and-notation']}>
        <div className={styles['description__host']}>
          <h2 className={styles['description__host-title']}>{hostName}</h2>
          <img
            className={styles['description__host-picture']}
            src={hostPicture}
            alt={hostName}
          />
        </div>
        <div className={styles['description__notation']}>
          {stars.map((star, index) => (
            <img
              key={index}
              src={star ? redStar : grayStar}
              alt={`Étoile ${index}`}
            />
          ))}
        </div>
      </div>
      <div className={styles['description__collapses']}>
        <Collapse title="Description">{description}</Collapse>
        <Collapse title="Équipements">
          <ul className={styles['description__equipment-list']}>
            {equipments.map(equipment => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default Description;
