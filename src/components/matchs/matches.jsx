import React, { useState, useEffect } from "react";
import Groups from "../group/groups";
import  Quarters  from "../playoffs/Quarters";
import { Round16 } from "../playoffs/Round16";

const Matches = ({ data }) => {
  const [playoffs, setPlayoffs] = useState([[], [], [], [], [], [], [], []]);
  const [quarter, setQuarter] = useState([]);
  const [semis, setSemis] = useState([]);

  function getPlayoffs(clasif, index) {
    const newTeams = playoffs.map((t, i) => {
      if (i === index) {
        return (t = clasif);
      } else {
        return t;
      }
    });

    setPlayoffs(newTeams);
  }

  const getQuarters = (teams) => setQuarter(teams);
  const getSemis = (teams) => setSemis(teams);

  return (
    <div>
      <div className="row py-2 px-4 py-md-3 px-md-5">
        {data.map((res, index) => (
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
          <Quarters teams={quarter} getSemis={getSemis}/>
        </div>
      </div>
    </div>
  );
};

export default Matches;
