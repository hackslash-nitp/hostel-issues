import React from "react";
import QueryMainCard from "./queryMainCard";

//this dummy 'dataList' will come from backend having data like below which will be further used to build <QueryMainCard>
const dataList = [
  { number: "#935680", complain: "Fan not Working", status: "Pending" },
  { number: "#236800", complain: "Water Leakage", status: "Resolved" },
  { number: "#935676", complain: "Faulty Lift", status: "Rejected" },
];

function Status() {
  return (
    <div>
      {dataList.map((data) => (
        <QueryMainCard
          key = {data.number}
          numberText={data.number}
          complainText={data.complain}
          statusText={data.status}
        ></QueryMainCard>
      ))}
      </div>
  );
}

export default Status;