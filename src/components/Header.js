import './Header.css';
import { FaPlusSquare } from 'react-icons/fa';

const Header = ({ onAdd }) => {
  return (
    <div className='header-container'>
      <div className='header'>
        <span> - </span>
        <h1 className='title'>CaldAR</h1>
        <span> - </span>
      </div>
      <div className='title-buildings'>
        <h1 className='title-building'>Buildings</h1>
        <FaPlusSquare className='btn-add' onClick={onAdd} />
      </div>
    </div>
  );
};

export default Header;
