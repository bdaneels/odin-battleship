import { Ship, sinkShip } from "./ship.js";

beforeAll(() => {});

test("register 2 ship hits but not sunk", () => {
  const ship = new Ship("patrol", 3);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBeFalsy();
});

test("register 3 ship hits and sunk", () => {
  const ship = new Ship("patrol", 3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBeTruthy();
});
