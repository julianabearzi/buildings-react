import Item from './Item';

const Buildings = ({ buildings, onDelete }) => {
  return (
    <>
      <h1 className='title-building'>Buildings</h1>
      <div className='container'>
        <div className='container-building'>
          <h3>ID</h3>
          <h3>Name</h3>
          <h3>Address</h3>
          <h3>Type</h3>
          <h3>Phone</h3>
        </div>
        {buildings.map((building) => (
          <Item key={building.id} building={building} onDelete={onDelete} />
        ))}
      </div>
    </>
  );
};

export default Buildings;
