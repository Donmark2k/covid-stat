import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Missions from './components/mission';
import Rockets from './components/rocket';
import Profile from './components/profile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
