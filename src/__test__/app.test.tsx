import { render, screen, fireEvent } from "@testing-library/react";
import { INPUT_TEST_ID } from "@/components/Input/constants.ts";
import { TEST_FILE } from "@/helpers/constants.ts";

import { App } from "../App.tsx";

describe("App component", () => {
  it("should contains 'File 1'", () => {
    render(<App />);
    const inputElement = screen.queryByTestId(INPUT_TEST_ID);
    expect(inputElement).toBeInTheDocument();

    inputElement &&
      fireEvent.change(inputElement, { target: { value: TEST_FILE } });
    expect(inputElement).toHaveValue(TEST_FILE);

    const targetElement = screen.queryByText(TEST_FILE);
    expect(targetElement).toBeInTheDocument();
  });
});
