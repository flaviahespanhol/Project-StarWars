import { useContext } from 'react';
import PlanetsAPI from '../context/api-planets-context';
import { Planets } from '../types';

function Filters() {
  const {
    newPlanets,
    setNewPlanets,
    columnOptions,
    initialFormValue,
    setInitialFormValue } = useContext(PlanetsAPI);

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
  };

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
      </form>
      {/* <div>
        {filtersArray.map((filter: any) => (
          <div key={ filter.column }>
            <span>{filter.column}</span>
            <span>{filter.comparation}</span>
            <span>{filter.number}</span>
          </div>
        ))}
      </div> */}
    </>
  );
}

export default Filters;
