import EditTime from "./EditTime";
import ViewTime from "./ViewTime";
import React, { useState, useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const FaradayCalculationsTime = () => {
  const { time, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "TIME",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div className="">
      <div>
        {isEditing ? (
          <EditTime handleSaveClick={handleSaveClick} time={time} />
        ) : (
          <ViewTime handleEditClick={handleEditClick} time={time} />
        )}
      </div>
    </div>
  );
};

export default FaradayCalculationsTime;
