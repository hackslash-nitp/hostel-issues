import React from "react";
import "./styles/queryCard.css";

function QueryMainCard(props) {
  return (
    <div className="queryMainCard">
      <div className="queryCard">
        <p>Complaint Issue.</p>
        <p className="make-bold">{props.numberText}</p>
      </div>

      <div className="queryCardLarge">
        <p>Complain Description:</p>
        <p className="make-bold">{props.complainText}</p>
      </div>

      <div className="queryCard">
        <p>Status</p>
        <p className={`make-bold ${props.statusText}`}>{props.statusText}</p>
      </div>
    </div>
  );
}

export default QueryMainCard;