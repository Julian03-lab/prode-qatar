import React, { useState, useEffect } from "react";
import worldcup from "../assets/data.json"
import Matches from "./matchs/matches";

const FetchData = () => {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    setFetchData(worldcup.groups);
  }, []);

  return (
    <>
      <Matches data={fetchData}/>
    </>
  );
};

export default FetchData;
