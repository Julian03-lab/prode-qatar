import React, { useState, useEffect } from "react";
import Match from "../matchs/match";
import "./playoffs.css";
const A = 0;
const B = 1;
const C = 2;
const D = 3;
const E = 4;
const F = 5;
const G = 6;
const H = 7;
const FIRST = 0;
const SECOND = 1;

export const Round16 = ({ teams, getQuarters }) => {
  const phaseID = 1;

  const [round16, setRound16] = useState([]);
  const [quarter, setQuarter] = useState([[], [], [], [], [], [], [], []]);

  const matches = [
    [teams[A][FIRST], teams[B][SECOND]],
    [teams[C][FIRST], teams[D][SECOND]],
    [teams[E][FIRST], teams[F][SECOND]],
    [teams[G][FIRST], teams[H][SECOND]],
    [teams[B][FIRST], teams[A][SECOND]],
    [teams[D][FIRST], teams[C][SECOND]],
    [teams[F][FIRST], teams[E][SECOND]],
    [teams[H][FIRST], teams[G][SECOND]],
  ];

  useEffect(() => {
    setRound16(matches);
  }, [teams]);

  useEffect(() => {
    getQuarters(quarter);
  }, [quarter]);

  function handleTeams(clasif, index) {
    const newTeams = quarter.map((t, i) => {
      if (i === index) {
        return (t = clasif);
      } else {
        return t;
      }
    });

    setQuarter(newTeams);
  }

  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 py-2">
      <h1 className="p-md-3 playoffs-title">ROUND OF 16</h1>
      <div className="d-flex flex-column gap-3 gap-md-4">
        {round16.map((teams, i) => (
          <Match teams={teams} key={i} handleTeams={handleTeams} index={i} phaseID={phaseID}/>
        ))}
      </div>
    </div>
  );
};
