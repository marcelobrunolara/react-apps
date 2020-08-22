import React from "react";

export default function Installment({value}) {

    const {amount, newAmount, totalInterest, difference} = value;

    return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "4px",
        width: "150px",
        height: "75px",
        margin: "5px",
      }}
    >
        <div className={difference > 0? "values-div positive" : "values-div negative"}>
            <span> R$ {newAmount}</span>
            <span> R$ {difference}</span>
            <span>{totalInterest}</span>
        </div>
    </div>
  );
}
