import { useState,useEffect } from "react"

const DigitalClock = () => {
    // useState for storing the Current Time
     const [time,setTime]=useState(new Date())
     console.log(time)

    // useEffect for Handling the Time 
      useEffect(()=>{
          let intervalID=setInterval(()=>{
             setTime(new Date()) //updating the Time after every 1s 
          },1000)

        return ()=>{
            clearInterval(intervalID)
        } //cleanup function

      },[])// dependency

//    formating the Time 
  function formatTime(){
    let hours=time.getHours()
    let min=time.getMinutes()
    let seconds=time.getSeconds()
    let AmPm=(hours>=12)?"Pm":"AM"

    hours=hours%12 || 12
    return `${Addzero(hours)}:${Addzero(min)}:${Addzero(seconds)} ${AmPm}`
  }

  function Addzero(a){
    return (a<10?"0":"")+a
  }

  return (
    <div className="container my-5 ">
       <div className="container w-50 p-5 bg-warning rounded shadow">
        <h1 className="text-danger text-center ">{formatTime()}</h1>
       </div>
    </div>
  )
}

export default DigitalClock
