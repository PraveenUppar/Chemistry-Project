import EditAtomicNo from "./EditAtomicNo";
import ViewAtomicNo from "./ViewAtomicNo";
import React, { useState, useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const BohrCalculationsAtomicNo = () => {
  const { atomic_no, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "ATOMIC_NO",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div className="">
      <div>
        {isEditing ? (
          <EditAtomicNo
            handleSaveClick={handleSaveClick}
            atomic_no={atomic_no}
          />
        ) : (
          <ViewAtomicNo
            handleEditClick={handleEditClick}
            atomic_no={atomic_no}
          />
        )}
      </div>
    </div>
  );
};

export default BohrCalculationsAtomicNo;
