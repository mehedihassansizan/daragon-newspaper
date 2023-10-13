/* eslint-disable no-unused-vars */
import React from "react";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="bg-light mt-4 p-2">
      <h3 className="">Q-zone</h3>
      <div>
        <img src={qZone1} className="w-100" alt="" />
        <img src={qZone2} className="w-100 py-4" alt="" />
        <img src={qZone3} className="w-100" alt="" />
      </div>
    </div>
  );
};

export default QZone;
