import EditTemp from "./EditTemp";
import ViewTemp from "./ViewTemp";
import React, { useState, useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const GibbsCalculationsTemp = () => {
  const { gibbs_temp, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "GIBBS_TEMP",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div className="">
      <div>
        {isEditing ? (
          <EditTemp handleSaveClick={handleSaveClick} gibbs_temp={gibbs_temp} />
        ) : (
          <ViewTemp handleEditClick={handleEditClick} gibbs_temp={gibbs_temp} />
        )}
      </div>
    </div>
  );
};

export default GibbsCalculationsTemp;
