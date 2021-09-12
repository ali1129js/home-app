import React from "react";
import { Progress } from "antd";

const ProgressBar = ({ percent }) => (
  <div className="prog mt-5">
    <Progress
      strokeColor={{
        from: "#108ee9",
        to: "#87d068",
      }}
      percent={percent}
      status="active"
    />
  </div>
);
export default ProgressBar;
