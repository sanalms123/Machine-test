import React, { useState } from "react";
import { PicRightOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button, Drawer, Form, Input, InputNumber, Radio, Space } from "antd";
import FeedBackForm from "./FeedBackForm";
function LeftSideBar({ setCurrentState, CurrentState }) {
  const onClose = () => {
    setState(false);
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */
  const [contactForm] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };
  const [State, setState] = useState(false);
  const list = [<PicRightOutlined />, <UnorderedListOutlined />];
  return (
    <div
      style={{ gap: "20px" }}
      className="d-flex flex-col br-20 card-shadow h-100vh  w-20 p-70"
    >
      <Drawer
        // title="Basic Drawer"
        placement={"left"}
        width={"80%"}
        closable={false}
        onClose={onClose}
        open={State}
        key={1}
      >
        <div className="d-flex">
        <div style={{width:"25%",gap:"20px"}} className="d-flex flex-col">
          <div className="card-shadow align-items-center  bg-white br-20 p-10 d-flex">
            <div
              style={{
                width: "70px",
                height: "70px",
                background: "red",
                borderRadius: "50%",
              }}
              className=""
            ></div>
            <div className="d-flex ml-5 align-items-start flex-col">
              <h3 className="mb-0">Hi Reader,</h3>
              <p style={{}} className="mb-0">
                Here's your News
              </p>
            </div>
          </div>

          <div className="card-shadow align-items-center  bg-white br-20 p-10 d-flex flex-col">
            <h2 className="mb-10">Have a Feedback?</h2>
            <button
              style={{ border: "none" }}
              className="br-10 fs-30 fw-700 p-20 br-green "
            >
              We're Listening!
            </button>
          </div>
        </div>
        <div style={{width:"75%",marginLeft:"30px"}}>
          <h2>
          Thank you so much for taking the time!
          </h2>
          <p>Please provie the below details!</p>
        <Form
    // {...layout}
    name="nest-messages"
    layout="vertical"
    form={contactForm}
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['user', 'name']}
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'name']}
      label="Last Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'Address:']} label="Address">
      <Input.TextArea />
    </Form.Item>
  
    <Form.Item
      name={['Country:', 'Country:']}
      label="Country:"
      rules={[
        {
          type: 'Country:',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      name={['user', 'email']}
      label="Email"
      rules={[
        {
          type: 'email',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'number']}
      label="Number"
      rules={[
        {
          type: 'Number',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      // wrapperCol={{
      //   ...layout.wrapperCol,
      //   offset: 8,
      // }}
    >
      <button onClick={()=> contactForm.resetFields()} type="primary" style={{border:"none",background:"#5CC8A1",color:"white",padding:"20px",fontSize:"16px",fontWeight:"600"}} className="p-10 br-20" htmlType="submit">
      Submit Feedback
      </button>
    </Form.Item>
  </Form>
        </div>
        </div>
      </Drawer>
      <div className="card-shadow align-items-center  bg-white br-20 p-10 d-flex">
        <div
          style={{
            width: "70px",
            height: "70px",
            background: "red",
            borderRadius: "50%",
          }}
          className=""
        ></div>
        <div className="d-flex ml-5 align-items-start flex-col">
          <h3 className="mb-0">Hi Reader,</h3>
          <p style={{}} className="mb-0">
            Here's your News
          </p>
        </div>
      </div>
      <div className="card-shadow align-items-center  bg-white br-20 p-10 d-flex flex-col">
        <h2 className="mb-10">View Toggle</h2>
        <div className="d-flex br-10">
          {list?.map((items, i) => (
            <div
              onClick={() => setCurrentState(i + 1)}
              style={{
                color: CurrentState === i + 1 ? "black" : "white",
                fontSize: "25px",
                backgroundColor: CurrentState === i + 1 ? "#A3FFD3" : "gray",
              }}
              className="p-20 br-5"
            >
              {items}
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => setState(true)}
        className="card-shadow align-items-center  bg-white br-20 p-10 d-flex flex-col"
      >
        <h2 className="mb-10">Have a Feedback?</h2>
        <button
          style={{ border: "none" }}
          className="br-10 fs-30 fw-700 p-20 br-green "
        >
          We're Listening!
        </button>
      </div>
    </div>
  );
}

export default LeftSideBar;
