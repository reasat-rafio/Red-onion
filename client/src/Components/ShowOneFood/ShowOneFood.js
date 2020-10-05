import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { FindOneFood } from "../redux/Actions/foodAction";
import ShowOneFoodDetails from "./ShowOneFoodDetails";

const ShowOneFood = () => {
  const dispatch = useDispatch();

  // Getting the id from url
  const { id } = useParams();

  // Calling the api from redux
  useEffect(() => {
    dispatch(FindOneFood(id));
  }, []);

  // Getting the Data from store store
  const selectedItem = useSelector((store) => store.selectedFootStore);
  const { findOneFood, loading } = selectedItem;

  return (
    <div className="ShowOneFood">
      {loading ? <Loading /> : <ShowOneFoodDetails findOneFood={findOneFood} />}
    </div>
  );
};

export default ShowOneFood;
