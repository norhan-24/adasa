
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div dir="rtl">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/blog" element={<Blog />} />

          <Route
            path="/blog/:slug"
            element={<BlogDetails />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
