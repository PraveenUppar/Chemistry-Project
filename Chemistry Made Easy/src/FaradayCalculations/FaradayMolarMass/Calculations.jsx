import EditMolarMass from "./EditMolarMass";
import ViewMolarMass from "./ViewMolarMass";
import React, { useState, useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const FaradayCalculationsMolarMass = () => {
  const { molar_mass, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "MOLAR_MASS",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div className="">
      <div>
        {isEditing ? (
          <EditMolarMass
            handleSaveClick={handleSaveClick}
            molar_mass={molar_mass}
          />
        ) : (
          <ViewMolarMass
            handleEditClick={handleEditClick}
            molar_mass={molar_mass}
          />
        )}
      </div>
    </div>
  );
};

export default FaradayCalculationsMolarMass;
