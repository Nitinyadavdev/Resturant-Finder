import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";
import Home from "./routes/Home";
import Restaurantdetailpage from "./routes/RestaurantDetailpage";
import Updatepage from "./routes/UpdatePage";

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/restaurants/:id/update"
              element={<Updatepage />}
            />
            <Route
              exact
              path="/restaurants/:id"
              element={<Restaurantdetailpage />}
            />
          </Routes>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
};

export default App;
