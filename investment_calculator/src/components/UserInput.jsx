import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";

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
      [name]: value,
    }));
  }
  const annualData = calculateInvestmentResults(investmenData);

  return (
    <>
      <div className="input-group">
        <div id="user-input">
          <label htmlFor="initial_investment">Initial Investment</label>
          <input
            id="initial_investment"
            type="number"
            name="initialInvestment"
            onChange={handleChange}
          />

          <label htmlFor="annual_investment">Annual Investment</label>
          <input
            id="annual_investment"
            type="number"
            name="annualInvestment"
            onChange={handleChange}
          />

          <label htmlFor="expected_return">Expected Return</label>
          <input
            id="expected_return"
            type="number"
            name="expectedReturn"
            onChange={handleChange}
          />

          <label htmlFor="duration">Duration</label>
          <input
            id="duration"
            type="number"
            name="duration"
            onChange={handleChange}
          />
        </div>
      </div>
      <table id="result">
        <tr>
          <th>Year</th>
          <th>Ivestment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </table>
    </>
  );
}
