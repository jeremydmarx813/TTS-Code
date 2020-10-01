import React from 'react';
import Greeting from './Greeting';
import Name  from './Name';

const App = () => {

  return (
    <div>
      <Greeting greet={'Hello World'}/>
      <Name text="Jeremy Marx" />
      <Name text="Emily King" />
      <Name text="Ari Lennox" />
    </div>
  );
}

export default App;
