import { useContext } from 'react';
import PlanetsAPI from '../context/api-planets-context';
import { Planets } from '../types';

function Table() {
  const { filteredPlanets,
    newPlanets,
    setFilteredPlanets } = useContext(PlanetsAPI);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredPlanets(e.target.value);
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const filter = planets.filter((planet) => planet.name.toLowerCase()
  //     .includes(e.target.value));
  //   setPlanets(filter);
  //   if (e.target.value.length === 0) {
  //     setPlanets({ planets });
  //   }
  // };

  return (
    <div>
      <header>
        <input
          type="text"
          placeholder="Search Planet"
          data-testid="name-filter"
          value={ filteredPlanets }
          onChange={ handleChange }
        />
      </header>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotate Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {newPlanets
            .filter((planet) => planet.name.toLowerCase()
              .includes(filteredPlanets)).map((planet: Planets, index) => (
                <tr key={ index }>
                  <td>{planet.name}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.orbital_period}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.climate}</td>
                  <td>{planet.gravity}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.surface_water}</td>
                  <td>{planet.population}</td>
                  <td>{planet.films}</td>
                  <td>{planet.created}</td>
                  <td>{planet.edited}</td>
                  <td>{planet.url}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
