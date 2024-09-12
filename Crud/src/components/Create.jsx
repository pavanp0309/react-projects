import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';


const Create = () => {
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

 


//  this hook helps to navigate back to the previous page on success creation of user
    let navigate=useNavigate()


    // function to handle the data submitted by the User(creates the New user in the server)
   async function handleSubmit(e){
       e.preventDefault() // to avoid the form submission by defalut

     try {
        // using the axios to update the data in  the server
        let response=await axios.post("http://localhost:3000/users",user)
        console.log(response)
       toast.success("user Created Successfully")
        // navigating back to table page after successfull creation of the User
        navigate("/")
     } catch (error) {
        console.log(error.name)
        toast.error("failed to create the User")
     }
     
    }

    return (
        <div className='container'>
         
            {/* form layout for Creating the UserDetails */}
            <form className='' onSubmit={handleSubmit}>
                {/* name,email ,phone,address */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name"
                     placeholder="enter ur name"
                     onChange={(e)=>setUser({...user,name:e.target.value})}
                    
                     />
                </div>
                {/* email start */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">email</label>
                    <input type="email" className="form-control" id="email" 
                    placeholder="enter ur email"
                    onChange={(e)=>setUser({...user,email:e.target.value})}/>
                </div>
                {/* email end */}
                {/* phone start */}
                <div className="mb-3">
                    <label htmlFor="phoneNo" className="form-label">PhoneNo</label>
                    <input type="tel" className="form-control" id="phoneNo"
                     placeholder="enter ur Phone"
                     onChange={(e)=>setUser({...user,phone:e.target.value})}/>
                </div>
                {/* phone end */}
                {/* address start */}
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">address</label>
                    <input type="text" className="form-control" id="address"
                     placeholder="enter ur address"
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

export default Create
