import { useState, useEffect } from "react";
import { getData } from "@/services";
import { FetchData } from "@/interfaces";
import { CovidList, Graphics, Panel } from "@/components/home";
import { LoadingData } from "@/components/loaders";
import { Container } from "@/styles";

const Home = () => {
  const [covidData, setCovidData] = useState<FetchData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getData()
      .then((data) => setCovidData(data))
      .catch((error) => setError(true))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <LoadingData />;

  if (error) return <div>Error al obtener los datos</div>;

  return (
    <Container>
      <Panel />
      <Graphics data={covidData} />
      <CovidList data={covidData} />
    </Container>
  );
};

export default Home;
