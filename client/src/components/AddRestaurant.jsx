import React from "react";

const AddRestaurant = () => {
  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row  d-flex  ">
          <div className="col  p-3 ">
            <input type="text" className="form-control " placeholder="name" />
          </div>
          <div className="col p-3 ">
            <input
              type="text"
              className="form-control "
              placeholder="location"
            />
          </div>
          <div className="col p-3 ">
            <select className="custom-select  mr-sm-2 w-100 h-100 form-control rounded ">
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button class="btn btn-primary  my-3 ml-3">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
