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

export type FilterType = {
  column: keyof Planets;
  comparation: string;
  number: number | string
};

export type PlanetsContext = {
  planets: Planets[],
  setPlanets: (element: []) => void,
  newPlanets: Planets[],
  setNewPlanets: (element: []) => void,
  filteredPlanets: string,
  setFilteredPlanets: (element: string) => void,
  columnOptions: string[],
  setColumnOptions: any,
  columnSelected: string,
  setColumnSelected: any,
  comparationSelected: string,
  setComparationSelected: any,
  inputNumber: number | string,
  setInputNumber: any,
  initialFormValue: FilterType,
  setInitialFormValue: any,
  filtersArray: FilterType[],
  setFiltersArray: any,

//   loading: boolean,
//   setLoading: (element: boolean) => void,
};
