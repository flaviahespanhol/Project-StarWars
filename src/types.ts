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
  setPlanets: any,
  newPlanets: Planets[],
  setNewPlanets: any,
  filteredPlanets: string,
  setFilteredPlanets: (element: string) => void,
  columnOptions: string[],
  setColumnOptions: any,
  initialFormValue: FilterType,
  setInitialFormValue: any,
  filtersArray: FilterType[],
  setFiltersArray: any,
  newColumn: string[],
  setNewColumn: any,
  sortState: any,
  setSortState: any,

//   loading: boolean,
//   setLoading: (element: boolean) => void,
};

export type SortType = {
  column: string;
  sort: string;
};
