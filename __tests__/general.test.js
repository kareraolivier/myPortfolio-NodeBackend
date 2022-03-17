import { truth } from "./general.js";

describe("testing function", () => {
  it("compare true and true", () => {
    const resp = truth();
    expect(resp).toEqual(true);
  });
});
