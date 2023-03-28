import ReactDom from "react-dom/client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Home, Browse, Details, Streams, Profile } from "./Pages";
import { Container_bootstrap } from "./components";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Container_bootstrap>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/details" element={<Details />} />
          <Route path="/streams" element={<Streams />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </Container_bootstrap>
  </React.StrictMode>
);
