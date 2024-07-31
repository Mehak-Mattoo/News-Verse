import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import News from "./components/News";
import SearchResults from "./components/SearchResults";
import "./index.css";
import Health from "./components/NewsTopics/Health";
import Science from "./components/NewsTopics/Science";
import Tech from "./components/NewsTopics/Tech";
import Entertainment from "./components/NewsTopics/Entertainment";
import Business from "./components/NewsTopics/Business";
import World from "./components/NewsTopics/World";
import National from "./components/NewsTopics/National";
import Sports from "./components/NewsTopics/Sports";

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <LoadingBar color="#FF6464" height={3} progress={progress} />
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

      {/* <Routes path="/health" element={<Health />} />
          <Routes path="/world" element={<World />} />

          <Routes path="/technology" element={<Tech />} />
          <Routes path="/science" element={<Science />} />
          <Routes path="/national" element={<National />} />
          <Routes path="/business" element={<Business />} />
          <Routes path="/entertainment" element={<Entertaiment />} />
        </Routes>
      </Router>

    <Router>
        <LoadingBar color="#FF6464" height={3} progress={progress} />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/news" element={<Home />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="/health" element={<Health />} />
          <Route path="/world" element={<World />} />
          <Route path="/technology" element={<Tech />} />
          <Route path="/science" element={<Science />} />
          <Route path="/national" element={<National />} />
          <Route path="/business" element={<Business />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/sports" element={<Sports />} />
        </Routes> 
      </Router> */}
    </>
  );
}

export default App;
