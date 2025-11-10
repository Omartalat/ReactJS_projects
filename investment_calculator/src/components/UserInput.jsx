export default function UserInput() {
  return (
    <div className="input-group">
      <div id="user-input">
        <label htmlFor="initial_investment">Initial Investment</label>
        <input id="initial_investment" type="number" name="initial_investment" />

        <label htmlFor="annual_investment">Annual Investment</label>
        <input id="annual_investment" type="number" name="annual_investment" />
      
        <label htmlFor="expected_return">Expected Return</label>
        <input id="expected_return" type="number" name="expected_return" />

        <label htmlFor="duration">Duration</label>
        <input id="duration" type="number" name="duration" />
      </div>
    </div>
  );
}
