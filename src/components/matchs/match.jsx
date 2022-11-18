import React, { useState, useEffect } from "react";
import "./match.css";

export default function Match({ teams, handleTeams, index }) {
  const [clasif, setClasif] = useState([]);

  const holdClick = (e) => {
    if (clasif.length < 1) {
      setClasif((prev) => [...prev, e.target.innerText]);
    }
    if (clasif.includes(e.target.innerText)) {
      setClasif(clasif.filter((element) => element != e.target.innerText));
    }
  };

  const selectColor = (team) => (clasif.includes(team) ? "#00A23B" : "#212529");

  useEffect(() => {
    handleTeams(clasif, index);
  }, [clasif]);

  useEffect(() => {
    if(teams[0] === undefined && teams[0] === undefined){
        setClasif([])
    }
  }, [teams])

  return (
    <div className="d-flex flex-column gap-2 align-items-center">
      <button
        className="team-button btn btn-secondary btn-sm"
        onClick={holdClick}
        style={{ backgroundColor: selectColor(teams[0]) }}
      >
        {teams[0]}
      </button>
      <button
        className="team-button btn btn-secondary btn-sm"
        onClick={holdClick}
        style={{ backgroundColor: selectColor(teams[1]) }}
      >
        {teams[1]}
      </button>
    </div>
  );
}
