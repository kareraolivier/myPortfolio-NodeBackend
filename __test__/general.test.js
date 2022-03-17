import { truth, addition } from "./general.js";

describe("testing function", () => {
  it("compare true and true", () => {
    const resp = truth();
    expect(resp).toEqual(true);
  });
});

describe("adding function", () => {
  it("add two nbrs", () => {
    const a = 10;
    const b = 10;
    let sum = a + b;
    const resp = addition();
    expect(resp).toEqual(sum);
  });
});
