
import data from './data.json'
import {useState} from 'react'
import HangmanDr from './components/HangmanDr'
import HangmanWort from './components/HangmanWort'
import Keyboard from './components/Keyboard'

function App() {
    const  word =  data[Math.floor(Math.random()*data.length)]
    //console.log(word)
     const [hang,setHang] = useState(word)
    //console.log(hang)
    const [guess ,setGuess] = useState<string[]>(['g'])
  // burada tahminin icerip icermedigine bajacagim 
    const inCorret = guess.filter((item)=>!word.includes(item))

  return (
    <div style={{
      maxWidth:'800px',
      display:'flex',
      flexDirection:'column',
      gap:'2rem',
      margin:'0 auto',
      alignItems:'center'
    }}>
    <div style={{fontSize:'2rem' ,textAlign:'center' }}>Lose Win</div>
    <HangmanDr numberOf = {inCorret.length} />
    <HangmanWort/>
    <div style={{alignSelf:'stretch'}}>
        <Keyboard/>
    </div>
  
       
    </div>
  )
}

export default App
