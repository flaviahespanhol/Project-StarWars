import { useState } from 'react';
import PlanetsAPI from './api-planets-context';
import { FilterType, Planets } from '../types';

function PlanetsProvider({ children } : { children: React.ReactNode }) {
  const [planets, setPlanets] = useState<Planets[]>([]);
  const [newPlanets, setNewPlanets] = useState<Planets[]>([]);
  const [initialFormValue, setInitialFormValue] = useState<FilterType>({
    column: 'population',
    comparation: 'maior que',
    number: '0',
  });
  // const [filtersArray, setFiltersArray] = useState<FilterType[]>([]);
  const [filteredPlanets, setFilteredPlanets] = useState('');
  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  return (
    <PlanetsAPI.Provider
      value={ { planets,
        setPlanets,
        newPlanets,
        setNewPlanets,
        filteredPlanets,
        setFilteredPlanets,
        columnOptions,
        setColumnOptions,
        initialFormValue,
        setInitialFormValue,
        // filtersArray,
        // setFiltersArray,
      } }
    >
      { children }
    </PlanetsAPI.Provider>
  );
}

export default PlanetsProvider;

// { children } : { children: React.ReactNode }
