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
    <div className="">
      <div className="btn-group-vertical">
        PLease select your income:
        {salaries.map((sal) => (
          <div>
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

      <div className="">
        <button type="button" className="btn btn-info">
          <Link to="/">back</Link>
        </button>
        <button type="button" className="btn btn-info">
          <Link to="/summary">Next</Link>
        </button>
      </div>
    </div>
  );
};
export default Radio;
