import EditPressure from "./EditPressure";
import ViewPressure from "./ViewPressure";
import React, { useState, useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const IdealGasCalculationsPressure = () => {
  const { ideal_pressure, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "IDEAL_PRESSURE",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div>
      <div>
        {isEditing ? (
          <EditPressure
            handleSaveClick={handleSaveClick}
            ideal_pressure={ideal_pressure}
          />
        ) : (
          <ViewPressure
            handleEditClick={handleEditClick}
            ideal_pressure={ideal_pressure}
          />
        )}
      </div>
    </div>
  );
};

export default IdealGasCalculationsPressure;
