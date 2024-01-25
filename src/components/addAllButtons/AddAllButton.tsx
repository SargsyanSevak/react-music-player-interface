import React from "react";
import Button from "../UI/Button";

//A button to add all songs to a queue (simulated).
const AddAllButton = () => {
  return (
    <Button
      txt="Add All"
      buttonType="add-all"
      onClick={() => console.log("Add All button clicked")}
    />
  );
};

export default AddAllButton;
