import EditTemp from "./EditTemp";
import ViewTemp from "./ViewTemp";
import React, { useState, useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const IdealGasCalculationsTemp = () => {
  const { ideal_temp, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "IDEAL_TEMP",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div className="">
      <div>
        {isEditing ? (
          <EditTemp handleSaveClick={handleSaveClick} ideal_temp={ideal_temp} />
        ) : (
          <ViewTemp handleEditClick={handleEditClick} ideal_temp={ideal_temp} />
        )}
      </div>
    </div>
  );
};

export default IdealGasCalculationsTemp;
