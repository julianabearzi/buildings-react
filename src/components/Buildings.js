import Item from './Item';

const Buildings = ({ buildings, onDelete, editItem }) => {
  return (
    <>
      <h2 className='title-building'>Buildings</h2>
      <div className='container'>
        <div className='container-building'>
          <h3>ID</h3>
          <h3>Name</h3>
          <h3>Address</h3>
          <h3>Type</h3>
          <h3>Phone</h3>
        </div>
        {buildings.map((building) => (
          <Item
            key={building.id}
            building={building}
            onDelete={onDelete}
            editItem={editItem}
          />
        ))}
      </div>
    </>
  );
};

export default Buildings;
