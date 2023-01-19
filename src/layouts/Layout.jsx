import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";




export default function Layout() {
  if(localStorage.length === 0){
    window.location.href = "/login";
  }else{
    return (
      <div>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    );
  }
  }