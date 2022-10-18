import './App.css';
import {useEffect} from 'react'
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';



function App() {

  const {onToggleButton} = useTelegram();

  const tg = window.Telegram.WebApp

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className='App'>
      <Header></Header>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
