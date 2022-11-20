import React, { useState, useEffect } from "react";
import Match from "../matchs/match";
import "./playoffs.css"

function Final({ teams, getChamp }) {
    const [final, setFinal] = useState([])
    const [champ, setChamp] = useState([]);

    const matches = [
        teams[0]?.[0], teams[1]?.[0]
      ];

      function handleTeams(clasif, index) {
        setChamp(clasif)
      }

      useEffect(() => {
        getChamp(champ);
      }, [champ]);

       useEffect(() => {
         setFinal(matches);
        }, [teams]);
      
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 py-2">
      <h1 className="p-2 p-md-4 playoffs-title">FINAL</h1>
       <div className="d-flex flex-column gap-3 gap-md-4">
          <Match teams={final} handleTeams={handleTeams}/>
      </div>
    </div>
  );
}

export default Final