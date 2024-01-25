import React, { useContext, useRef, useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import ProgressBar from "../progressBar/ProgressBar";
import { useDropzone } from "react-dropzone";
import { TrackProps } from "../../types/interfaces";
import { AudioContext } from "../../context/Context";
import "./uploadMusicForm.css";
import ToastNotification from "../toast/ToastNotification";

const MusicUploadForm = ({
  isOpen,
  toggleModal,
}: {
  isOpen: boolean;
  toggleModal: () => void;
}) => {
  const [uploading, setUploading] = useState(false);
  const { setTracks } = useContext(AudioContext);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[] | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<"success" | "warning" | "error">(
    "success"
  );
  const [toastMsg, setToastMsg] = useState<string>("");

  // upload new track from our computer
  const onDrop = async (acceptedFiles: File[]) => {
    // all selected files with their key and values
    const newMusicList: TrackProps[] = acceptedFiles.map((file) => ({
      id: Date.now().toString(),
      songName: file.name,
      artistName: "BlackBird",
      trackNumber: Date.now().toString(),
      src: URL.createObjectURL(file),
      preview: "image for preview",
    }));

    //for showing our uploading animation
    setUploading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Concatenate new tracks with existing tracks
      setTracks((prevTracks) => [...prevTracks, ...newMusicList]);
      setSelectedFiles(acceptedFiles);
      setShowToast(true);
      console.log("File upload completed");
      setToastType("success");
      setToastMsg("File upload completed");
      toggleModal();
    } catch (error) {
      setShowToast(true);
      setToastType("error");
      setToastMsg('Error uploading file. Please try again."');
    } finally {
      setUploading(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  //function for toogle toast notification
  const toggleToast = () => {
    setSelectedFiles(null);
    setShowToast((cur) => !cur);
  };

  return (
    <>
      <button onClick={toggleModal} className="upload-btn">
        <MdOutlineFileUpload style={{ fontSize: "24px" }} /> <p>Upload Music</p>
      </button>

      <div className={`upload-form-modal ${isOpen ? "show" : "hide"}`}>
        <div
          ref={modalRef}
          {...getRootProps()}
          className={`modal-content ${isDragActive ? "active" : ""}`}
        >
          <label htmlFor="file">Click to select files</label>
          <input {...getInputProps()} id="file" />
          <p></p>
          {uploading && <ProgressBar />}
          <div className="file-info">
            {selectedFiles?.map((el, i) => {
              return <p key={i}> ✅ Selected File: {el.name}</p>;
            })}
          </div>
          <button
            className="closeBtn transparent-button"
            onClick={(e) => {
              e.stopPropagation();
              toggleModal();
              setSelectedFiles(null);
            }}
          >
            <IoCloseSharp />
          </button>
        </div>
      </div>
      {showToast && (
        <ToastNotification
          type={toastType}
          message={toastMsg}
          showToast={showToast}
          toggleToast={toggleToast}
        />
      )}
    </>
  );
};

export default MusicUploadForm;
