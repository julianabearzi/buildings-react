import { useState } from 'react';

const AddBuilding = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [type, setType] = useState('');
  const [phone, setPhone] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ name, address, type, phone });

    setName('');
    setAddress('');
    setType('');
    setPhone('');
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Name</label>
        <input
          type='text'
          placeholder='Add name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className='form-control'>
        <label>Address</label>
        <input
          type='text'
          placeholder='Add address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div className='form-control'>
        <label>Type</label>
        <input
          type='text'
          placeholder='Add type'
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
      </div>
      <div className='form-control'>
        <label>Phone</label>
        <input
          type='text'
          placeholder='Add phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <input type='submit' value='Save' className='btn-form' />
    </form>
  );
};

export default AddBuilding;
