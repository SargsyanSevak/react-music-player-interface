import Button from "../UI/Button";

//A button to initiate playing all songs (simulated).

const PlayAllButton = () => {
  return (
    <Button
      txt="Play All"
      buttonType="play-all"
      onClick={() => console.log("Play All button clicked")}
    />
  );
};

export default PlayAllButton;
