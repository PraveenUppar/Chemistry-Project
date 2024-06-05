import EditCurrent from "./EditCurrent";
import ViewCurrent from "./ViewCurrent";
import React, { useState, useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const FaradayCalculationsCurrent = () => {
  const { current, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "CURRENT",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div>
      <div>
        {isEditing ? (
          <EditCurrent handleSaveClick={handleSaveClick} current={current} />
        ) : (
          <ViewCurrent handleEditClick={handleEditClick} current={current} />
        )}
      </div>
    </div>
  );
};

export default FaradayCalculationsCurrent;
