import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BookingPage from "./components/BookingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/booking" element={<BookingPage />}></Route>
        {/* <Route path="/booking" element={<BookingPage />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
