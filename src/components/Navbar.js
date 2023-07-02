import React, { useState } from "react";
import svgSheet from "../Assets/Svgsheet/svg";
import logo from "../Assets/Img/Logo.png";
import { Drawer } from "antd";

function Navbar({setOpen,open}) {
    const showDrawer = () => {
      setOpen(!open);
    };
  const [CurrentState, setCurrentState] = useState(0)
   
 const list = ["Profile","Security"]
 const  listNav =  ['HomeIcon','messageIcon','UserAvatar',"settings"]
    const [Currenet, setCurrenet] = useState(0)
  return (
    
    <div  className="h-64px p-10 d-flex align-items-center justify-content-end">
        <div style={{width:open?"73%":"100%"}}>
      <div className="d-flex w-100 align-items-center justify-content-between">
        <div className="d-flex " style={{ gap: "30px" }}>
          <p onClick={showDrawer} className="mb-0  " style={{ width: "40px", height: "40px" }}>
            {svgSheet?.Arrow}
          </p>
          <input placeholder="Search" className="input-search"></input>

          <div style={{ gap: "10px" }} className="d-flex align-items-center">
            {svgSheet.clock}
            <p className="mb-0"> Recent</p>
          </div>
          <div style={{ gap: "10px" }} className="d-flex align-items-center">
            {svgSheet.qus}
            <p className="mb-0"> Support</p>
          </div>
          <div style={{ gap: "10px" }} className="d-flex align-items-center">
            {svgSheet.notification}
            <p className="mb-0"> Notifications</p>
          </div>
        </div>
        <div style={{height:"40px",width:"40px"}} >
           <img src={logo} height={"40px"} width={"40px"}/>
        </div>
      </div>
      </div>
      <Drawer className="drawer-antd-custom" open={open} placement="left">
      <div className="d-flex h-100vh">
        <div
          style={{ gap: "45px", width: "64px", paddingTop: "16px" }}
          className="d-flex  p-10 flex-col justify-content-between bg-blue  align-items-center"
        >
          <div
            style={{ gap: "45px" }}
            className="bg-blue d-flex h-100vh w-100 align-items-center flex-col"
          >
            <img src={logo} height={32} width={32}></img>
           {listNav?.map((items,i)=>(
            <div onClick={()=>setCurrenet(i)} style={{ width: "36px", height: "36px",padding:"5px",borderRadius:"8px" ,background:Currenet === i &&  "rgb(85, 99, 245)",color:Currenet === i ? "white":"black"}}>
              {svgSheet[items]}
            </div>
           )) }
          
          </div>
          <div style={{ width: "25px", height: "25px" }}>
            {svgSheet?.download}
          </div>
        </div>
        <div style={{width:"67%"}} className="w-100">
          <div>
            <h3 className="fs-s-20 p-20 fw-700">Service desk</h3>
          </div>
          {list?.map((items,i)=>(
            <div onClick={()=>setCurrentState(i)} className="d-flex p-20 fw-500 w-100" style={{background:CurrentState === i && "#5563F5",color:CurrentState === i && "white"}}>
            <p className="mb-0 fw-500">{items}</p>
            </div>
          ))}
        </div>
      </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
