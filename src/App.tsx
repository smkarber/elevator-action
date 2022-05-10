import React from "react";

import ElevatorCanvas from "./components/elevator-canvas/elevator-canvas.component";
import ElevatorControlPanel from "./components/elevator-control-panel/elevator-control-panel.component";

import Elevator from "./interfaces/elevator.interface";

import "./App.scss";

function App() {
  const elevators: Elevator[] = [
    // {
    //   direction: "up",
    //   floors: 5,
    //   currentFloor: 3,
    //   moving: false,
    // },
    // {
    //   direction: "up",
    //   floors: 9,
    //   currentFloor: 2,
    //   moving: false,
    // },
    // {
    //   direction: "up",
    //   floors: 9,
    //   currentFloor: 1,
    //   moving: false,
    // },
    // {
    //   direction: "up",
    //   floors: 9,
    //   currentFloor: 1,
    //   moving: false,
    // },
    // {
    //   direction: "up",
    //   floors: 9,
    //   currentFloor: 5,
    //   moving: false,
    // },
    // {
    //   direction: "up",
    //   floors: 9,
    //   currentFloor: 1,
    //   moving: false,
    // },
    // {
    //   direction: "up",
    //   floors: 9,
    //   currentFloor: 3,
    //   moving: false,
    // },
    // {
    //   direction: "up",
    //   floors: 9,
    //   currentFloor: 9,
    //   moving: false,
    // },
    // {
    //   direction: "up",
    //   floors: 9,
    //   currentFloor: 3,
    //   moving: false,
    // },
    // {
    //   direction: "up",
    //   floors: 9,
    //   currentFloor: 4,
    //   moving: false,
    // },
  ];

  return (
    <>
      <ElevatorCanvas elevators={elevators} />
      <ElevatorControlPanel />
    </>
  );
}

export default App;
