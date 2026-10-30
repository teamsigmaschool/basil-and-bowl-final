import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    // BrowserRouter enables client-side routing for the app.
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Each Route connects a URL path to a page component. */}
        <Route element={<Home />} path="/" />
        <Route element={<Menu />} path="/menu" />
        <Route element={<About />} path="/about" />

        {/* The wildcard route displays NotFound for an unknown URL. */}
        <Route element={<NotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}
