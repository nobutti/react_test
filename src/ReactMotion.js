import React, { useState } from 'react';
import { Motion, spring } from 'react-motion';

const ReactMotion = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div style={{ margin: '50px' }}>
      <button onClick={toggle}>
        {isToggled ? 'Move Left' : 'Move Right'}
      </button>
      
      <Motion style={{ x: spring(isToggled ? 200 : 0) }}>
        {({ x }) => (
          <div
            style={{
              transform: `translateX(${x}px)`,
              width: '100px',
              height: '100px',
              backgroundColor: 'skyblue',
              marginTop: '20px',
            }}
          />
        )}
      </Motion>
    </div>
  );
};

export default ReactMotion;
