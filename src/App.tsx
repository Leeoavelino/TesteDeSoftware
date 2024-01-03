
import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {

  const [message, setMessage] = useState('Um texto qualquer para aprendizado.')


  return (
    <div className="App">

      <h1>
        Ola Mundo!
      </h1>

      <p>
        {message}
      </p>

     <Button disabled={false} onCLick={() => setMessage('Nova Mensagem')} >Mudar Mensagem</Button>
      
    </div>
  );
}

export default App;
