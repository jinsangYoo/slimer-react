import React from 'react';
import CustomHeader from './shared/CustomHeader';

const WebAppTitle = () => {
  return (
    <div>
      <h2 style={{color: '#9400d3', fontSize: '32'}}>
        I'm a React app component.
      </h2>
    </div>
  );
};

const App = () => {
  return (
    <>
      <CustomHeader />
      <WebAppTitle />
    </>
  );
};

export default App;
