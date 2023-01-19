import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Description from '../components/Housing/Description/Description';
import LoadingSpinner from '../components/Housing/Loading/Loading';
import Slideshow from '../components/Housing/Slideshow/Slideshow';
import { HousingsContext } from '../context/housings-context';

const Housing = () => {
  const { id } = useParams();
  const { housings } = useContext(HousingsContext);
  const navigate = useNavigate();
  const housing = housings.find(housing => housing.id === id);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!housing) navigate('not-found');
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [housing, navigate]);

  if (!housing) {
    return <LoadingSpinner />;
  }

  return (
    <React.Fragment>
      <Slideshow pictures={housing.pictures} />
      <Description housing={housing} />
    </React.Fragment>
  );
};

export default Housing;
