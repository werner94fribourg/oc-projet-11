import { Link } from 'react-router-dom';

const Card = props => {
  const { styles, housing } = props;
  const { id, title, cover } = housing;

  return (
    <article className={styles['gallery__item']}>
      <Link className={styles['gallery__link']} to={`/housing/${id}`}>
        <div className={styles['gallery__img-container']}>
          <img className={styles['gallery__img']} src={cover} alt={title} />
        </div>
        <h2 className={styles['gallery__title']}>{title}</h2>
      </Link>
    </article>
  );
};

export default Card;
