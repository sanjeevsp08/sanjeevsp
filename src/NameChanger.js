import React from 'react';
import { useState } from 'react';   

function NameChanger() {
  const [name, setName] = useState('python');
  const changeName = () => setName('JavaScript')

  return (
    <div>
      <h1>NAME:{name}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}
export default NameChanger;