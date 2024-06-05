import EditEntropy from "./EditEntropy";
import ViewEntropy from "./ViewEntropy";
import React, { useState, useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const GibbsCalculationsEntropy = () => {
  const { gibbs_entropy, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "GIBBS_ENTROPY",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div className="">
      <div>
        {isEditing ? (
          <EditEntropy
            handleSaveClick={handleSaveClick}
            gibbs_entropy={gibbs_entropy}
          />
        ) : (
          <ViewEntropy
            handleEditClick={handleEditClick}
            gibbs_entropy={gibbs_entropy}
          />
        )}
      </div>
    </div>
  );
};

export default GibbsCalculationsEntropy;
