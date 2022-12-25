import React, {useEffect} from 'react'
import {AiOutlineSearch } from 'react-icons/ai'
import { BsFillPersonFill } from "react-icons/bs";
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';



export default function Navbar() {
  useEffect(() => {
		var token = localStorage.getItem('token')
		fetch("http://localhost:8888/authen", {
			method: "POST", // or 'PUT'
			headers: {
			  'Content-Type': 'application/json',
				'Authorization': 'Bearer '+token
			},
		  })
			.then((response) => response.json())
			.then((data) => {
			  if(data.status === 'ok_200'){
				// alert('auten Succeesed.')
			  }else{
				// alert('auten Failed.')
				localStorage.removeItem('token')
				window.location = '/login'
			  }
			  console.log("Success:", data);
			})
			.catch((error) => {
			  console.error("Error:", error);
			});
	},[])
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-2'>
      <div className='flex items-center'>
        <img src='./images/img1.jpg' width={100} height={100} onClick={handleToDashboard} ></img>
        <div>
          <div>
            {/* <AiOutlineMenu size={30} /> */}
          </div>
          <h1 className='text-xl sm:text-2xl lg:text-3xl px-1'>
          <span href='dashboard' className='font-bold'>BA</span>NANA 
          </h1>
        </div>
      </div>
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
      <AiOutlineSearch size={30} />
      <input className='bg-transparent p-1 w-full focus:outline-none' type="text" placeholder='ค้นหาข้อมูล'/>
      </div>
      <div className='flex items-center'>
        <BsFillPersonFill onClick={handleToinfouser} size={30} className='mr-2' color='blue' />
        <h1>{handlegetname}</h1>
        <IconButton color="error" onClick={handleLoguot} aria-label="LogoutIcon">
        <LogoutIcon />
      </IconButton>
      </div>
    </div>
  )

}
const handlegetname = (e) => {
  localStorage.getItem("email");
  console.log(localStorage.getItem("email"))
}
const handleToinfouser = (e) =>{

  window.location = '/add_infouser';
}
const handleToDashboard = (e) =>{
  window.location = '/dashboard';
}

const handleLoguot = (e) => {
  e.preventDefault()
  localStorage.removeItem('token');
  window.location = '/login'
  alert('logout')
}

