import React from "react";
import Appointment from "../Appointment";
import { render, cleanup } from "@testing-library/react";

import Application from "components/Application";

afterEach(cleanup);

describe("Appointment", () => {
	it("Appointment should render without crashing", () => {
		render(<Appointment />);
	});
});
