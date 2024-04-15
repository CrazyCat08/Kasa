import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AccommodationSheet from "./pages/AccommodationSheet";
import About from "./pages/About";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Kasa" element={<Home />} />
        <Route
          path="/Kasa/AccommodationSheet/:id"
          element={<AccommodationSheet />}
        />
        <Route path="Kasa/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
