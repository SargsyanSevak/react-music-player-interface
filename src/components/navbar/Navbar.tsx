import React, { useContext, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import PlayAllButton from "../playAllButton/PlayAllButton";
import AddAllButton from "../addAllButtons/AddAllButton";
import MusicUploadForm from "../musicUploadForm/MusicUploadForm";
import TrackNumber from "../trackNumber/TrackNumber";
import "./navbar.css";
import { AudioContext } from "../../context/Context";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { searchValue, setSearchValue } = useContext(AudioContext);
  const toggleModal = () => setOpenModal((prev) => !prev);
  return (
    <header className="header">
      <nav>
        <button
          className="menu transparent-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
        </button>
        <div className={menuOpen ? "open buttons-group" : "buttons-group"}>
          <div className="button-item">
            <PlayAllButton />
          </div>
          <div className="button-item">
            <AddAllButton />
          </div>
          <div className="button-item">
            <MusicUploadForm
              isOpen={openModal}
              toggleModal={() => toggleModal()}
            />
          </div>
          <div className="track-number">
            <TrackNumber />
          </div>
        </div>
        <div className="search_box">
          <input
            type="search"
            placeholder="Filter"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
          <span className="search-icon">
            <IoSearch />
          </span>
        </div>
      </nav>
    </header>
  );
};
