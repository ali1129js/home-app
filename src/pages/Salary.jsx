import React, { useState } from "react";
import { Radio, Space } from "antd";
import { Link } from "react-router-dom";

const Salary = ({ handleProgress, handleChange }) => {
  const [value, setValue] = useState(0);
  const setSlary = (salary) => {
    setValue(salary);
    handleChange(salary);
    handleProgress(salary);
  };
  return (
    <div className="salary mt-5">
      <h4>Please Select one </h4>
      <Radio.Group value={value} onChange={(e) => setSlary(e.target.value)}>
        <Space direction="vertical">
          <Radio value={1}>0 - 1.000</Radio>
          <Radio value={2}>1.000 - 2.000</Radio>
          <Radio value={3}>2.000 - 3.000</Radio>
          <Radio value={4}>3.000 - 4.000</Radio>
          <Radio value={5}>Mehr als 4.000</Radio>
        </Space>
      </Radio.Group>
      <div className="m-4">
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
export default Salary;
