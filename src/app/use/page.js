"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
    
const page = () => {

  const [formData, setFormData]=useState({
    name:'',
    email:'',
    address:'',
    contact:''
  });
  const[data, setData]=useState({
    message:""
  })
  const [message, setMessage]= useState('')
  const handleChange = (event) =>{
    setFormData (formData => ({

      ...formData,[event.target.name] : event.target.value 
    
  }));;
}

// async function nabina(){
  // const response = await axios.get("https://bookowl-ip0e.onrender.com/");
  // console.log("backend ko data:", response)
  // console.log("data", response.data.message);

  // setMessage(response.data.message)


// }

  useEffect(async () => {
     const response = await axios.get("https://snap-thrift-backend.onrender.com/");
  console.log("backend ko data:", response)
  console.log("data", response.data.message);

  setMessage(response.data.message)
  }, [])

  return (
    <div>
     <p>
        name:
        </p> 
        <section className='m-3 p-4'>
          {/* <button onClick={nabina}>
click ME
          </button> */}

      <input
              type="text"
              name='name'
              onChange={handleChange}
              placeholder="Name"
              className="w-40 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
              required
            />
                <input
              type="text"
              name='address'
              onChange={handleChange}
              placeholder="Address"
              className="w-40 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
              required
            />
                <input
              type="text"
              name='email'
              onChange={handleChange}
              placeholder="email"
              className="w-40 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
              required
            />
                <input
              type="text"
              name='contact'
              onChange={handleChange}
              placeholder="Contact"
              className="w-40 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
              required
            />

              </section>
            
      
      <h2>name:{message}</h2>
      <h2>email:{formData.email}</h2>
      <h2>address:{formData.address}</h2>
      <h2>contact:{formData.contact}</h2>

      {/* <h2>address:{address}</h2>
      <h2>email:{email}</h2>
      <h2>contact:{contact}</h2> */}
   
    </div>
  )
}

export default page

