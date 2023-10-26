const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]
import styles from './Keybord.module.css'
const Keyboard = () => {
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(75px,1fr)',gap:'.5rem'}}>
      
{KEYS.map((item,index)=>(
  <div key={index}>
    <button className={`${styles.btn}`}>{item}</button> 
  </div>
 
))}
      
      </div>
  )
}

export default Keyboard