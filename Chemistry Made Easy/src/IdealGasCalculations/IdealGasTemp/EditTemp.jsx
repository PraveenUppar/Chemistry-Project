import React, { useState } from "react";

const Edit = (props) => {
  const [value, setValue] = useState(props.ideal_temp);
  return (
    <div>
      <input
        className="border border-black text-xl mt-6 rounded-md p-1"
        required="required"
        type="number"
        id="name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <br></br>
      <button
        className="border border-blue-700 text-md px-4  p-1 rounded-md mt-2"
        type="button"
        onClick={() => props.handleSaveClick(value)}
      >
        Save
      </button>
    </div>
  );
};

export default Edit;
