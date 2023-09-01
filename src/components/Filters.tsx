import { useContext } from 'react';
import PlanetsAPI from '../context/api-planets-context';
import { Planets } from '../types';

function Filters() {
  const {
    planets,
    newPlanets,
    setNewPlanets,
    columnOptions,
    setColumnOptions,
    initialFormValue,
    setInitialFormValue,
    filtersArray,
    setFiltersArray,
    sortState,
    setSortState } = useContext(PlanetsAPI);

  const handleFilterButton = (e: React.FormEvent) => {
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement
  | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setSortState({ ...sortState, [name]: value });
  };

  const handleOrderButton = (event: React.MouseEvent<MouseEvent | HTMLButtonElement>) => {
    event.preventDefault();

    const { column, sort } = sortState;

    let data = planets;

    const planetsOrdened = data
      .filter((element: any) => (
        element[column] !== 'unknown'))
      .sort((a, b) => {
        if (sort === 'DESC') {
          return Number(b[column as keyof Planets]) - Number(a[column as keyof Planets]);
        }
        return Number(a[column as keyof Planets]) - Number(b[column as keyof Planets]);
      });

    if (planets.length === 0) {
      data = newPlanets;
    }

    const unknown = data.filter((element: any) => (
      element[column] === 'unknown'));

    return setNewPlanets(planetsOrdened) && planetsOrdened.push(...unknown);
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
        <label>
          Ordenar
          <select
            onChange={ handleChange }
            name="column"
            value={ sortState.column }
            id="column-sort"
            data-testid="column-sort"
          >
            {
              columnOptions.map((column) => (
                <option value={ column } key={ column }>{ column }</option>
              ))
           }
          </select>
        </label>
        <div>
          <label>
            Ordem Crescente
            <input
              onChange={ handleChange }
              checked={ sortState.sort === 'ASC' }
              type="radio"
              name="sort"
              value="ASC"
              data-testid="column-sort-input-asc"
            />
          </label>
        </div>
        <div>
          <label>
            Ordem Decrescente
            <input
              onChange={ handleChange }
              checked={ sortState.sort === 'DESC' }
              type="radio"
              name="sort"
              value="DESC"
              data-testid="column-sort-input-desc"
            />
          </label>
        </div>
        <button
          type="submit"
          data-testid="column-sort-button"
          onClick={ handleOrderButton }
        >
          Aplicar Ordernação
        </button>
        <button
          type="submit"
          data-testid="button-filter"
          onClick={ handleFilterButton }
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
