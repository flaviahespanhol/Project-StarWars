import { useState } from 'react';
import PlanetsAPI from './api-planets-context';
import { FilterType, Planets } from '../types';

// planets = allRepos
// newPlanets = filteredRepos
// initialFormValue = filterFormValue
// filtersArray = filters

function PlanetsProvider({ children } : { children: React.ReactNode }) {
  const [planets, setPlanets] = useState<Planets[]>([]);
  const [newPlanets, setNewPlanets] = useState<Planets[]>([]);
  const [initialFormValue, setInitialFormValue] = useState<FilterType>({
    column: 'population',
    comparation: 'maior que',
    number: '0',
  });
  const [filtersArray, setFiltersArray] = useState<FilterType[]>([]);
  const [filteredPlanets, setFilteredPlanets] = useState('');
  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [columnSelected, setColumnSelected] = useState(columnOptions[0]);
  const [comparationSelected, setComparationSelected] = useState('maior que');
  const [inputNumber, setInputNumber] = useState('0');

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
        columnSelected,
        setColumnSelected,
        comparationSelected,
        setComparationSelected,
        inputNumber,
        setInputNumber,
        initialFormValue,
        setInitialFormValue,
        filtersArray,
        setFiltersArray,
      } }
    >
      { children }
    </PlanetsAPI.Provider>
  );
}

export default PlanetsProvider;

// { children } : { children: React.ReactNode }
