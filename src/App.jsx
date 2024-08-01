import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import News from "./components/News";
import SearchResults from "./components/SearchResults";
import "./index.css";

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <LoadingBar color="#FF6464" height={4} progress={progress} />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/news" element={<Home />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                country="in"
                category="BUSINESS"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                country="in"
                category="ENTERTAINMENT"
              />
            }
          />

          <Route
            exact
            path="/general"
            element={
              <News setProgress={setProgress} country="in" category="WORLD" />
            }
          />

          <Route
            exact
            path="/health"
            element={
              <News setProgress={setProgress} country="in" category="HEALTH" />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News setProgress={setProgress} country="in" category="SCIENCE" />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News setProgress={setProgress} country="in" category="SPORTS" />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                country="in"
                category="TECHNOLOGY"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
