import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Read = () => {
 const [data,setData]=useState([])
 console.log(data) // these are values of particular user
const {address,name,phone,email}=data
console.log(address)
let firstcity=address?address.city:""


 let {id}=useParams()

 useEffect(()=>{
  const getUser=async()=>{
    try{
        const response = await axios.get(`http://localhost:3000/users/${id}`);
        console.log(response.data)
        setData(response.data)

    }catch(error){
         console.log(error.name)
    }

  }
  getUser()

  return ()=>{}

 },[id])

 
  return (
    <div>
      <div className="card">
  <div className="card-body">
    <h5 className="card-title">🙂Name:{name}</h5>
    <p className="card-text">📩Email:{email}</p>
    <p className="card-text">📱Mobile:{phone}</p>
    <p className="card-text">📍address:{firstcity}</p>
    <a href="#" className="btn btn-primary">contact the user</a>
    <Link className="btn btn-primary" to="/">Back</Link>
    
  </div>
</div>
    </div>
  )
}

export default Read
