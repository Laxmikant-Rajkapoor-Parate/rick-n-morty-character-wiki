import React, { useEffect, useState } from "react";
import { CardGroup, Filters, Header, Search } from "./containers";

const App = () => {
  const [results, setResults] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setResults(data.results);
    })();
  }, [api]);

  return (
    <div className="font-primary">
      <Header />
      <Search />
      <div className="grid grid-cols-10">
        <Filters />
        <CardGroup data={results} />
      </div>
    </div>
  );
};

export default App;
