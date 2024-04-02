import React from "react";
import { useHistory } from "react-router-dom";
import "./Report.css"; // Import CSS file for styling

const   LiverFunction = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/dietcv");
  };

  return (
    <div className="report-container">
      <h1 className="report-heading">Liver Function Test Report</h1>
      <form className="report-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Age:</label>
          <input type="text" id="age" name="age" />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="hypertension">Total Bilirubin:</label>
          <input type="number" id="hypertension" name="hypertension" />
        </div>
        <div className="form-group">
          <label htmlFor="bmi">Direct Bilirubin</label>
          <input type="number" id="bmi" name="bmi" />
        </div>
        <div className="form-group">
          <label htmlFor="hba1c">Alkaline Phosphotase:</label>
          <input type="number" id="hba1c" name="hba1c" />
        </div>
        <div className="form-group">
          <label htmlFor="bloodGlucose">Aspartate Aminotransferase</label>
          <input type="number" id="bloodGlucose" name="bloodGlucose" />
        </div>
        <div className="form-group">
          <label htmlFor="bloodGlucose">Total Protiens:</label>
          <input type="number" id="bloodGlucose" name="bloodGlucose" />
        </div>
        <div className="form-group">
          <label htmlFor="bloodGlucose">Albumin and Globulin_Ratio:</label>
          <input type="number" id="bloodGlucose" name="bloodGlucose" />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default LiverFunction;
