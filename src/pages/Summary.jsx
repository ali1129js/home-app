import React from "react";
import { Link } from "react-router-dom";

const Summary = ({ state: { fname, lname, email, phone, salary } }) => {
  return (
    <div className="summary">
      <h2> Please Review</h2>
      <div className="name">
        {fname} {lname}
      </div>
      <div>{email}</div>
      <div>{phone}</div>
      <div>{salary}</div>
      <Link to="/salary">Back</Link>
    </div>
  );
};
export default Summary;
