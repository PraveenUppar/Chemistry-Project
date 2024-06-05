import EditMass from "./EditMass";
import ViewMass from "./ViewMass";
import React, { useState, useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const HeatCapacityCalculationsMass = () => {
  const { heat_mass, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "HEAT_MASS",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div>
      <div>
        {isEditing ? (
          <EditMass handleSaveClick={handleSaveClick} heat_mass={heat_mass} />
        ) : (
          <ViewMass handleEditClick={handleEditClick} heat_mass={heat_mass} />
        )}
      </div>
    </div>
  );
};

export default HeatCapacityCalculationsMass;
