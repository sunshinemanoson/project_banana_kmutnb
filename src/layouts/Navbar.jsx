import React from 'react'
// import { BsFillPersonFill } from "react-icons/bs";
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';



export default function Navbar() {
  // useEffect(() => {
	// 	var token = localStorage.getItem('token')
	// 	fetch("http://localhost:8888/authen", {
	// 		method: "POST", // or 'PUT'
	// 		headers: {
	// 		  'Content-Type': 'application/json',
	// 			'Authorization': 'Bearer '+token
	// 		},
	// 	  })
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 		  if(data.status === 'ok_200'){
	// 			// alert('auten Succeesed.')
	// 		  }else{
	// 			// alert('auten Failed.')
	// 			localStorage.removeItem('token')
	// 			window.location = '/login'
	// 		  }
	// 		  console.log("Success:", data);
	// 		})
	// 		.catch((error) => {
	// 		  console.error("Error:", error);
	// 		});
	// },[])
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center '>
      <div className='flex items-center'> 
      <img src='./images/logo.jpg' width={300} height={300} onClick={handleToDashboard} ></img>
      </div>
      
      <div className='flex items-center'>
        {/* <BsFillPersonFill onClick={handleToinfouser} size={30} className='mr-2' color='gray' /> */}
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

  window.location = '/OutputRaw';
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

