export const actionTypes = {
  START_CLOCK: "START_CLOCK",
  TICK_CLOCK: "TICK_CLOCK",
};

export function startClock() {
  return { type: actionTypes.START_CLOCK };
}

export function tickClock() {
  return {
    type: actionTypes.TICK_CLOCK,
    ts: Date.now(),
  };
}
