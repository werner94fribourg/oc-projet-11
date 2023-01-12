import React, { useCallback, useEffect, useState } from 'react';
import { DATA_URL } from '../helpers/globals';

export const HousingsContext = React.createContext({
  housings: [],
  isLoading: false,
});

const HousingContextProvider = props => {
  const [housings, setHousings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getAllHousings = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(DATA_URL, {
      mode: 'cors',
    });
    const housings = await response.json();
    setIsLoading(false);
    setHousings(housings);
  }, []);

  useEffect(() => {
    getAllHousings();
  }, [getAllHousings]);

  return (
    <HousingsContext.Provider value={{ housings, isLoading }}>
      {props.children}
    </HousingsContext.Provider>
  );
};

export default HousingContextProvider;
