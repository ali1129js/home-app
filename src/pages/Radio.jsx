import React from "react";
import { Link } from "react-router-dom";

const Radio = ({ handleChange, handleProgress }) => {
  let salaries = [
    "0-1000",
    "1000-2000",
    "2000-3000",
    "3000-4000",
    "Mehr als 4000",
  ];
  return (
    <div className="radio">
      <div className="btn-group-vertical">
        <h4>Please select income:</h4>
        {salaries.map((sal, i) => (
          <div key={i}>
            <input
              type="radio"
              name="salaryvalues"
              value={sal}
              onChange={handleChange}
              onBlur={handleProgress}
            />
            <label htmlFor="">{sal}</label>
          </div>
        ))}
      </div>
      <div className="m-1">
        <button className="btn btn-info m-3">
          <Link to="/">Back</Link>
        </button>
        <button className="btn btn-info m-3">
          <Link to="/summary">Next</Link>
        </button>
      </div>
    </div>
  );
};
export default Radio;
