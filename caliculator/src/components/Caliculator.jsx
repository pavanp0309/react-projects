import { useState } from 'react'
import Keyboard from './keyboard'
import Display from './Display'

const Caliculator = () => {
  const [data, setData] = useState(0)
  // function to handle the User Input
  function handleClick(e) {
    console.log(e.target.value)
    let curVal = e.target.value
    // upadting the Display based user Input
    if (data === 0) {
      setData(curVal)
    } else {
      setData(prev => prev + "" + curVal)
    }

    // calculating the results
    if (curVal == "=") {
      let result = eval(data)
      setData(result)
    } else if (curVal == "AC") {
      setData(0)
    } else if (curVal == "C") {
      let sval = data //this is the value that is present in the display
      if (sval.length > 1) {
        setData(sval.slice(0, sval.length - 1))
      } else {
        setData(0)
      }

    }


  }
  return (
    <div>
      <div className="card my-3 mx-auto shadow my-5 rounded" style={{ width: '300px' }}>
        <Display data={data} />
        <div className="card-body">
          <Keyboard onClick={handleClick} />
        </div>
      </div>


    </div>
  )
}

export default Caliculator
