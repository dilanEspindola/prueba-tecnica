import { useState, useEffect } from "react";
import { getData } from "@/services";
import { FetchData } from "@/interfaces";
import { CovidList, Graphics } from "@/components/home";
import { LoadingData } from "@/components/loaders";
import { Sidebar } from "@/components/sidebar";
import { Container, ContainerData } from "@/styles";
import { ErrorFetching } from "@/utils";

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

  if (error) return <ErrorFetching />;

  return (
    <Container>
      <Sidebar />
      <ContainerData>
        <Graphics data={covidData} />
        <CovidList data={covidData} />
      </ContainerData>
    </Container>
  );
};

export default Home;
