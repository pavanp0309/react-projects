import {useState,useEffect} from 'react';
import { toast } from 'react-toastify';
import { useParams,useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    // useState to handle The User Input
    let [user,setUser]=useState(
      {
          name:"",
          email:"",
          phone:"",
          address:{
              city:""
          }

      }
  )

  let {id}=useParams()
  console.log(id)

  // useEffect for Hadling the SideEffects while updating the Data in the Server
  useEffect(()=>{

    const getUser=async()=>{

      try{
     
          // using the Axios for updating the Data in the Server
          const response = await axios.get(`http://localhost:3000/users/${id}`);
          console.log(response.data)
          setUser(response.data)
          // on successfull creation of the User we are notify the User
         
      }catch(error){
           console.log(error.name)
         
      }

    }
    
    // calling the getUser Function
    getUser()

    return()=>{}

    
  },[id])


  // using the UseNavigate Hook to navigate Back to the Page
  let navigate=useNavigate()

// function to Update the Existing values 
let handleUpdate=async(e)=>{
      e.preventDefault()
      console.log("data is submitted")
      try {
        let response=await axios.put(`http://localhost:3000/users/${id}`,user);
        console.log(response)
        toast.success("user updated successfully")
        navigate('/')
      } catch (error) {
        console.log(error.name)
        toast.error("user updatedation failed")
      }
}


  return (
    <div className='container'>
         
    {/* form layout for Creating the UserDetails */}
    <form className='' onSubmit={handleUpdate} >
        {/* name,email ,phone,address */}
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name"
             placeholder="enter ur name"
             value={user.name}
             onChange={(e)=>setUser({...user,name:e.target.value})}
            
             />
        </div>
        {/* email start */}
        <div className="mb-3">
            <label htmlFor="email" className="form-label">email</label>
            <input type="email" className="form-control" id="email" 
            placeholder="enter ur email"
            value={user.email}
            onChange={(e)=>setUser({...user,email:e.target.value})}/>
        </div>
        {/* email end */}
        {/* phone start */}
        <div className="mb-3">
            <label htmlFor="phoneNo" className="form-label">PhoneNo</label>
            <input type="tel" className="form-control" id="phoneNo"
             placeholder="enter ur Phone"
             value={user.phone}
             onChange={(e)=>setUser({...user,phone:e.target.value})}/>
        </div>
        {/* phone end */}
        {/* address start */}
        <div className="mb-3">
            <label htmlFor="address" className="form-label">address</label>
            <input type="text" className="form-control" id="address"
             placeholder="enter ur address"
             value={user.address.city}
             onChange={(e)=>setUser({...user,address:{...user.address,city:e.target.value}})}/>
        </div>
        {/* address end */}
   
 {/* button for navigating back to the Table  start*/}
    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
    <button type='submit' className="btn btn-primary" >submit</button>
    <Link  to={'/'} className="btn btn-primary" >Back</Link>
    </div>
    {/* button for navigating back to the Table end*/}

    </form>
</div>
  )
}

export default Update
