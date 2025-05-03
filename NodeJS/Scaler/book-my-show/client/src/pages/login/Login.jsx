import React from 'react';
import { Button, Form, Input, Row, Col, Typography, message } from 'antd';
import { Link } from 'react-router-dom';
import {LoginUser} from "../../calls/users.js";

const { Title } = Typography;

const onFinish = async(values) => {
    try{
        const response = await LoginUser(values);
        if(response.success){
            message.success(response.message);
            localStorage.setItem('token', response.token);
        }
    }catch(err){
        console.log(err);
        message.error(err.message);
    }
};

const Login = () => {
    return (
        <Row
            justify="center"
            align="start"
            style={{ height: '100vh', marginTop: '100px' }}
        >
            <Col>
                <div style={{ textAlign: 'center', marginBottom: 16 }}>
                    <Title level={1} style={{ marginBottom: 50 }}>Login to BookMyShow</Title>
                </div>

                <Form
                    onFinish={onFinish}
                    layout="vertical"
                    style={{ maxWidth: 1000, margin: '0 auto' }}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input type="email" placeholder="Enter your email" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input id="password" type='password' placeholder="Enter your password" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
                <div>
                    <p>New user? <Link to="/register" >Register</Link></p>
                </div>
            </Col>
        </Row>
    );
};

export default Login;
