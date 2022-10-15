import axios from "axios";

export default axios.create({
  baseURL:
    "https://avi-restaurant-reviews-backend.herokuapp.com/api/v1/restaurants",
});
