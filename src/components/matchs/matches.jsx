import React, { useState, useEffect } from "react";
import worldcup from "../../assets/data.json";
import Groups from "../group/groups";
import { Round16 } from "../playoffs/Round16";

const Matches = () => {
  const [fetchData, setFetchData] = useState([]);
  const [playoffs, setPlayoffs] = useState([[], [], [], [], [], [], [], []]);
  const [quarter, setQuarter] = useState([]);

  useEffect(() => {
    setFetchData(worldcup.groups);
  }, []);

  function getPlayoffs(clasif, index, quarters) {
    const newTeams = playoffs.map((t, i) => {
      if (i === index) {
        return (t = clasif);
      } else {
        return t;
      }
    });

    setPlayoffs(newTeams);
  }

  const getQuarters = (teams) => (setQuarter(teams))

  return (
    <div>
      <div className="row py-2 px-4 py-md-3 px-md-5">
        {fetchData.map((res, index) => (
          <Groups
            key={index}
            group={res}
            sumbitData={getPlayoffs}
            index={index}
          />
        ))}
      </div>
      <div className="container-fluid py-2 px-4">
        <div className="row align-items-center justify-content-center text-center">
          <Round16 teams={playoffs} getQuarters={getQuarters}/>
        </div>
      </div>
    </div>
  );
};

export default Matches;
