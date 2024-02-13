//const bustabieren = 'test'
//const rat = ['t']

type HangWordGuessProps ={
  guess:string[]
  hang:string
  reveal?:boolean

}
const HangmanWort = ({guess,hang,reveal=false} : HangWordGuessProps) => {
  console.log(guess,hang,reveal)

  return (
    <div style={{
      display:'flex',
      gap:'.25rem',
      fontSize:'6rem',
      fontWeight:'bold',
      textTransform:'uppercase',
      fontFamily:'monospace'
    }}>

  {hang.split('').map((item,index)=>(
    <span style={{borderBottom:'.1rem solid black'}} key={index}>
      <span
      style={{visibility:guess.includes(item) || reveal ? 'visible' :'hidden',
      color:!guess.includes(item) &&  reveal ? 'red':'black'
    }}>
         {item}
      </span>

    </span>
  ))}

</div>

  )
}

export default HangmanWort