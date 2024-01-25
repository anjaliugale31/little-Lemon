import { render, screen } from "@testing-library/react";
import App from "./App";
import Home from "./components/Home";
import BookingPage from "./components/BookingPage";

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
