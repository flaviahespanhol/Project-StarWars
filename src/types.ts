export type Planets = {
  name: string,
  rotation_period: string,
  orbital_period: string,
  diameter: string,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: string,
  population: string,
  films: string[],
  created: string,
  edited: string,
  url: string,
};

export type PlanetsContext = {
  planets: Planets[],
  setPlanets: (element: []) => void,
  dataFiltered: Planets[],
  setDataFiltered: (element: []) => void,
  filteredPlanets: string,
  setFilteredPlanets: (element: string) => void,
//   loading: boolean,
//   setLoading: (element: boolean) => void,
};
