import './Buildings.css';
import { FaTimes, FaEdit } from 'react-icons/fa';

const Item = ({ building, onDelete, editItem }) => {
  return (
    <div className='container-item'>
      <div className='item'>{building.id}</div>
      <div className='item'>{building.name}</div>
      <div className='item'>{building.address}</div>
      <div className='item'>{building.type}</div>
      <div className='item'>{building.phone}</div>
      <FaTimes
        className='btn'
        style={{ cursor: 'pointer' }}
        onClick={() => onDelete(building.id)}
      />
      <FaEdit
        className='btn'
        style={{ cursor: 'pointer' }}
        onClick={() => editItem(building)}
      />
    </div>
  );
};

export default Item;
