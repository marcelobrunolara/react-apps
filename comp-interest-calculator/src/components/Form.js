import React, { useState } from "react";
import {interestCalculator} from "../helpers/calculator.js";

export default function Form({ setInstallments }) {
  const [amount, setAmount] = useState(1000);
  const [tax, setTax] = useState(0.1);
  const [installmentsNum, setNumInstallments] = useState(0);

  function handleAmountChange({target}) {
    setAmount(target.value);
    setNumInstallments(0);
    cleanArray();
  }

  function handleTaxChange({target}) {
    setTax(target.value);
    setNumInstallments(0);
    cleanArray();
  }

  function handleNumInstallmentsChange({target}) {
    
    setNumInstallments(target.value);
    
    let array = [];
    
    for(let i=1; i<= target.value; i++){
        array.push(interestCalculator(amount,tax,i));
    }

    setInstallments(array);
  }

  function cleanArray(){
    setInstallments([]);
  }

  return (
    <div className="form-div">
      <div className="field-div">
        <strong>Amount: </strong>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          step="1000"
          min="1000"
          max="100000"
        />
      </div>
      <div className="field-div">
        <strong>Tax: </strong>
        <input
          type="number"
          value={tax}
          onChange={handleTaxChange}
          step="0.1"
          min="-12"
          max="12"
        />
      </div>
      <div className="field-div">
        <strong>Installments: </strong>
        <input
          type="number"
          value={installmentsNum}
          onChange={handleNumInstallmentsChange}
          step="1"
          min="0"
          max="100"
        />
      </div>
    </div>
  );
}
