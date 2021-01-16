import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

const req = require.context("../src/components", true, /.stories.tsx$/)
function loadStories() {
	req.keys().forEach(req)
}

configure(loadStories, module)