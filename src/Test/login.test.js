import React from "react";
import { render } from "@testing-library/react";
import LoginPage from "../Page/login";

jest.mock("../components/login", () => () => {
  return <div className="mocking-login-components" />;
});

describe("mock component tests", () => {
    test.skip("renders without crashing", () => {
            const { container } = render(<LoginPage />);
    });

    test.only("mocked components in react", () => {
        const { container } = render(<LoginPage />);

        console.log(container.outerHTML);
    });
});
