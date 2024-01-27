import { render, screen } from "@testing-library/react";
import App from "./App";
import Home from "./components/Home";
import BookingPage from "./components/BookingPage";

describe("BookingPage", () => {
  it("renders input fields with correct HTML5 validation attributes", () => {
    render(<BookingPage />);
    // Date input
    const dateInput = screen.getByLabelText("Choose Date");
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toBeRequired();
    // time input
    const timeInput = screen.getByLabelText("Choose Time");
    expect(timeInput).toHaveAttribute("type", "select-one");

    // Guests input
    const guestsInput = screen.getByLabelText("Number of guest");
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test("Header component get load", () => {
  render(<Home />);
  const textFind = screen.getByTestId("header-component");
  expect(textFind).toBeInTheDocument();
});

test("Booking Page found", () => {
  render(<BookingPage />);
  const linkElement = screen.getByText("Reservation Table");
  expect(linkElement).toBeInTheDocument();
});
