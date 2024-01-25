import { render, screen, fireEvent } from "@testing-library/react";
import BookingPage from "./components/BookingPage";

test("Booking Page renders with 'Reservation Table' header", () => {
  render(<BookingPage />);
  const headerElement = screen.getByText("Reservation Table");
  expect(headerElement).toBeInTheDocument();
});

// Test for handling date change in Booking Page
test("Booking Page handles date change correctly", () => {
  render(<BookingPage />);
  const dateInput = screen.getByLabelText(/Choose Date/i);
  fireEvent.change(dateInput, { target: { value: "2024-01-24" } });
  expect(dateInput.value).toBe("2024-01-24");
});

// Test for handling time change in Booking Page
test("Booking Page handles time change correctly", () => {
  render(<BookingPage />);
  const timeSelect = screen.getByLabelText(/Choose Time/i);
  fireEvent.change(timeSelect, { target: { value: "18:00" } });
  expect(timeSelect.value).toBe("18:00");
});

// Test for handling guests change in Booking Page
test("Booking Page handles guests change correctly", () => {
  render(<BookingPage />);
  const guestsInput = screen.getByLabelText(/Number of guest/i);
  fireEvent.change(guestsInput, { target: { value: "3" } });
  expect(guestsInput.value).toBe("3");
});

// Test for handling occasion change in Booking Page
test("Booking Page handles occasion change correctly", () => {
  render(<BookingPage />);
  const occasionSelect = screen.getByLabelText(/Occasion/i);
  fireEvent.change(occasionSelect, { target: { value: "Anniversary" } });
  expect(occasionSelect.value).toBe("Anniversary");
});
