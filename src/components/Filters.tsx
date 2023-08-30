import { useContext } from 'react';
import PlanetsAPI from '../context/api-planets-context';
import { Planets } from '../types';

function Filters() {
  const {
    newPlanets,
    setNewPlanets,
    columnOptions,
    setColumnOptions,
    initialFormValue,
    setInitialFormValue,
    filtersArray,
    setFiltersArray } = useContext(PlanetsAPI);

  const handleButtonFilter = (e: React.FormEvent) => {
    e.preventDefault();
    const { column, comparation, number } = initialFormValue;
    const filter = newPlanets.filter((planet: Planets) => {
      if (comparation === 'maior que') {
        return Number(planet[column]) > Number(number);
      }
      if (comparation === 'menor que') {
        return Number(planet[column]) < Number(number);
      }
      if (comparation === 'igual a') {
        return Number(planet[column]) === Number(number);
      }
      return false;
    });
    setNewPlanets(filter);
    setColumnOptions(columnOptions.filter((element) => element !== column));
    setFiltersArray([...filtersArray, initialFormValue]);
    setInitialFormValue({ ...initialFormValue,
      column: columnOptions
        .filter((element) => element !== column)[0] });
  };

  // const handleRemoveOneFilterButton = (filter: any) => {
  //   const { column, number } = initialFormValue;

  //   const removefilter = filtersArray
  //     .filter((element) => element.column !== filter.column);
  //   setFiltersArray(removefilter);

  //   if (removefilter.length > 0) {
  //     removefilter.forEach((element: any) => {
  //       if (element.column === 'maior que') {
  //         const filter1 = newPlanets.filter((planet: Planets) => {
  //           return Number(planet[column]) > Number(number);
  //         });
  //         setNewPlanets(filter1);
  //       }
  //       if (element.column === 'menor que') {
  //         const filter2 = newPlanets.filter((planet: Planets) => {
  //           return Number(planet[column]) < Number(number);
  //         });
  //         setNewPlanets(filter2);
  //       }
  //       if (element.column === 'igual a') {
  //         const filter3 = newPlanets.filter((planet: Planets) => {
  //           return Number(planet[column]) === Number(number);
  //         });
  //         setNewPlanets(filter3);
  //       }
  //     });
  //   }
  // };
  console.log(filtersArray);
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
          {
              columnOptions.map((column) => (
                <option value={ column } key={ column }>{ column }</option>
              ))
           }
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
          onClick={ handleButtonFilter }
        >
          Filtrar
        </button>
        <button
          data-testid="button-remove-filters"
          // onClick={ handleRemoveAllFiltersButton }
        >
          Remover todas filtragens
        </button>
      </form>
      <div>
        {filtersArray.length > 0 && filtersArray.map((filter: any) => (
          <div data-testid="filter" key={ filter.column }>
            <span>{filter.column}</span>
            <span>{filter.comparation}</span>
            <span>{filter.number}</span>
            <button>
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Filters;
