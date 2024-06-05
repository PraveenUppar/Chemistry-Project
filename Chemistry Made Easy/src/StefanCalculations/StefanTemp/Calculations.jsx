import EditTemp from "./EditTemp";
import ViewTemp from "./ViewTemp";
import React, { useState, useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const StefanCalculationsTemp = () => {
  const { stefan_temp, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "STEFAN_TEMP",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div className="">
      <div>
        {isEditing ? (
          <EditTemp
            handleSaveClick={handleSaveClick}
            stefan_temp={stefan_temp}
          />
        ) : (
          <ViewTemp
            handleEditClick={handleEditClick}
            stefan_temp={stefan_temp}
          />
        )}
      </div>
    </div>
  );
};

export default StefanCalculationsTemp;
