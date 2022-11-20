import React, { useState, useEffect } from "react";
import worldcup from "../assets/data.json";
import Header from "./header";
import Matches from "./matchs/matches";
import "../index.css"

const FetchData = () => {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    setFetchData(worldcup.groups);
  }, []);

  return (
    <div className="main">
      <Header />
      <Matches data={fetchData} />
      <div className="wave-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#773344"
            fillOpacity="1"
            d="M0,32L60,53.3C120,75,240,117,360,112C480,107,600,53,720,32C840,11,960,21,1080,48C1200,75,1320,117,1380,138.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default FetchData;
