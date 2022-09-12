import React from "react";
import { useContext } from "react";
import { useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const AddRestaurant = () => {
  const { addRestaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/", {
        name,
        location,
        price_range: priceRange,
      });

      addRestaurants(response.data.data.restaurant);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row  d-flex  ">
          <div className="col  p-3 ">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control "
              placeholder="name"
            />
          </div>
          <div className="col p-3 ">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              className="form-control "
              placeholder="location"
            />
          </div>
          <div className="col p-3 ">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="custom-select  mr-sm-2 w-100 h-100 form-control rounded "
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button
            onClick={handelSubmit}
            type="form"
            className="btn btn-primary  my-3 ml-3"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
