import React from 'react';
import Players from './players';

function App() {
  return (
    <div className="container">
      <div className='bg-primary rounded text-white'>
        <h1 style={{fontSize: 50}}>Best Players</h1>
      </div>
      
         <Players />
        
      
      
    </div>
    
  );
}

export default App;
