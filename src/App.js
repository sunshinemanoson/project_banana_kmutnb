import { Routes, Route, Link } from "react-router-dom";
import Layout from "./layouts/Layout";
import Dashboard from "./components/Dashboard";
import Login from './components/Login';
import Register from "./components/Register";
import Add_wideth_Raw from "./components/Add_wideth_Raw";
import Add_wideth_Unraw from "./components/Add_wideth_Unraw";
import Add_infouser from "./components/Add_infouser";
import Test from "./components/Test";




function App() {
  return (
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="Add_wideth_Raw" element={<Add_wideth_Raw />} />
          <Route path="Add_wideth_Unraw" element={<Add_wideth_Unraw />} />
          <Route path="Add_infouser" element={<Add_infouser />} />
          <Route path="Test" element={<Test/>} />
        </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
      </Routes>

  );
}



export default App;
