const planetsData = async () => {
  const data = await fetch('https://swapi.dev/api/planets');
  const response = await data.json();
  const newData = response.results.map((planet: any) => {
    delete planet.residents;
    return planet;
  });

  return newData;
};

export default planetsData;
