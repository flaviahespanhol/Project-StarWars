import React, { useContext, useEffect } from 'react';
import './App.css';
import Table from './components/Table';
import PlanetsAPI from './context/api-planets-context';
import planetsData from './fetch-api';
import Filters from './components/Filters';

function App() {
  // const [loading, setLoading] = useState(false);
  const { setPlanets, setNewPlanets } = useContext(PlanetsAPI);

  useEffect(() => {
    const fetchData = async () => {
      const data = await planetsData();
      setPlanets(data);
      setNewPlanets(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Filters />
      <Table />
    </>
  );
}

// return (
//   <div>
//     {loading ? (
//       <Loading />
//     ) : (
//       <Table />
//     )}
//   </div>
// );

export default App;
