import React, { useState, useEffect } from "react";
import Match from "../matchs/match";
import "./playoffs.css"

function Semis({ teams, getFinal }) {
    const [semis, setSemis] = useState([]);
    const [final, setFinal] = useState([[],[]])

     const matches = [
         [teams[0]?.[0], teams[1]?.[0]],
         [teams[2]?.[0], teams[3]?.[0]],
       ];

       useEffect(() => {
        setSemis(matches);
       }, [teams]);

      function handleTeams(clasif, index) {
        const newTeams = final.map((t, i) => {
            if (i === index) {
              return (t = clasif);
            } else {
              return t;
            }
          });
      
        setFinal(newTeams)
      }

      useEffect(() => {
        getFinal(final);
      }, [final]);
      
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 py-2">
      <h1 className="p-2 p-md-3 playoffs-title">SEMI-FINALS</h1>
       <div className="d-flex flex-column gap-3 gap-md-4">
        {semis.map((teams, i) => (
          <Match teams={teams} key={i} handleTeams={handleTeams} index={i}/>
        ))}
      </div>
    </div>
  );
}

export default Semis