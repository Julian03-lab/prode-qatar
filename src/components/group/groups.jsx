import React, { useEffect, useState } from "react";

export function Team({ name, addTeam }) {
  return <div onClick={addTeam}>{name}</div>;
}

export default function Groups({ group, sumbitData, index }) {
  const [clasif, setClasif] = useState([]);

  const holdClick = (e) => {
    if (clasif.length < 2) {
      setClasif((prev) => [...prev, e.target.innerText]);
    }
    if (clasif.includes(e.target.innerText)) {
      setClasif(clasif.filter((element) => element != e.target.innerText));
    }
  };

  const selectColor = (team) =>
    clasif.includes(team)
      ? clasif.indexOf(team) === 0
        ? "green"
        : "blue"
      : "#ccc";

  useEffect(() => {
    sumbitData(clasif, index);
  }, [clasif]);

  return (
    <div className="table-responsive col-6 col-md-3">
      <table className="table table-hover text-center">
        <thead className="table-light">
          <tr>
            <th scope="col">Group {group.letter}</th>
          </tr>
        </thead>
        <tbody>
          {group.teams.map((res) => (
            <tr key={res.id}>
              <td style={{ backgroundColor: selectColor(res.name) }}>
                {<Team name={res.name} addTeam={holdClick} />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
