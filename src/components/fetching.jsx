import React, { useEffect, useState } from "react";
import worldcup from "../assets/data.json";
import Group from "./group/group";

export default function Fetching() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(worldcup.groups);
  }, []);

  return (
    <div>
      <h1>Hola</h1>

      {/* Obtener las letras de cada grupo

       {data.map((res,i) => (
        <div key={i}>{res.letter}</div>
      ))}  */}

    {data.map((res,i) => <Group key={i} group={res}/>)}
    </div>
  );
}
