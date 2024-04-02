import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Report.css"; // Import CSS file for styling

const SugarReport = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [hypertension, setHypertension] = useState("");
  const [smokingHistory, setSmokingHistory] = useState("");
  const [bmi, setBmi] = useState("");
  const [hba1c, setHba1c] = useState("");
  const [bloodGlucose, setBloodGlucose] = useState("");
  const [heart_disease, setHeartDisease] = useState("Yes");




  const handleSubmit = (e) => {
    e.preventDefault();
    const req = {
      name ,
      age ,
      gender,
      hypertension,
      smoking_history: smokingHistory,
      heart_disease,
      bmi,
      HbA1c_level : hba1c ,
      blood_glucose_level : bloodGlucose
    };
    console.log(req);
    axios.post("http://localhost:5000/predict/diabetes", req).then((res) => {
      console.log(res.data.prediction);
      alert(res.data.prediction);
    });
    history.push("/diet");
  };

  return (
    <div className="report-container">
      <h1 className="report-heading">Diabetes Test Report</h1>
      <form className="report-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Age:</label>
          <input type="text" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="hypertension">Hypertension:</label>
          <input type="number" id="hypertension" name="hypertension" value={hypertension} onChange={(e) => setHypertension(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="heartDisease">Heart Disease:</label>
          <select id="heartDisease" name="heartDisease" value={heart_disease} onChange={(e) => setHeartDisease(e.target.value)}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="smokingHistory">Smoking History:</label>
          <select id="smokingHistory" name="smokingHistory" value={smokingHistory} onChange={(e) => setSmokingHistory(e.target.value)}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="bmi">BMI:</label>
          <input type="number" id="bmi" name="bmi" value={bmi} onChange={(e) => setBmi(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="hba1c">HbA1c Level:</label>
          <input type="number" id="hba1c" name="hba1c" value={hba1c} onChange={(e) => setHba1c(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="bloodGlucose">Blood Glucose Level:</label>
          <input type="number" id="bloodGlucose" name="bloodGlucose" value={bloodGlucose} onChange={(e) => setBloodGlucose(e.target.value)} />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default SugarReport;
