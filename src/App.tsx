import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EdanPage from "./pages/edan";
import RedraftPage from "./pages/RedraftPage";

function App() {
  return (
    <>
      <div className="w-screen">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/redraft" element={<RedraftPage />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
            <Route path="/edan" element={<EdanPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
