import { useState } from 'react';
import PlanetsAPI from './api-planets-context';
import { FilterType, Planets, SortType } from '../types';

function PlanetsProvider({ children } : { children: React.ReactNode }) {
  const [planets, setPlanets] = useState<Planets[]>([]);
  const [newPlanets, setNewPlanets] = useState<Planets[]>([]);
  const [initialFormValue, setInitialFormValue] = useState<FilterType>({
    column: 'population',
    comparation: 'maior que',
    number: '0',
  });
  const [filteredPlanets, setFilteredPlanets] = useState('');
  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [filtersArray, setFiltersArray] = useState<FilterType[]>([]);
  const [newColumn, setNewColumn] = useState(columnOptions);
  const [sortState, setSortState] = useState<SortType>({
    column: 'population',
    sort: 'ASC',
  });

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
        filtersArray,
        setFiltersArray,
        newColumn,
        setNewColumn,
        sortState,
        setSortState,
      } }
    >
      { children }
    </PlanetsAPI.Provider>
  );
}

export default PlanetsProvider;

// { children } : { children: React.ReactNode }
