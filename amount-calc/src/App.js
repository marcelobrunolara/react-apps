import React, { Component } from 'react';
import ReadOnlyFields from './components/ReadOnlyFields.js';
import { calculateSalaryFrom } from './util/salary.js';
import Bar from './components/Bar.js';

export default class App extends Component {

  constructor() {

    super();

    this.state = {
      grossSalary: 0,
      baseINSS: 0,
      discountINSS: 0,
      baseIRPF: 0,
      discountIRPF: 0,
      netSalary: 0,
    };
  }

  handleSalaryChange = (event) => {
    const grossSalary = event.target.value;
    const salaryValues = calculateSalaryFrom(grossSalary);
    this.setState({grossSalary, ...salaryValues});
  }

  calculatePercent = (part, total)=>{
    if(part===0)
      return 0;

    return (part/total*100).toFixed(2);
  }

  render() {
    const { grossSalary,
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary} = this.state;

    const percentINSS = this.calculatePercent(discountINSS, grossSalary);
    const percentIRPF = this.calculatePercent(discountIRPF, grossSalary)
    const percentNetSalary = this.calculatePercent(netSalary, grossSalary);

    return (
      <div>
        <h1>BR - Salary Calculator</h1>
        <div className="main-container">
          <strong>Gross Salary</strong>
          <input type="number" value={grossSalary} onChange={this.handleSalaryChange} />
        </div>
        <div>
        <ReadOnlyFields label="INSS Base" type="black" value={baseINSS}/>
        <ReadOnlyFields label="INSS Discount" type="orange" value={discountINSS} percent={percentINSS}/>
        <ReadOnlyFields label="IRPF Base" type="black" value={baseIRPF} />
        <ReadOnlyFields label="IRPF Discount" type="red" value={discountIRPF} percent={percentIRPF}/>
        <ReadOnlyFields label="Net Salary" type="green" value={netSalary} percent={percentNetSalary}/>
        </div>
        <div className="bar-container">
          <Bar value={percentINSS} color="orange" />
          <Bar value={percentIRPF} color="red" />
          <Bar value={percentNetSalary} color="green" />
        </div>
      </div>
    )
  }
}
