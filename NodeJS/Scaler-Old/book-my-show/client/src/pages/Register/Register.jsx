import React from 'react'
import { Button, Form, Input, Row, Col, Typography, message } from 'antd';
import { Link } from 'react-router-dom';
import { RegisterUser } from '../../calls/users';

const { Title } = Typography;

const onFinish = async (values) => {
    const res = await RegisterUser(values);

    if (res.success) {
        message.success(res.message);
        localStorage.setItem('token', res.data);
    }
    else {
        message.error(res.message);
    }
};


const Register = () => {
    return (
        <Row
            justify="center"
            align="start"
            style={{ height: '100vh', display: 'flex', alignItems: 'center' }}
        >
            <Col>
                <div style={{ textAlign: 'center', marginBottom: 16 }}>
                    <Title level={1} style={{ marginBottom: 50 }}>Register to BookMyShow</Title>
                </div>

                <Form
                    onFinish={onFinish}
                    layout="vertical"
                    style={{ maxWidth: 1000, margin: '0 auto' }}
                >

                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input type="name" placeholder="Enter your name" />
                    </Form.Item>

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
                            Register
                        </Button>
                    </Form.Item>
                </Form>
                <div>
                    <p>Already a user? <Link to="/login" >Login</Link></p>
                </div>
            </Col>
        </Row>
    )
}

export default Register
