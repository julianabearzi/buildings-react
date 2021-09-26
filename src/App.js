import { useState, useEffect } from 'react';
import Header from './components/Header';
import Mock from './mocks/buildings.json';
import Buildings from './components/Buildings';

function App() {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    const getBuildings = () => {
      setBuildings(Mock);
    };

    getBuildings();
  }, []);

  const deleteBuilding = (id) => {
    setBuildings(buildings.filter((building) => building.id !== id));
  };

  return (
    <div className='App'>
      <Header />
      <Buildings buildings={buildings} onDelete={deleteBuilding} />
    </div>
  );
}

export default App;
