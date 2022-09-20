
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { Card } from "antd";
import abc from '../images/abc.jpg';
import 'antd/dist/antd.css';
//import { Form, Icon, Input, Button, Checkbox } from 'antd';

import '../styles/login.css'



const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

 
  /*const Login = () => {
    const onFinish = values => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };*/

  return (
    /*
    <>

    <div className="login-page">
    <div className="login-box">
      <div className="illustration-wrapper">
        <img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="Login"/>
      </div>
      <antd.Form
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <p className="form-title">Welcome back</p>
        <p>Login to the Dashboard</p>
        <antd.Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <antd.Input
            placeholder="Username"
          />
        </antd.Form.Item>

        <antd.Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <antd.Input.Password 
            placeholder="Password"
          />
        </antd.Form.Item>

        <antd.Form.Item name="remember" valuePropName="checked">
          <antd.Checkbox>Remember me</antd.Checkbox>
        </antd.Form.Item>

        <antd.Form.Item>
          <antd.Button type="primary" htmlType="submit" className="login-form-button">
            LOGIN
          </antd.Button>
        </antd.Form.Item>
      </antd.Form>
    </div>
  </div>
</>*/
<>

    <div className="right">
    
      <Card className="card"
      title={<div style={{color: 'orange', textAlign: 'center', fontSize: '25px'}}><u>RECIPE</u></div>}
    
        bordered={true}
        
      >
       <div className="head"><p style={{color:'white'}}><i>Simple recipes that use ingredients you probably already have in<strong> kitchen.</strong></i></p>
      
       </div> 
        <label  style={{color: 'white', textAlign: 'center', fontSize: '45px',fontFamily:"sans-serif"}}>C<u>OCKTAIL RECIP</u>E</label> 
        <div className="align">
       
        <Form
          
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
              },
              { type : 'email', message: "Please enter a valid email ID" }
            ]}
          >
            <label className="email">Email</label>
            <Input className="input"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email-ID"
              
             
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your Password!",
              },
            ]}
          >
             <label className="password">Password</label>
            <Input className="input"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox style={{color:"white"}} >Remember me</Checkbox>
            </Form.Item>

            
          </Form.Item>

          <Form.Item>
            <Button
            //href= "Signup"
              type="primary"
              htmlType="submit"
              className="login-form-button"
              shape= "round"
            >
             <b>Log in</b> 
            </Button> 
            <label className="account">Don't have an account?
            <a className="register"  href="Signup">Sign up</a> </label>
          </Form.Item>
        </Form>
        </div>
      </Card>
    </div>

    </>
  );
};

export default Login;
