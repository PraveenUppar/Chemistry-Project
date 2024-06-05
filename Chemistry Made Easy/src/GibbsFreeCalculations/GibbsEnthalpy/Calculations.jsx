import EditEnthaply from "./EditEnthaply";
import ViewEnthaply from "./ViewEnthaply";
import React, { useState, useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const GibbsCalculationsEnthaply = () => {
  const { gibbs_enthalpy, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "GIBBS_ENTHALPY",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div>
      <div>
        {isEditing ? (
          <EditEnthaply
            handleSaveClick={handleSaveClick}
            gibbs_enthalpy={gibbs_enthalpy}
          />
        ) : (
          <ViewEnthaply
            handleEditClick={handleEditClick}
            gibbs_enthalpy={gibbs_enthalpy}
          />
        )}
      </div>
    </div>
  );
};

export default GibbsCalculationsEnthaply;
