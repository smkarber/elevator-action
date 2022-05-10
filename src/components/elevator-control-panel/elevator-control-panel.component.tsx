import React, { useEffect, useState } from "react";

import "./elevator-control-panel.styles.scss";

const ElevatorControlPanel = () => {
  const [count, setCount] = useState(0);

  const addElevator = async () => {
    setCount(count + 1);
  };

  useEffect(() => console.log(count), [count]);

  return (
    <div className="control-panel">
      <div className="add-elevator-widget">
        <button onClick={addElevator} disabled={count >= 10}>
          Add Elevator
        </button>
      </div>
    </div>
  );
};

export default ElevatorControlPanel;
