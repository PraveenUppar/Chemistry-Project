import EditHeatCapacity from "./EditHeatCapacity";
import ViewHeatCapacity from "./ViewHeatCapacity";
import React, { useState, useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const HeatCapacityCalculationsHeatCapacity = () => {
  const { heat_capacity, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "HEATER_CAPACITY",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div className="">
      <div>
        {isEditing ? (
          <EditHeatCapacity
            handleSaveClick={handleSaveClick}
            heat_capacity={heat_capacity}
          />
        ) : (
          <ViewHeatCapacity
            handleEditClick={handleEditClick}
            heat_capacity={heat_capacity}
          />
        )}
      </div>
    </div>
  );
};

export default HeatCapacityCalculationsHeatCapacity;
