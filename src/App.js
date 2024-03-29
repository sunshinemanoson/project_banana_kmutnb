import { Routes, Route, Link ,BrowserRouter, Navigate} from "react-router-dom";
import IndexBody from './layouts/Indexbody';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import OutputRaw from './components/OutputRaw';
import OutputUnRaw from './components/OutputUnRaw';
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
import Choice_Unraw_18 from "./components/Choice_Unraw_18";
import Choice_Unraw_19 from "./components/Choice_Unraw_19";
import Choice_Unraw_20 from "./components/Choice_Unraw_20";
import Choice_Unraw_21 from "./components/Choice_Unraw_21";
import Choice_Unraw_22 from "./components/Choice_Unraw_22";
import Choice_Unraw_23 from "./components/Choice_Unraw_23";
import Choice_Unraw_24 from "./components/Choice_Unraw_24";
import Choice_Unraw_25 from "./components/Choice_Unraw_25";
import Choice_Unraw_26 from "./components/Choice_Unraw_26";
import Choice_Unraw_27 from "./components/Choice_Unraw_27";
import Choice_Unraw_28 from "./components/Choice_Unraw_28";
import Choice_Unraw_29 from "./components/Choice_Unraw_29";
import Choice_Unraw_30 from "./components/Choice_Unraw_30";
import Choice_Unraw_31 from "./components/Choice_Unraw_31";
import Choice_Unraw_32 from "./components/Choice_Unraw_32";
import Choice_Unraw_33 from "./components/Choice_Unraw_33";
import Choice_Unraw_34 from "./components/Choice_Unraw_34";


import Sidebar from "./components/admin/Sidebar";
import Feed from "./layouts/admin/Feed";
import Navbars from "./components/admin/Navbars";
import Report_Admin from "./layouts/admin/Report_Admin";
import Mylist_Admin from "./layouts/admin/report_admin/Mylist_Admin";
import Edit_Admin from "./layouts/admin/report_admin/Edit_Admin";
import Add_Admin  from "./layouts/admin/report_admin/Add_Admin";


import Report_User from "./layouts/admin/Report_User";
import Mylist from "./layouts/admin/report_user/Mylist";
import Edit from "./layouts/admin/report_user/Edit";

import Add_infouser from "./components/Add_infouser";

function App() {
  return (
    <div>
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path='/' exact element={<IndexBody />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/goBlaFunc' element={<goBlaFunc />}></Route>
      <Route path='/dashboard' element={<Dashboard />} ></Route>
      <Route path='/OutputRaw' element={<OutputRaw />} ></Route>
      <Route path='/OutputUnRaw' element={<OutputUnRaw />} ></Route>
      {/* Admin */}
      <Route path='/Sidebar' element={<Sidebar />} ></Route>
      <Route path='/Navbars' element={<Navbars />}></Route>
      <Route path='/Feed' element={<Feed />} ></Route>
      <Route path='/Report_user' element={<Report_User />} ></Route>
      <Route path='/mylist'  element={<Mylist/>} ></Route>
      <Route path='/edit' element={<Edit/>} ></Route>
      <Route path='/Report_admin' element={<Report_Admin />} ></Route>
      <Route path='/mylist_admin' element={< Mylist_Admin />} ></Route>
      <Route path='/add_admin' element={< Add_Admin />} ></Route>
      <Route path='/edit_admin' element={< Edit_Admin />} ></Route>
      // raw
      <Route path='/Add_wideth_Raw_1' element={<Add_wideth_Raw_1 />} ></Route>
       <Route path="/Add_wideth_Raw_2" element={<Add_wideth_Raw_2 />} ></Route>
       <Route path="/Add_wideth_Raw_3" element={<Add_wideth_Raw_3 />} ></Route>
       <Route path="/Add_wideth_Raw_4" element={<Add_wideth_Raw_4 />} ></Route>
       <Route path="/Add_wideth_Raw_5" element={<Add_wideth_Raw_5 />} ></Route>
       <Route path="/Add_wideth_Raw_6" element={<Add_wideth_Raw_6 />} ></Route>
       <Route path="/Add_wideth_Raw_7" element={<Add_wideth_Raw_7 />} ></Route>
       <Route path="/Choice_Raw_1" element={<Choice_Raw_1 />} />
       <Route path="/Choice_Raw_2" element={<Choice_Raw_2 />} />
       <Route path="/Choice_Raw_3" element={<Choice_Raw_3 />} />
       <Route path="/Choice_Raw_4" element={<Choice_Raw_4 />} />
       <Route path="/Choice_Raw_5" element={<Choice_Raw_5 />} />
       <Route path="/Choice_Raw_6" element={<Choice_Raw_6 />} />
       <Route path="/Choice_Raw_7" element={<Choice_Raw_7 />} />
       <Route path="/Choice_Raw_8" element={<Choice_Raw_8 />} />
       <Route path="/Choice_Raw_9" element={<Choice_Raw_9 />} />
       <Route path="/Choice_Raw_10" element={<Choice_Raw_10 />} />
       <Route path="/Choice_Raw_11" element={<Choice_Raw_11 />} />
       <Route path="/Choice_Raw_12" element={<Choice_Raw_12 />} />
       <Route path="/Choice_Raw_13" element={<Choice_Raw_13 />} />
       <Route path="/Choice_Raw_14" element={<Choice_Raw_14 />} />
       <Route path="/Choice_Raw_15" element={<Choice_Raw_15 />} />
       <Route path="/Choice_Raw_16" element={<Choice_Raw_16 />} />
       <Route path="/Choice_Raw_17" element={<Choice_Raw_17 />} />
       // unraw
       <Route path="/Choice_Unraw_1" element={<Choice_Unraw_1 />} />
       <Route path="/Choice_Unraw_2" element={<Choice_Unraw_2 />} />
       <Route path="/Choice_Unraw_3" element={<Choice_Unraw_3 />} />
       <Route path="/Choice_Unraw_4" element={<Choice_Unraw_4 />} />
       <Route path="/Choice_Unraw_5" element={<Choice_Unraw_5 />} />
       <Route path="/Choice_Unraw_6" element={<Choice_Unraw_6 />} />
       <Route path="/Choice_Unraw_7" element={<Choice_Unraw_7 />} />
       <Route path="/Choice_Unraw_8" element={<Choice_Unraw_8 />} />
       <Route path="/Choice_Unraw_9" element={<Choice_Unraw_9 />} />
       <Route path="/Choice_Unraw_10" element={<Choice_Unraw_10 />} />
       <Route path="/Choice_Unraw_11" element={<Choice_Unraw_11 />} />
       <Route path="/Choice_Unraw_12" element={<Choice_Unraw_12 />} />
       <Route path="/Choice_Unraw_13" element={<Choice_Unraw_13 />} />
       <Route path="/Choice_Unraw_14" element={<Choice_Unraw_14 />} />
       <Route path="/Choice_Unraw_15" element={<Choice_Unraw_15 />} />
       <Route path="/Choice_Unraw_16" element={<Choice_Unraw_16 />} />
       <Route path="/Choice_Unraw_17" element={<Choice_Unraw_17 />} />
       <Route path="/Choice_Unraw_18" element={<Choice_Unraw_18 />} />
       <Route path="/Choice_Unraw_19" element={<Choice_Unraw_19 />} />
       <Route path="/Choice_Unraw_20" element={<Choice_Unraw_20 />} />
       <Route path="/Choice_Unraw_21" element={<Choice_Unraw_21 />} />
       <Route path="/Choice_Unraw_22" element={<Choice_Unraw_22 />} />
       <Route path="/Choice_Unraw_23" element={<Choice_Unraw_23 />} />
       <Route path="/Choice_Unraw_24" element={<Choice_Unraw_24 />} />
       <Route path="/Choice_Unraw_25" element={<Choice_Unraw_25 />} />
       <Route path="/Choice_Unraw_26" element={<Choice_Unraw_26 />} />
       <Route path="/Choice_Unraw_27" element={<Choice_Unraw_27 />} />
       <Route path="/Choice_Unraw_28" element={<Choice_Unraw_28 />} />
       <Route path="/Choice_Unraw_29" element={<Choice_Unraw_29 />} />
       <Route path="/Choice_Unraw_30" element={<Choice_Unraw_30 />} />
       <Route path="/Choice_Unraw_31" element={<Choice_Unraw_31 />} />
       <Route path="/Choice_Unraw_32" element={<Choice_Unraw_32 />} />
       <Route path="/Choice_Unraw_33" element={<Choice_Unraw_33 />} />
       <Route path="/Choice_Unraw_34" element={<Choice_Unraw_34 />} />
       {/* unraw route */}
       <Route path="/Add_infouser" element={<Add_infouser />} />
       {/* <Route path="/" element={<Layout />} /> */}
       
      // อย่าลืมใส่กลับ
       
    </Routes>
    </div>
  );
}

export default App;