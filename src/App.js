import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Mock from './mocks/buildings.json';
import Buildings from './components/Buildings';
import AddBuilding from './components/AddBuilding';

function App() {
  const [showAddBuilding, setShowAddBuilding] = useState(false);
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    const getBuildings = () => {
      setBuildings(Mock);
    };

    getBuildings();
  }, []);

  const addBuilding = (building) => {
    building.id = buildings[buildings.length - 1].id + 1;
    setBuildings([...buildings, building]);
  };

  const deleteBuilding = (id) => {
    setBuildings(buildings.filter((building) => building.id !== id));
  };

  return (
    <div className='App'>
      <Header
        onAdd={() => setShowAddBuilding(!showAddBuilding)}
        showAdd={showAddBuilding}
      />
      {showAddBuilding && <AddBuilding onAdd={addBuilding} />}
      <Buildings buildings={buildings} onDelete={deleteBuilding} />
    </div>
  );
}

export default App;
