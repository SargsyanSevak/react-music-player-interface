import { IoMdArrowDropdown } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { HiArrowsUpDown } from "react-icons/hi2";
import "../../App.css";
interface ButtonProps {
  txt: string;
  onClick: () => void;
  buttonType: "play-all" | "add-all" | "track-number";
}
const Button = ({ txt, buttonType, onClick }: ButtonProps) => {
  switch (buttonType) {
    case "play-all":
      return (
        <button className="btn" type="button" onClick={onClick}>
          <FaPlay className="btn_icon" />
          <p>{txt}</p>{" "}
          <span className="btn_arrow_up">{<IoMdArrowDropdown />}</span>
        </button>
      );
    case "add-all":
      return (
        <button className="btn" type="button" onClick={onClick}>
          <IoMdAdd style={{ fontSize: "26px" }} />
          <p>{txt}</p>{" "}
          <span className="btn_arrow_up">{<IoMdArrowDropdown />}</span>
        </button>
      );
    case "track-number":
      return (
        <button className="btn" type="button" onClick={onClick}>
          <HiArrowsUpDown style={{ fontSize: "20px" }} />
          <p>{txt}</p>{" "}
          <span className="btn_arrow_up">{<IoMdArrowDropdown />}</span>
        </button>
      );
  }
};

export default Button;
