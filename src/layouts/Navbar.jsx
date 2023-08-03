import React from "react";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleToDashboard = () => {
    navigate("/dashboard");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    alert("Logout");
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <div style={{ marginLeft: '20px' }}>
      <img
        src="./images/logo.jpg"
        alt="Logo"
        width={260}
        height={90}
        onClick={handleToDashboard}
      />
    </div>
    <div style={{ marginRight: '20px' }}>
      <IconButton color="error" onClick={handleLogout} aria-label="LogoutIcon">
        <LogoutIcon />
      </IconButton>
    </div>
  </div>
     
      
  
  );
}




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