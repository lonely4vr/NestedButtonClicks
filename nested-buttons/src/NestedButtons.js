import React from 'react';

const NestedButtons = () => {
  const handleOuterClick = () => {
    alert('Outer button clicked!');
  };

  const handleInnerClick = (e) => {
    e.stopPropagation(); // Stop propagation of the event
    alert('Inner button clicked!');
  };

  return (
    <div>
      <button onClick={handleOuterClick}>
        Outer Button
        <button onClick={handleInnerClick} style={{ margin: '10px' }}>
          Inner Button
        </button>
      </button>
    </div>
  );
};

export default NestedButtons;
