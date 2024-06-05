import EditMoles from "./EditMoles";
import ViewMoles from "./ViewMoles";
import React, { useState, useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const BohrCalculationsMoles = () => {
  const { bohr_moles, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "BOHR_MOLES",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div>
      <div>
        {isEditing ? (
          <EditMoles
            handleSaveClick={handleSaveClick}
            bohr_moles={bohr_moles}
          />
        ) : (
          <ViewMoles
            handleEditClick={handleEditClick}
            bohr_moles={bohr_moles}
          />
        )}
      </div>
    </div>
  );
};

export default BohrCalculationsMoles;
