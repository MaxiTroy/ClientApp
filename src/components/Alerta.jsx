import React from "react";

const Alerta = ({ messaje }) => {
  return (
    <div className="my-2 font-bold text-red-700 uppercase text-center text-xs">
      {messaje}
    </div>
  );
};

export default Alerta;
