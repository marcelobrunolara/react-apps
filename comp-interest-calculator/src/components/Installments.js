import React from "react";
import Installment from "./Installment";

export default function Installments({ array }) {
  return (
    <div className="installments-div">
      {
        array.map((element,i)=>{
            return <Installment key={i} value={element} />
        })
      }
    </div>
  );
}
