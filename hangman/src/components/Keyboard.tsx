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

type KeyboardProps = {
  disabled?:boolean,
  activeWord :string[],
 inactiveWord :string[] ,
 addGuess : (item :string) =>void
}

import styles from './Keybord.module.css'
const Keyboard = ({
  activeWord ,inactiveWord,addGuess,disabled= false} : KeyboardProps) => {
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(75px,1fr)',gap:'.5rem'}}>
      
{KEYS.map((item,index)=>{
   const isActive = activeWord.includes(item)
   const isInActive = inactiveWord.includes(item)
return(
    <button key={index}
     onClick={()=>addGuess(item)}
    className={`${styles.btn}
     ${isActive ? styles.active : ''} 
    ${isInActive ? styles.inactive : ''}` } disabled={isActive || isInActive || disabled}>{item}</button> 
)
}
)
}
      </div>
  )
}

export default Keyboard