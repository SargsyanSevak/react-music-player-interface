import React, { useContext, useRef, useState } from "react";
import { RxDragHandleDots1 } from "react-icons/rx";
import { FaCheck, FaHeart, FaPause, FaPlay, FaRegHeart } from "react-icons/fa";
import { IoArrowRedoSharp } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { AudioContext } from "../../context/Context";
import "./songRow.css";
import { TrackProps } from "../../types/interfaces";

function SongRow(track: TrackProps) {
  const [active, setActive] = useState<boolean>(false);
  const content = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<string>("0px");
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleAccordion = () => {
    setActive((cur) => !cur);
    setHeight(() => (active ? "0px" : `${content?.current?.scrollHeight}px`));
  };

  const { id, songName, artistName, trackNumber } = track;

  const { handleToggleAudio, currentTrack, isPlaying } =
    useContext(AudioContext);

  const isCurrentTrack = currentTrack?.id === id;

  return (
    <div className="accordion__section">
      <div onClick={toggleAccordion}>
        <div className="accordion__title">
          <div>
            <div className="song-list-row">
              <div className="play-btn-body">
                <RxDragHandleDots1 className="drag-icon" />
                <button
                  className="transparent-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggleAudio(track);
                  }}
                >
                  {isCurrentTrack && isPlaying ? <FaPause /> : <FaPlay />}
                </button>
              </div>
              <div className="song-name-body">{songName}</div>
              <div className="artist-name-body">{artistName}</div>
              <div className="track-body">{trackNumber}</div>
              <div className="btn-group-body">
                <button
                  className="transparent-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFavorite((cur) => !cur);
                  }}
                >
                  {isFavorite ? (
                    <FaHeart style={{ color: "red" }} />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>
                <button className="transparent-button">
                  <FaCheck />
                </button>
                <button className="transparent-button">
                  <IoArrowRedoSharp />
                </button>
                <button className="transparent-button">
                  {active ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div className="accordion-container">
          <div className="accordion-artist-name">Artist Name : Blackbird</div>
          <div className="accordion-track">Track : {id}</div>
          <div className="lyrics">
            <span>Lyrics :</span> Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Culpa dolores reprehenderit labore! Mollitia
            consequatur architecto alias beatae incidunt sequi facere id,
            nesciunt animi tenetur esse aperiam ipsam blanditiis quibusdam
            molestias repudiandae soluta excepturi error nulla eos eligendi!
            Laborum deserunt doloribus aliquam adipisci. Praesentium placeat
            soluta nobis? Omnis aperiam ea neque?
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongRow;
