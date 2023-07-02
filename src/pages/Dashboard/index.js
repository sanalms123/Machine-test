import React from "react";
import UserImg from "../../Assets/Img/UserImg.png";
import { Form, Input, Select } from "antd";
import svgSheet from "../../Assets/Svgsheet/svg";
function Dashboard() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="w-100">
      <div
        style={{
          height: "192px",
          marign: "5px",
          borderRadius: "0px 0px 8px 8px",
        }}
        className="p-10 bg-blue w-100"
      >
        <h2 className="mb-0">Profile</h2>
      </div>
      <div className="d-flex">
        <div style={{ marginTop: "-70px" }}>
          <img
            src={UserImg}
            height={170}
            width={170}
            style={{ borderRadius: "50%" }}
          ></img>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <h2 className="mb-0">John Doe</h2>
          <span>John@gmail.com</span>
          <div style={{marginTop:"5px"}} className="d-flex align-items-center">
          <div className="d-flex align-items-center" style={{color:"#5563F5"}}><span style={{marginTop:"5px"}}>{svgSheet.editicon}</span><p style={{marginLeft:"5px"}} className="mb-0">Change Profile Picture</p></div>
          </div>
        </div>
      </div>
      <div style={{ gap: "20px",marginLeft:"30px" }} className="d-flex flex-col mt-20">
        <div className="mt-20 d-flex ">
          <div className="relative" style={{ width: "30%" }}>
            <p
              className="absolute"
              style={{ background: "white", left: "15px", top: "-13px" }}
            >
              First Name
            </p>
            <input
              style={{ width: "85%" }}
              className="inputField-custom"
              placeholder="Placeholder text"
            ></input>
          </div>
          <div className="relative" style={{ width: "30%" }}>
            <p
              className="absolute"
              style={{ background: "white", left: "15px", top: "-13px" }}
            >
              Middle Name
            </p>
            <input
              style={{ width: "85%" }}
              className="inputField-custom"
              placeholder="Placeholder text"
            ></input>
          </div>
          <div className="relative" style={{ width: "30%" }}>
            <p
              className="absolute"
              style={{ background: "white", left: "15px", top: "-13px" }}
            >
              Last Name
            </p>
            <input
              style={{ width: "85%" }}
              className="inputField-custom"
              placeholder="Placeholder text"
            ></input>
          </div>
        </div>
        <div className="mt-20 d-flex ">
          <div className="relative" style={{ width: "30%" }}>
            <p
              className="absolute"
              style={{ background: "white", left: "15px", top: "-13px" }}
            >
              Phone Number
            </p>
            <input
              style={{ width: "85%" }}
              className="inputField-custom"
              placeholder="Placeholder text"
            ></input>
          </div>
          <div className="relative" style={{ width: "30%" }}>
            <p
              className="absolute"
              style={{ background: "white", left: "15px", top: "-13px" }}
            >
            Office Desk Number
            </p>
            <input
              style={{ width: "85%" }}
              className="inputField-custom"
              placeholder="Placeholder text"
            ></input>
          </div>
          <div className="relative" style={{ width: "30%" }}>
            <p
              className="absolute"
              style={{ background: "white", left: "15px", top: "-13px" }}
            >
              Location
            </p>
            <input
              style={{ width: "85%" }}
              className="inputField-custom"
              placeholder="Placeholder text"
            ></input>
          </div>
        </div>
        <div className="mt-20 d-flex ">
          <div className="relative" style={{ width: "30%" }}>
            <p
              className="absolute"
              style={{ background: "white", left: "15px", top: "-13px" }}
            >
              Work Type
            </p>
            <input
              style={{ width: "85%" }}
              className="inputField-custom"
              placeholder="Placeholder text"
            ></input>
          </div>
          <div className="relative" style={{ width: "30%" }}>
          <Select
          placeholder="Delegation Type"
    //   defaultValue="lucy"
      className="select-dropdown-custom"
      style={{
        width: "95%",
        height:"40px"
      }}
      
      options={[
        {
          value: 'Full Access',
          label: 'Full Access',
        },
        {
            value: 'Service Desk Module',
            label: 'Service Desk Module',
          },
      ]}
    />
          </div>
          <div className="relative" style={{ width: "30%" }}>
          <Select
                placeholder="Delegation Type"

      style={{
        width: "95%",
      }}
      
      options={[
        {
            value: 'Full Access',
            label: 'Full Access',
          },
          {
              value: 'Service Desk Module',
              label: 'Service Desk Module',
            },
      ]}
    />
          </div>
        </div>
      </div>
      <div style={{margin:"40px",gap:"20px"}} className="d-flex  justify-content-end">
        <button className="outline-button">Cancel</button>
        <button className="bg-filled">Save</button>
      </div>
    </div>
  );
}

export default Dashboard;
