import React, { useState, useEffect } from "react";
import Match from "../matchs/match";
import "./playoffs.css"

function Quarters({ teams, getSemis }) {
    const [quarter, setQuarter] = useState([]);
    const [semis, setSemis] = useState([[], [], [], []])

     const matches = [
         [teams[0]?.[0], teams[1]?.[0]],
         [teams[2]?.[0], teams[3]?.[0]],
         [teams[4]?.[0], teams[5]?.[0]],
         [teams[6]?.[0], teams[7]?.[0]],
       ];

       useEffect(() => {
         setQuarter(matches);
       }, [teams]);

      function handleTeams(clasif, index) {
        const newTeams = semis.map((t, i) => {
            if (i === index) {
              return (t = clasif);
            } else {
              return t;
            }
          });
      
        setSemis(newTeams)
      }

      useEffect(() => {
        getSemis(semis);
      }, [semis]);
      
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 py-2">
      <h1 className="p-2 p-md-3 playoffs-title">QUARTER-FINALS</h1>
       <div className="d-flex flex-column gap-3 gap-md-4">
        {quarter.map((teams, i) => (
          <Match teams={teams} key={i} handleTeams={handleTeams} index={i}/>
        ))}
      </div>
    </div>
  );
}

export default Quarters