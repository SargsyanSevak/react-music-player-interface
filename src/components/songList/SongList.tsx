import { useContext, useState } from "react";
import SongRow from "../songRow/SongRow";
import { AudioContext } from "../../context/Context";
import "./songList.css";
import { TrackProps } from "../../types/interfaces";

const SongList = () => {
  const { tracks } = useContext(AudioContext);
  const itemsPerRow = 20;
  const [next, setNext] = useState<number>(itemsPerRow);
  const { searchValue } = useContext(AudioContext);
  const handleMoreTracks = () => {
    setNext(next + 10);
  };

  return (
    <div className="song-list">
      <div className="song-list-header">
        <div className="play-btn"></div>
        <div className="song-name">Song Name</div>
        <div className="artist-name">Artist Name</div>
        <div className="track">Track</div>
        <div className="btn-group"> </div>
      </div>
      {tracks
        .filter((obj: TrackProps) => {
          return obj.songName
            .toLowerCase()
            .includes(searchValue.trim().toLowerCase());
        })
        .map((track: TrackProps, i: number) => {
          return <SongRow key={i} {...track} />;
        })}

      {next < tracks?.length && (
        <div style={{ marginTop: "40px" }}>
          <button
            onClick={handleMoreTracks}
            className="transparent-button load-more-btn"
            style={{
              border: "1px solid gray ",
              borderRadius: "8px",
              padding: "10px 20px",
              margin: "auto",
            }}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default SongList;
