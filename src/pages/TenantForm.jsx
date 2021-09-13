import React from "react";
import { Link } from "react-router-dom";

const TenantForm = ({ handleProgress, handleChange }) => {
  return (
    <div className="tenants mt-5">
      <h4>Please fill in all fields:</h4>
      <input
        type="text"
        id="fname"
        onBlur={handleProgress}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        id="lname"
        onBlur={handleProgress}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="email"
        id="email"
        onBlur={handleProgress}
        onChange={handleChange}
        placeholder="Email adresss"
        default="Joe@gmail.com"
      />
      <br />
      <input
        type="text"
        id="phone"
        onBlur={handleProgress}
        onChange={handleChange}
        placeholder="Phone Number"
      />
      <br />
      <button className="btn btn-info mt-4">
        <Link to="/salary">Next</Link>
      </button>
    </div>
  );
};
export default TenantForm;
