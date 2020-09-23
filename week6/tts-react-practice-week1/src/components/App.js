import React, {useState, useEffect} from 'react';
import Greeting from './Greeting';

const App = () => {
  const [testPhrase, setTestPhrase] = useState('')
  useEffect(() => {
    console.log('mounted')
  })
  return (
    <div>
      <Greeting greet={'Hello World'}/>
      <h1>{testPhrase}</h1>
      <input onChange={(e) => setTestPhrase(e.target.value)}/>
      
    </div>
  );
}

export default App;
