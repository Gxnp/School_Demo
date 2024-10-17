import Foot from "@/components/footer";
import Schdeule_1 from "@/components/schdedule_1";
import Schdeule_2 from "@/components/schdedule_2";
import Schdeule_3 from "@/components/schdedule_3";
import React, { useState } from "react";
import "react-vertical-timeline-component/style.min.css";

const Schedule = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white ">
      <div>
        <Schdeule_1 />
        <div className="container my-8 border-gray-300 border-2 h-2 bg-gray-300 rounded-md" />
        <Schdeule_2 />
        <div className="container my-8 border-gray-300 border-2 h-2 bg-gray-300 rounded-md" />
        <Schdeule_3 />
      </div>
      <Foot />
    </div>
  );
};

export default Schedule;
