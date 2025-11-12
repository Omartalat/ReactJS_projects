import { useState } from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

export default function UserInput() {
  const [investmenData, setInvestmentData] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setInvestmentData((prevInvestmentData) => ({
      ...prevInvestmentData,
      [name]: +value,
    }));
  }
  const annualData = calculateInvestmentResults(investmenData);

  console.log(annualData);

  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label htmlFor="initial_investment">Initial Investment</label>
            <input
              id="initial_investment"
              type="number"
              name="initialInvestment"
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="annual_investment">Annual Investment</label>
            <input
              id="annual_investment"
              type="number"
              name="annualInvestment"
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="expected_return">Expected Return</label>
            <input
              id="expected_return"
              type="number"
              name="expectedReturn"
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="duration">Duration</label>
            <input
              id="duration"
              type="number"
              name="duration"
              onChange={handleChange}
            />
          </p>
        </div>
      </section>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Ivestment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>{annualData.map((yearData) => {
          const totalInterest = yearData.valueEndOfYear -yearData.annualInvestment * yearData.year
          const totalInvested = yearData.valueEndOfYear - totalInterest
          return (<tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalInvested)}</td>
          </tr>)
        })}</tbody>
      </table>
    </>
  );
}
