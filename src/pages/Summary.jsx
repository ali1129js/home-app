import React from "react";
import { Link } from "react-router-dom";

const Summary = ({ state: { fname, lname, email, phone, salary } }) => {
  return (
    <div className="summary">
      <h4 className="m-2"> Please Review</h4>
      <div>
        Your Name:
        <strong>
          {fname} {lname}
        </strong>
      </div>
      <div>Your Email:{email}</div>
      <div>Your Phone:{phone}</div>
      <div>Your Income:{salary}</div>
      <button className="btn btn-info m-3">
        <Link to="/salary">Back</Link>
      </button>
    </div>
  );
};
export default Summary;
