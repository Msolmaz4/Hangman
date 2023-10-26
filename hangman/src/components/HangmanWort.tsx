const bustabieren = 'test'
const rat = ['t']

const HangmanWort = () => {
  return (
    <div style={{
      display:'flex',
      gap:'.25rem',
      fontSize:'6rem',
      fontWeight:'bold',
      textTransform:'uppercase',
      fontFamily:'monospace'
    }}>

  {bustabieren.split('').map((item,index)=>(
    <span style={{borderBottom:'.1rem solid black'}} key={index}>
      <span
      style={{visibility:rat.includes(item) ? 'visible' :'hidden'}}
      >
         {item}
      </span>

    </span>
  ))}

</div>

  )
}

export default HangmanWort