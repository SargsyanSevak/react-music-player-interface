import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import tracksList from "../assets/tracksList";
import { TrackProps } from "../types/interfaces";

interface AudioProviderProps {
  children: ReactNode;
}

const defaultTrack: TrackProps = tracksList[0];

const audio: HTMLAudioElement = new Audio(defaultTrack.src);

interface AudioContextProps {
  tracks: TrackProps[];
  setTracks: Dispatch<SetStateAction<TrackProps[]>>;
  audio: HTMLAudioElement;
  currentTrack: TrackProps;
  isPlaying: boolean;
  handleToggleAudio: (track: TrackProps) => void;
  searchValue: string;
  setSearchValue: (e: any) => void;
}

export const AudioContext = createContext<AudioContextProps>({
  tracks: [],
  setTracks: () => {},
  audio,
  currentTrack: defaultTrack,
  isPlaying: false,
  handleToggleAudio: () => {},
  searchValue: "",
  setSearchValue: () => {},
});

const AudioProvider = ({ children }: AudioProviderProps) => {
  const [tracks, setTracks] = useState<TrackProps[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentTrack, setCurrentTrack] = useState<TrackProps>(defaultTrack);
  const [isPlaying, setPlaying] = useState<boolean>(false);

  const handleToggleAudio = (track: TrackProps) => {
    if (currentTrack.id !== track.id) {
      setCurrentTrack(track);
      setPlaying(true);

      audio.src = track.src;
      audio.currentTime = 0;
      audio.play();

      return;
    }

    if (isPlaying) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  useEffect(() => {
    // Combine tracksList and existing tracks when the component mounts
    setTracks((prevTracks) => [...tracksList, ...prevTracks]);
  }, []);

  const value: AudioContextProps = {
    tracks,
    setTracks,
    audio,
    currentTrack,
    isPlaying,
    handleToggleAudio,
    searchValue,
    setSearchValue,
  };

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
};

export default AudioProvider;
