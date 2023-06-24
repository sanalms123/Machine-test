import { CloseOutlined } from "@ant-design/icons";
import React from "react";

function List({ items }) {
  return (
    <div className="d-flex align-items-center">
    <div className="d-flex card-shadow br-20 w-100 bg-white p-20">
      <div
        className="d-flex jusftify-content-between align-items-center "
        style={{ width: "90%" }}
      >
        <div className="w-20 d-flex  justify-content-center align-items-center">
          <div
            style={{
              width: "70px",
              height: "70px",
              background: "red",
              borderRadius: "50%",
            }}
            className=""
          ></div>
        </div>
        <div
          style={{ marginLeft: "20px" }}
          className="d-flex  text-align-start flex-col align-items-start "
        >
          <h3 className="mb-5">{items?.title}</h3>
          <p className="d-flex align-items-start">{items?.body}</p>
          <h4 className="text-gray mt-5">Mon, 21 Dec 2020 14:57 MGT</h4>
        </div>
      </div>
    </div>
    <div style={{borderRadius:"50%",marginLeft:"20px",height:"50px",width:"50px"}} className="bg-white box-shadow p-10 d-flex align-items-center justify-content-center">
    <CloseOutlined  style={{color:"red",fontSize:"40px"}}/>
    </div>
    </div>
  );
}

export default List;
