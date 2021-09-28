import { useState, useEffect } from 'react';

const UpdateBuilding = (props) => {
  const [building, setBuilding] = useState(props.currentBuilding);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setBuilding({ ...building, [name]: value });
  };

  useEffect(() => {
    setBuilding(props.currentBuilding);
  }, [props]);

  return (
    <form
      className='form'
      onSubmit={(e) => {
        e.preventDefault();

        props.updateBuilding(building.id, building);
      }}
    >
      <div className='form-control'>
        <label>Name</label>
        <input
          type='text'
          name='name'
          value={building.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className='form-control'>
        <label>Address</label>
        <input
          type='text'
          name='address'
          value={building.address}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className='form-control'>
        <label>Type</label>
        <input
          type='text'
          name='type'
          value={building.type}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className='form-control'>
        <label>Phone</label>
        <input
          type='text'
          name='phone'
          value={building.phone}
          onChange={handleInputChange}
          required
        />
      </div>

      <input type='submit' value='Update' className='btn-form' />
    </form>
  );
};

export default UpdateBuilding;
