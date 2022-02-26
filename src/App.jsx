import React, { useEffect, useState } from "react";
import { CardGroup, Filters, Header, Search } from "./containers";

const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState();
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  const getData = async () => {
    const data = await fetch(api).then((item) => item.json());
    setFetchedData(data.results);
  };

  useEffect(() => {
    getData();
  }, [api]);

  return (
    <div className="font-primary">
      <Header />
      <Search />
      <div className="grid grid-cols-10">
        <Filters />
        <CardGroup />
      </div>
    </div>
  );
};

export default App;
