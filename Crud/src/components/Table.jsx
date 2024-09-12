import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';

const Table = () => {
    // useState for storing the User data
    let [data,setData]=useState([])

    // useEffect for Fectching the data from the Json server
    useEffect(()=>{
        async function getUser() {
            try {
              // http://localhost:3000/users : backedn server url (Api-endpoint)
              const response = await axios.get('http://localhost:3000/users');
              setData(response.data)
            } catch (error) {
              console.error(error);
            }
          }
          getUser() // calling the function to fetch the data manually

        return ()=>{} //cleanup [unmounting phase]

    },[])


    // function to Handle the delete functionality
    let handleDelete=async(id)=>{
      let confirm=window.confirm("are u sure to delete😫")
      if(confirm){
        try {
          let response=  await axios.delete(`http://localhost:3000/users/${id}`);
          setData(prevdata=>prevdata.filter(item=>item.id!==id))
          toast.success("user Delete sucessfully")
        } catch (error) {
          console.log(error.message)
          toast.error("user failed Delete ")
        }
      }

    }

  return (
    <>
    <Link  to={"/create"} className='btn btn-success'>Create</Link>

    <table className='table table-responsive'>
    <thead>
    <tr>
      <th scope="col">Sno</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">Mobile</th>
      <th scope="col">address</th>
      <th scope="col">Action</th>
     
    </tr>
    </thead>
    {/* second row for displaying the Dynamic data  */}
    
        {/* logic */}
    <tbody>
        {
            data.map((user)=>(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>address</td>
                    <td>
                        <Link to={`/update/${user.id}`} className='btn btn-primary nav-link'>update</Link>
                        <Link to={`/read/${user.id}`} className='btn btn-primary nav-link'>read</Link>
                        <button onClick={(id)=>handleDelete(user.id)}>delete</button>
                    </td>
                </tr>
            ))
        }
    </tbody>
    
    
    </table>
      
    </>
  )
}

export default Table
