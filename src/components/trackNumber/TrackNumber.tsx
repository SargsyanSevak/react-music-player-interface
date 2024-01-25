import React from "react";
import Button from "../UI/Button";

const TrackNumber = () => {
  return (
    <Button
      txt="Track Number"
      buttonType="track-number"
      onClick={() => console.log("Track Number Button clicked")}
    />
  );
};

export default TrackNumber;
