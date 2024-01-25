import { Navbar } from "./components/navbar/Navbar";
import SongList from "./components/songList/SongList";

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Navbar />
        <SongList />
      </div>
    </div>
  );
};

export default App;
