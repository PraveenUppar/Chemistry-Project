import EditTemp from "./EditTemp";
import ViewTemp from "./ViewTemp";
import React, { useState, useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const HeatCapacityCalculationsTemp = () => {
  const { heat_temp, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "HEAT_TEMP",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div className="">
      <div>
        {isEditing ? (
          <EditTemp handleSaveClick={handleSaveClick} heat_temp={heat_temp} />
        ) : (
          <ViewTemp handleEditClick={handleEditClick} heat_temp={heat_temp} />
        )}
      </div>
    </div>
  );
};

export default HeatCapacityCalculationsTemp;
