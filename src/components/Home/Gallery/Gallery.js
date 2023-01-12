import { useContext } from 'react';
import { HousingsContext } from '../../../context/housings-context';
import Card from '../Card/Card';
import styles from './Gallery.module.scss';

const Gallery = () => {
  const { housings } = useContext(HousingsContext);
  return (
    <section className={styles.gallery}>
      {housings.map(housing => (
        <Card key={housing.id} styles={styles} housing={housing} />
      ))}
    </section>
  );
};

export default Gallery;
