import { useState } from 'react';
import PlanetsAPI from './api-planets-context';
import { Planets } from '../types';

function PlanetsProvider({ children } : { children: React.ReactNode }) {
  const [planets, setPlanets] = useState<Planets[]>([]);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState('');
  const [newPlanets, setNewPlanets] = useState<Planets[]>(planets);

  return (
    <PlanetsAPI.Provider
      value={ { planets,
        setPlanets,
        dataFiltered,
        setDataFiltered,
        filteredPlanets,
        newPlanets,
        setNewPlanets,
        setFilteredPlanets } }
    >
      { children }
    </PlanetsAPI.Provider>
  );
}

export default PlanetsProvider;

// { children } : { children: React.ReactNode }
