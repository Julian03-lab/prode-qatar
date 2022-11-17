import React, { useState } from "react";

export function Team({ name, addTeam }) {
  return <div onClick={addTeam}>{name}</div>;
}

export default function Group({ group }) {
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

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">{group.letter}</th>
        </tr>
      </thead>
      <tbody>
        {group.teams.map((res, i) => (
          <tr key={i}>
            <td style={{ backgroundColor: selectColor(res.name) }}>
              {<Team name={res.name} addTeam={holdClick} />}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
