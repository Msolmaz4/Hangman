
import data from './data.json'
import { useCallback, useEffect, useState } from 'react'
import HangmanDr from './components/HangmanDr'
import HangmanWort from './components/HangmanWort'
import Keyboard from './components/Keyboard'


const getWord = () => {
  return data[Math.floor(Math.random() * data.length)]
}


function App() {


  const [hang, setHang] = useState(getWord)
  console.log(hang, 'hang')
  const [guess, setGuess] = useState<string[]>([])
  // burada tahminin icerip icermedigine bajacagim 
  const inCorret = guess.filter((item) => !hang.includes(item))

  const verloren = inCorret.length >= 6
  const winner = hang.split('').every(item => guess.includes(item))

  const addGuess = useCallback((item: string) => {
    if (guess.includes(item) || verloren || winner) return;

    setGuess(currentGuess => [...currentGuess, item]);
  }, [guess, verloren, winner]);



  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      console.log(key);
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuess(key);
    };
    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [guess]);


  useEffect(() => {
    const handler = (e: KeyboardEvent) => {

      const key = e.key;
      if (key !== 'Enter') return
      e.preventDefault();
      setGuess([])
      setHang(getWord())
    };
    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [])

  return (
    <div style={{
      maxWidth: '800px',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      margin: '0 auto',
      alignItems: 'center'
    }}>
      <div style={{ fontSize: '2rem', textAlign: 'center' }}>
        {winner && 'gewonnen'}
        {verloren && 'veloren widerholen'}
      </div>
      <HangmanDr numberOf={inCorret.length} />
      <HangmanWort reveal={verloren} guess={guess} hang={hang} />
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard
          disabled={verloren || winner}
          activeWord={guess.filter(item => hang.includes(item))}
          inactiveWord={inCorret}
          addGuess={addGuess}
        />
      </div>
    </div>
  )
}

export default App
