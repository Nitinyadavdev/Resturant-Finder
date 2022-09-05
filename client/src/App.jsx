import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Resturantdetailpage from "./routes/ResturantDetailpage";
import Updatepage from "./routes/UpdatePage";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/resturants/:id/update" element={<Updatepage />} />
          <Route
            exact
            path="/resturants/:id"
            element={<Resturantdetailpage />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
