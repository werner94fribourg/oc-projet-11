import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HousingsContext } from '../context/housings-context';
import NotFound from './NotFound';

const Housing = () => {
  const { id } = useParams();
  const { housings } = useContext(HousingsContext);
  const navigate = useNavigate();
  const housing = housings.find(housing => housing.id === id);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!housing) navigate('not-found');
    }, 70);
    return () => {
      clearTimeout(timer);
    };
  }, [housing, navigate]);

  if (!housing) {
    return <NotFound />;
  }

  return <p>Logement {id}</p>;
};

export default Housing;
