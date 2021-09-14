// Ant design progress Component, changed to circle
// Progress is updated by percentage from props

import React from "react";
import { Progress } from "antd";

const ProgressBar = ({ percent }) => (
  <div className="prog">
    <Progress
      type="circle"
      strokeColor={{
        "0%": "#108ee9",
        "100%": "#87d068",
      }}
      percent={percent}
      status="active"
    />
  </div>
);
export default ProgressBar;
