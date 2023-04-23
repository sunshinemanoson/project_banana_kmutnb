import { Routes, Route, Link } from "react-router-dom";
import Layout from "./layouts/Layout";
import IndexBody from "./layouts/Indexbody";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Output from "./components/Output";
import Add_wideth_Raw_1 from "./components/Add_wideth_Raw_1";
import Add_wideth_Raw_2 from "./components/Add_wideth_Raw_2";
import Add_wideth_Raw_3 from "./components/Add_wideth_Raw_3";
import Add_wideth_Raw_4 from "./components/Add_wideth_Raw_4";
import Add_wideth_Raw_5 from "./components/Add_wideth_Raw_5";
import Add_wideth_Raw_6 from "./components/Add_wideth_Raw_6";
import Add_wideth_Raw_7 from "./components/Add_wideth_Raw_7";
import Choice_Raw_1 from "./components/Choice_Raw_1";
import Choice_Raw_2 from "./components/Choice_Raw_2";
import Choice_Raw_3 from "./components/Choice_Raw_3";
import Choice_Raw_4 from "./components/Choice_Raw_4";
import Choice_Raw_5 from "./components/Choice_Raw_5";
import Choice_Raw_6 from "./components/Choice_Raw_6";
import Choice_Raw_7 from "./components/Choice_Raw_7";
import Choice_Raw_8 from "./components/Choice_Raw_8";
import Choice_Raw_9 from "./components/Choice_Raw_9";
import Choice_Raw_10 from "./components/Choice_Raw_10";
import Choice_Raw_11 from "./components/Choice_Raw_11";
import Choice_Raw_12 from "./components/Choice_Raw_12";
import Choice_Raw_13 from "./components/Choice_Raw_13";
import Choice_Raw_14 from "./components/Choice_Raw_14";
import Choice_Raw_15 from "./components/Choice_Raw_15";
import Choice_Raw_16 from "./components/Choice_Raw_16";
import Choice_Raw_17 from "./components/Choice_Raw_17";

import Choice_Unraw_1 from "./components/Choice_Unraw_1";
import Choice_Unraw_2 from "./components/Choice_Unraw_2";
import Choice_Unraw_3 from "./components/Choice_Unraw_3";
import Choice_Unraw_4 from "./components/Choice_Unraw_4";
import Choice_Unraw_5 from "./components/Choice_Unraw_5";
import Choice_Unraw_6 from "./components/Choice_Unraw_6";
import Choice_Unraw_7 from "./components/Choice_Unraw_7";
import Choice_Unraw_8 from "./components/Choice_Unraw_8";
import Choice_Unraw_9 from "./components/Choice_Unraw_9";
import Choice_Unraw_10 from "./components/Choice_Unraw_10";
import Choice_Unraw_11 from "./components/Choice_Unraw_11";
import Choice_Unraw_12 from "./components/Choice_Unraw_12";
import Choice_Unraw_13 from "./components/Choice_Unraw_13";
import Choice_Unraw_14 from "./components/Choice_Unraw_14";
import Choice_Unraw_15 from "./components/Choice_Unraw_15";
import Choice_Unraw_16 from "./components/Choice_Unraw_16";
import Choice_Unraw_17 from "./components/Choice_Unraw_17";

import Sidebar from "./components/admin/Sidebar";
import Feed from "./layouts/admin/Feed";
import Navbars from "./components/admin/Navbars";
import Report_Admin from "./layouts/admin/Report_Admin";
import Mylist_Admin from "./layouts/admin/report_admin/Mylist_Admin";
import Add_Admin  from "./layouts/admin/report_admin/Add_Admin";
import Report_User from "./layouts/admin/Report_User";
import Mylist from "./layouts/admin/report_user/Mylist";



import Add_infouser from "./components/Add_infouser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexBody />}/>
       
       {/* raw route */}
      
      
      {/* r */}
      {/* </Route> */} 
      {/* <Route path="/IndexBody" element={<IndexBody />}></Route> */}

      <Route path="login" element={<Login />} /> 
      <Route path="register" element={<Register />} /> 
      <Route path="goBlaFunc" element={<goBlaFunc />} /> 3b
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="Output" element={<Output />} />


      {/* Admin */}
      <Route path="Sidebar" element={<Sidebar />} />
      <Route path="Navbars" element={<Navbars />}/>
      <Route path="Feed" element={<Feed />} />
      
      <Route path="Report_user" element={<Report_User />} />
      <Route path="mylist"  element={<Mylist/>} />


      <Route path="Report_admin" element={<Report_Admin />} />
      <Route path="mylist_admin" element={< Mylist_Admin />} />
      <Route path="add_admin" element={< Add_Admin />} />
      


      // raw
      <Route path="Add_wideth_Raw_1" element={<Add_wideth_Raw_1 />} />
       <Route path="Add_wideth_Raw_2" element={<Add_wideth_Raw_2 />} />
       <Route path="Add_wideth_Raw_3" element={<Add_wideth_Raw_3 />} />
       <Route path="Add_wideth_Raw_4" element={<Add_wideth_Raw_4 />} />
       <Route path="Add_wideth_Raw_5" element={<Add_wideth_Raw_5 />} />
       <Route path="Add_wideth_Raw_6" element={<Add_wideth_Raw_6 />} />
       <Route path="Add_wideth_Raw_7" element={<Add_wideth_Raw_7 />} />
       <Route path="Choice_Raw_1" element={<Choice_Raw_1 />} />
       <Route path="Choice_Raw_2" element={<Choice_Raw_2 />} />
       <Route path="Choice_Raw_3" element={<Choice_Raw_3 />} />
       <Route path="Choice_Raw_4" element={<Choice_Raw_4 />} />
       <Route path="Choice_Raw_5" element={<Choice_Raw_5 />} />
       <Route path="Choice_Raw_6" element={<Choice_Raw_6 />} />
       <Route path="Choice_Raw_7" element={<Choice_Raw_7 />} />
       <Route path="Choice_Raw_8" element={<Choice_Raw_8 />} />
       <Route path="Choice_Raw_9" element={<Choice_Raw_9 />} />
       <Route path="Choice_Raw_10" element={<Choice_Raw_10 />} />
       <Route path="Choice_Raw_11" element={<Choice_Raw_11 />} />
       <Route path="Choice_Raw_12" element={<Choice_Raw_12 />} />
       <Route path="Choice_Raw_13" element={<Choice_Raw_13 />} />
       <Route path="Choice_Raw_14" element={<Choice_Raw_14 />} />
       <Route path="Choice_Raw_15" element={<Choice_Raw_15 />} />
       <Route path="Choice_Raw_16" element={<Choice_Raw_16 />} />
       <Route path="Choice_Raw_17" element={<Choice_Raw_17 />} />
       // unraw
       <Route path="Choice_Unraw_1" element={<Choice_Unraw_1 />} />
       <Route path="Choice_Unraw_2" element={<Choice_Unraw_2 />} />
       <Route path="Choice_Unraw_3" element={<Choice_Unraw_3 />} />
       <Route path="Choice_Unraw_4" element={<Choice_Unraw_4 />} />
       <Route path="Choice_Unraw_5" element={<Choice_Unraw_5 />} />
       <Route path="Choice_Unraw_6" element={<Choice_Unraw_6 />} />
       <Route path="Choice_Unraw_7" element={<Choice_Unraw_7 />} />
       <Route path="Choice_Unraw_8" element={<Choice_Unraw_8 />} />
       <Route path="Choice_Unraw_9" element={<Choice_Unraw_9 />} />
       <Route path="Choice_Unraw_10" element={<Choice_Unraw_10 />} />
       <Route path="Choice_Unraw_11" element={<Choice_Unraw_11 />} />
       <Route path="Choice_Unraw_12" element={<Choice_Unraw_12 />} />
       <Route path="Choice_Unraw_13" element={<Choice_Unraw_13 />} />
       <Route path="Choice_Unraw_14" element={<Choice_Unraw_14 />} />
       <Route path="Choice_Unraw_15" element={<Choice_Unraw_15 />} />
       <Route path="Choice_Unraw_16" element={<Choice_Unraw_16 />} />
       <Route path="Choice_Unraw_17" element={<Choice_Unraw_17 />} />
 

     
       {/* <Route path="Add_wideth_Unraw" element={<Add_wideth_Unraw />} />
       <Route path="Add_wideth_Unraw_2" element={<Add_wideth_Unraw_2 />} />
       <Route path="Add_wideth_Unraw_3" element={<Add_wideth_Unraw_3 />} />
       <Route path="Add_wideth_Unraw_4" element={<Add_wideth_Unraw_4 />} />
       <Route path="Add_wideth_Unraw_5" element={<Add_wideth_Unraw_5 />} />
       <Route path="Add_wideth_Unraw_6" element={<Add_wideth_Unraw_6 />} /> */}

       {/* unraw route */}
       {/* unraw route */}
      

       {/* unraw route */}
       <Route path="Add_infouser" element={<Add_infouser />} />
       {/* <Route path="/" element={<Layout />} /> */}
       
      // อย่าลืมใส่กลับ
       
    </Routes>
  );
}

export default App;