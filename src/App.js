import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Cities from './components/cities';
import CityDetails from './components/cityDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Cities />} />
        <Route path="/:cityID" element={<CityDetails />} />
      </Routes>
    </div>
  );
}

export default App;
