import { Routes, Route, Link } from "react-router-dom";
import Layout from "./layouts/Layout";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Add_wideth_Raw from "./components/Add_wideth_Raw";
import Add_wideth_Raw_2 from "./components/Add_wideth_Raw_2";
import Add_wideth_Raw_3 from "./components/Add_wideth_Raw_3";
import Add_wideth_Raw_4 from "./components/Add_wideth_Raw_4";
import Add_wideth_Raw_5 from "./components/Add_wideth_Raw_5";
import Add_wideth_Raw_6 from "./components/Add_wideth_Raw_6";
import Choice_Raw from "./components/Choice_Raw";
import Choice_Raw_2 from "./components/Choice_Raw_2";
import Choice_Raw_3 from "./components/Choice_Raw_3";
import Choice_Raw_4 from "./components/Choice_Raw_4";
import Choice_Raw_5 from "./components/Choice_Raw_5";
import Choice_Raw_6 from "./components/Choice_Raw_6";
import Choice_Raw_7 from "./components/Choice_Raw_7";
import Choice_Raw_8 from "./components/Choice_Raw_8";
import Choice_Raw_9 from "./components/Choice_Raw_9";
import Add_wideth_Unraw from "./components/Add_wideth_Unraw";
import Add_wideth_Unraw_2 from "./components/Add_wideth_Unraw_2";
import Add_wideth_Unraw_3 from "./components/Add_wideth_Unraw_3";
import Add_wideth_Unraw_4 from "./components/Add_wideth_Unraw_4";
import Add_wideth_Unraw_5 from "./components/Add_wideth_Unraw_5";
import Add_wideth_Unraw_6 from "./components/Add_wideth_Unraw_6";
import Add_infouser from "./components/Add_infouser";
import Output from "./components/Output";
import Ad_layout from "./layouts/admin/Ad_layout";





function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} /> 
      <Route path="register" element={<Register />} /> 
      <Route path="goBlaFunc" element={<goBlaFunc />} /> 
      // อย่าลืมใส่กลับ
        {/* <Route path="/" element={<Layout />} /> */}
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="/" element={<Layout />}>
      
      {/* r */}
      
      {/* <Route path="/IndexBody" element={<IndexBody />}></Route> */}
      {/* <Route path="login" element={<Login />} /> 
      <Route path="register" element={<Register />} /> 
      <Route path="goBlaFunc" element={<goBlaFunc />} />  */}
      // อย่าลืมใส่กลับ
        {/* <Route path="/" element={<Layout />} /> */}
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
       
        {/* raw route */}
        <Route path="Add_wideth_Raw" element={<Add_wideth_Raw />} />
        <Route path="Add_wideth_Raw_2" element={<Add_wideth_Raw_2 />} />
        <Route path="Add_wideth_Raw_3" element={<Add_wideth_Raw_3 />} />
        <Route path="Add_wideth_Raw_4" element={<Add_wideth_Raw_4 />} />
        <Route path="Add_wideth_Raw_5" element={<Add_wideth_Raw_5 />} />
        <Route path="Add_wideth_Raw_6" element={<Add_wideth_Raw_6 />} />
        <Route path="Choice_Raw" element={<Choice_Raw />} />
        <Route path="Choice_Raw_2" element={<Choice_Raw_2 />} />
        <Route path="Choice_Raw_3" element={<Choice_Raw_3 />} />
        <Route path="Choice_Raw_4" element={<Choice_Raw_4 />} />
        <Route path="Choice_Raw_5" element={<Choice_Raw_5 />} />
        <Route path="Choice_Raw_6" element={<Choice_Raw_6 />} />
        <Route path="Choice_Raw_7" element={<Choice_Raw_7 />} />
        <Route path="Choice_Raw_8" element={<Choice_Raw_8 />} />
        <Route path="Choice_Raw_9" element={<Choice_Raw_9 />} />

        {/* unraw route */}
        {/* unraw route */}
        <Route path="Add_wideth_Unraw" element={<Add_wideth_Unraw />} />
        <Route path="Add_wideth_Unraw_2" element={<Add_wideth_Unraw_2 />} />
        <Route path="Add_wideth_Unraw_3" element={<Add_wideth_Unraw_3 />} />
        <Route path="Add_wideth_Unraw_4" element={<Add_wideth_Unraw_4 />} />
        <Route path="Add_wideth_Unraw_5" element={<Add_wideth_Unraw_5 />} />
        <Route path="Add_wideth_Unraw_6" element={<Add_wideth_Unraw_6 />} />

        {/* unraw route */}
        <Route path="Add_infouser" element={<Add_infouser />} />
        <Route path="output" element={<Output/>} />
      </Route>

      <Route path="Ad_layout" element={<Ad_layout />}>

        
      </Route>
    </Routes>
  );
}

export default App;
