import React, { useEffect } from "react";
import "./App.css";
import Home from "./component/Home/Home";
import Nav from "./component/Nav/Nav";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import AOS from 'aos';
  import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
          <Nav></Nav>
          <Home></Home>
    </div>
  );
};

export default App;
