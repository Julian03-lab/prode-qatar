import React, { useState, useEffect } from "react";
import worldcup from "../../assets/data.json";
import Groups from "../group/groups";

export const Matchs = () => {
  const [fetchData, setFetchData] = useState([]);
  const [playoffs, setPlayoffs] = useState([[], [], [], [], [], [], [], []]);

  useEffect(() => {
    setFetchData(worldcup.groups);
  }, []);

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

  return (
    <div>
      <div className="row py-2 px-4 py-md-3 px-md-5 ">
        {fetchData.map((res, index) => (
          <Groups
            key={index}
            group={res}
            sumbitData={getPlayoffs}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
