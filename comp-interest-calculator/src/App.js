import React, {useState} from 'react';
import Form from './components/Form.js';
import Installments from './components/Installments.js';

function App() {

  const[installments, setInstallments] = useState([]);

  return (
    <div className="App">
      <Form amount={1000} tax={0.1} installment={0} setInstallments={setInstallments}/>
      <Installments array={installments}/>
    </div>
  );
}

export default App;
