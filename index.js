export const PETAL = "Weave-Gold";
export const INVARIANT = "WEAVE_STATIONARY";
export function verify(input) {
  if (!input || typeof input !== "object") {
    return {
      pass: false,
      stationary: false,
      signal: "weave-gold:INVALID_INPUT",
      reason: "input must be an object"
    };
  }
  const stationary =
    input.repo === "Riverbraid-Weave-Gold" &&
    input.petal === "Weave-Gold" &&
    input.ring === 1 &&
    input.invariant === "WEAVE_STATIONARY";
  return {
    pass: true,
    stationary,
    signal: stationary ? "weave-gold:STATIONARY" : "weave-gold:DRIFT",
    reason: stationary
      ? "Stationary fields match declared petal identity"
      : "One or more stationary fields drift from declaration"
  };
}
