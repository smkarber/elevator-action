export default interface Elevator {
  direction: "up" | "down";
  floors: number;
  currentFloor: number;
  moving: boolean;
}
