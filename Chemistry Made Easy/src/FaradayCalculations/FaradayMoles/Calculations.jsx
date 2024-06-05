import EditMoles from "./EditMoles";
import ViewMoles from "./ViewMoles";
import React, { useState, useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const FaradayCalculationsMoles = () => {
  const { moles, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "MOLES",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div className="">
      <div>
        {isEditing ? (
          <EditMoles handleSaveClick={handleSaveClick} moles={moles} />
        ) : (
          <ViewMoles handleEditClick={handleEditClick} moles={moles} />
        )}
      </div>
    </div>
  );
};

export default FaradayCalculationsMoles;
