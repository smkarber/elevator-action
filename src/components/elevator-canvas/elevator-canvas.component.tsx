import React, { useEffect, useRef, RefObject } from "react";

import Elevator from "../../interfaces/elevator.interface";

import {
  DRAWING_BUILDING_CELL_HEIGHT,
  DRAWING_BUILDING_WIDTH,
  DRAWING_ELEVATOR_MARGIN,
  DRAWING_ELEVATOR_WIDTH,
} from "../../constants/value.constants";

import "./elevator-canvas.styles.scss";

const ElevatorCanvas = ({ elevators }: { [key: string]: Elevator[] }) => {
  const elevatorCanvas: RefObject<HTMLCanvasElement> = useRef(null);
  const canvasContext: CanvasRenderingContext2D | null | undefined =
    elevatorCanvas.current?.getContext("2d");

  function calculateArchitecture(elevators: Elevator[]) {
    const buildingHeight = Math.max(
      ...elevators.map((elevator) => elevator.floors)
    );

    const buildingPositions = [
      325 - (75 + (elevators.length * 40) / 2),
      325 + 20 * elevators.length - 10,
    ];

    const elevatorPositions = elevators.map((elevator, index) => {
      return 325 - (elevators.length - index * 2) * 20;
    });

    return {
      buildingHeight,
      buildingPositions,
      elevatorPositions,
    };
  }

  useEffect(() => {
    if (canvasContext) {
      const drawElevators = (
        calculatedHeight: number,
        calculatedYOffset: number,
        elevatorPositions: number[]
      ) => {
        elevatorPositions.forEach((position, index) => {
          canvasContext.fillStyle = "#2eaed9";
          canvasContext.fillRect(
            position + DRAWING_ELEVATOR_MARGIN,
            calculatedYOffset,
            DRAWING_ELEVATOR_WIDTH,
            calculatedHeight
          );

          canvasContext.fillStyle = "#677087";
          canvasContext.fillRect(
            position,
            calculatedYOffset,
            DRAWING_ELEVATOR_MARGIN,
            calculatedHeight
          );
          canvasContext.fillRect(
            position + DRAWING_ELEVATOR_WIDTH,
            calculatedYOffset,
            DRAWING_ELEVATOR_MARGIN,
            calculatedHeight
          );

          const buildingHeight = Math.max(
            ...elevators.map((elevator) => elevator.floors)
          );
          const elevatorOffset =
            (buildingHeight - elevators[index].currentFloor) *
            DRAWING_BUILDING_CELL_HEIGHT;

          canvasContext.fillStyle = "#19a70f";
          canvasContext.fillRect(
            position + DRAWING_ELEVATOR_MARGIN,
            calculatedYOffset + elevatorOffset,
            DRAWING_ELEVATOR_MARGIN,
            DRAWING_BUILDING_CELL_HEIGHT
          );
        });
      };

      const drawBuilding = (
        calculatedHeight: number,
        calculatedYOffset: number,
        buildingPositions: number[]
      ) => {
        canvasContext.fillStyle = "#170b0b";

        const backdropX = 325 - (elevators.length * 40) / 2;
        canvasContext.fillRect(
          backdropX,
          calculatedYOffset,
          elevators.length * 40,
          calculatedHeight
        );

        canvasContext.fillStyle = "#8d2020";

        canvasContext.fillRect(
          buildingPositions[0],
          calculatedYOffset,
          DRAWING_BUILDING_WIDTH,
          calculatedHeight
        );

        canvasContext.fillRect(
          buildingPositions[1],
          calculatedYOffset,
          DRAWING_BUILDING_WIDTH,
          calculatedHeight
        );
      };

      canvasContext.clearRect(0, 0, 650, 350);
      const { buildingHeight, buildingPositions, elevatorPositions } =
        calculateArchitecture(elevators);

      const calculatedHeight = DRAWING_BUILDING_CELL_HEIGHT * buildingHeight;
      const calculatedYOffset = 350 - calculatedHeight;

      drawBuilding(calculatedHeight, calculatedYOffset, buildingPositions);
      drawElevators(calculatedHeight, calculatedYOffset, elevatorPositions);
    }
  }, [canvasContext, elevators]);

  return (
    <>
      <div className="canvas-container">
        <canvas
          id="elevator-canvas"
          height="350"
          width="650"
          style={{ width: "650px", height: "350px" }}
          ref={elevatorCanvas}
        ></canvas>
      </div>
    </>
  );
};

export default ElevatorCanvas;
