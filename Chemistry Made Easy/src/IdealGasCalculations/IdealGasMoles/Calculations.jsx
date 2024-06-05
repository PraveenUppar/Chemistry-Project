import EditMoles from "./EditMoles";
import ViewMoles from "./ViewMoles";
import React, { useState, useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const IdealGasCalculationsMoles = () => {
  const { ideal_moles, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "IDEAL_MOLES",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div className="">
      <div>
        {isEditing ? (
          <EditMoles
            handleSaveClick={handleSaveClick}
            ideal_moles={ideal_moles}
          />
        ) : (
          <ViewMoles
            handleEditClick={handleEditClick}
            ideal_moles={ideal_moles}
          />
        )}
      </div>
    </div>
  );
};

export default IdealGasCalculationsMoles;
