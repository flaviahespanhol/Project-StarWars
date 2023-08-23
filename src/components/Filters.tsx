import { MouseEventHandler, useContext } from 'react';
import PlanetsAPI from '../context/api-planets-context';
import { FilterType, Planets } from '../types';

function Filters() {
  const {
    planets,
    setNewPlanets,
    setPlanets,
    filteredPlanets,
    filtersArray,
    setFiltersArray,
    initialFormValue,
    setInitialFormValue } = useContext(PlanetsAPI);

  const handleFilter = (e) => {
    e.preventDefault();
    const { column, comparation, number } = initialFormValue;
    const filter = planets.filter((planet: Planets) => {
      if (comparation === 'maior que') {
        return Number(planet[column]) > Number(number);
      }
      if (comparation === 'menor que') {
        return Number(planet[column]) < Number(number);
      }
      if (comparation === 'igual a') {
        return Number(planet[column]) === Number(number);
      }
      console.log(filter);
      return filter;
    });
  };

  // const applySimpleFilter = () => {
  //   if (comparationSelected === 'maior que') {
  //     const filteredPlanets = planets
  //       .filter((planet) => Number(planet[column as keyof Planet]) > Number(number));
  //     setPlanets(filteredPlanets);
  //   }
  //   if (comparationSelected === 'menor que') {
  //     const filteredPlanets = planets
  //       .filter((planet) => Number(planet[column as keyof Planet]) < Number(number));
  //     setPlanets(filteredPlanets);
  //   }
  //   if (comparationSelected === 'igual a') {
  //     const filteredPlanets = planets
  //       .filter((planet) => Number(planet[column as keyof Planet])
  //         === Number(number));
  //     setPlanets(filteredPlanets);
  //   }
  //   setColumnOptions(columnOptions.filter((filterOption) => filterOption !== column));
  //   setColumnSelected(columnOptions[1]);
  //   setAppliedFilters([...appliedFilters, {
  //     column,
  //     operator,
  //     number,
  //   }]);

  //   if (columnSelected !== columnOptions[0]) {
  //     setColumnSelected(columnOptions[0]);
  //   }
  // };
  // const handleButtonFilter = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const newFilters = [
  //     ...filtersArray,
  //     {
  //       column: initialFormValue.column,
  //       value: initialFormValue.comparation,
  //     },
  //   ];

  //   let reposCopy = [...planets];
  //   newFilters.forEach((filter) => {
  //     const filteredRepos = applySimpleFilter(reposCopy, filter);
  //     reposCopy = filteredRepos;
  //   });

  //   setFiltersArray(newFilters);
  //   setNewPlanets(reposCopy);
  // };

  return (

    <>
      <form>
        <select
          data-testid="column-filter"
          value={ initialFormValue.column }
          onChange={ ({ target }) => setInitialFormValue(
            { ...initialFormValue, column: target.value as keyof Planets },
          ) }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>
            surface_water
          </option>
        </select>
        <select
          data-testid="comparison-filter"
          value={ initialFormValue.comparation }
          onChange={ ({ target }) => setInitialFormValue(
            { ...initialFormValue, comparation: target.value },
          ) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          value={ initialFormValue.number }
          onChange={ ({ target }) => setInitialFormValue(
            { ...initialFormValue, number: target.value },
          ) }
        />
        <button
          type="submit"
          data-testid="button-filter"
          onClick={ handleFilter }
        >
          Filtrar
        </button>
      </form>
      <div>
        {filtersArray.map((filter: any) => (
          <div key={ filter.column }>
            <span>{filter.column}</span>
            <span>{filter.comparation}</span>
            <span>{filter.number}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Filters;
