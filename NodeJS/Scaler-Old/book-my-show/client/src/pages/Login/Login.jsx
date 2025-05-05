import React from 'react';
import { Button, Form, Input, Row, Col, Typography, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { LoginUser } from '../../calls/users';

const { Title } = Typography;

const Login = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const res = await LoginUser(values);

            console.log(res);

            if (res.message) {
                message.success(res.message);
                localStorage.setItem('token', res.token);
                navigate("/");
            } else {
                message.error(res.message || 'Login failed');
            }
        } catch (error) {
            message.error('An error occurred while logging in', error.message);
        }
    };

    return (
        <Row
            justify="center"
            align="start"
            style={{ height: '100vh', display: 'flex', alignItems: 'center' }}
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
                    <p>New user? <Link to="/register">Register</Link></p>
                </div>
            </Col>
        </Row>
    );
};

export default Login;
