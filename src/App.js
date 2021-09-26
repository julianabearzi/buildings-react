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

  return (
    <div className='App'>
      <Header />
      <Buildings buildings={buildings} />
    </div>
  );
}

export default App;
