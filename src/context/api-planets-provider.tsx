import { useState } from 'react';
import PlanetsAPI from './api-planets-context';
// import { Planets } from '../types';

function PlanetsProvider({ children } : { children: React.ReactNode }) {
  const [planets, setPlanets] = useState([]);

  return (
    <PlanetsAPI.Provider value={ { planets, setPlanets } }>
      { children }
    </PlanetsAPI.Provider>
  );
}

export default PlanetsProvider;

// { children } : { children: React.ReactNode }
