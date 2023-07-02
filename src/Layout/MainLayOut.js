import React, { useState } from "react";
import { Drawer } from "antd";
import Logo from "../Assets/Img/Logo.png";
import svgSheet from "../Assets/Svgsheet/svg";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
function MainLayOut({ children }) {
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [open, setOpen] = useState(true);


  return (
    <div className="h-100vh d-flex flex-col">
      <Navbar open={open} setOpen={setOpen}/>
      <div  style={{height:"100vh",overflowY:"scroll",overflowX:"hidden"}} className="d-flex w-100 justify-content-end " >
      <div style={{width:open?"73%":"100%"}} className="d-flex">{children}</div>
      </div>
    </div>
  );
}

export default MainLayOut;
