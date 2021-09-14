//Conditional rendering

import React from "react";

const SalaryIndic = ({ salary }) => {
  if (salary === 1) {
    return <div>0 - 1.000</div>;
  }
  if (salary === 2) {
    return <div>1.000 - 2.000</div>;
  }
  if (salary === 3) {
    return <div>2.000 - 3.000</div>;
  }
  if (salary === 4) {
    return <div>3.000 - 4.000</div>;
  }
  if (salary === 5) {
    return <div>Mehr als 4.000</div>;
  } else {
    return <div>0</div>;
  }
};
export default SalaryIndic;
