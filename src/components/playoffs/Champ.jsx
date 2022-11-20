import React from "react";

const Champ = ({ champion }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-3 p-md-3 playoffs-title text-center">The Champion is: 
    <h1 className="playoffs-champion">{champion}!</h1>
    </div>

  );
};

export default Champ