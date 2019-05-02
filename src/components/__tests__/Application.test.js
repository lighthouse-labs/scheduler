import React from "react";

import { render, cleanup } from "react-testing-library";

import Application from "components/Application";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Application />);
});
