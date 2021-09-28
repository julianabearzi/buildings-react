import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import BuildingsData from './mocks/buildings.json';
import Buildings from './components/Buildings';
import AddBuilding from './components/AddBuilding';
import UpdateBuilding from './components/UpdateBuilding';

function App() {
  const [buildings, setBuildings] = useState([]);
  const [update, setUpdate] = useState(false);
  const [currentBuilding, setCurrentBuilding] = useState({
    id: null,
    name: '',
    address: '',
    type: '',
    phone: '',
  });

  useEffect(() => {
    const getBuildings = () => {
      setBuildings(BuildingsData);
    };

    getBuildings();
  }, []);

  const addBuilding = (building) => {
    buildings.length > 0
      ? (building.id = buildings[buildings.length - 1].id + 1)
      : (building.id = 1);
    setBuildings([...buildings, building]);
  };

  const editItem = (building) => {
    setUpdate(true);
    setCurrentBuilding({
      id: building.id,
      name: building.name,
      address: building.address,
      type: building.type,
      phone: building.phone,
    });
  };

  const updateBuilding = (id, updatedBuilding) => {
    setUpdate(false);
    setBuildings(
      buildings.map((building) =>
        building.id === id ? updatedBuilding : building
      )
    );
  };

  const deleteBuilding = (id) => {
    setUpdate(false);
    setBuildings(buildings.filter((building) => building.id !== id));
  };

  return (
    <div className='App'>
      <Header />
      {update ? (
        <div>
          <h2 className='title-building'>Update Building</h2>
          <UpdateBuilding
            currentBuilding={currentBuilding}
            updateBuilding={updateBuilding}
          />
        </div>
      ) : (
        <div>
          <h2 className='title-building'>Add Building</h2>
          <AddBuilding onAdd={addBuilding} />
        </div>
      )}
      <Buildings
        buildings={buildings}
        onDelete={deleteBuilding}
        editItem={editItem}
      />
    </div>
  );
}

export default App;
