import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { LoginUser } from '../../calls/users';
import { useEffect } from 'react';

const App = () => {

    const navigate = useNavigate();
    const handleLogin = async (values) => {

        try {

            const data = await LoginUser(values);
            console.log(data);
            localStorage.setItem('token', data.token);
            navigate('/')

        } catch (err) {
            console.log(err)
        }
    };

    return (
        <>
            <header className='App-header'>
                <main className='main-area mw-500 text-center px-3'>
                    <section className="left-section">
                        <h1>Login to BookMyShow</h1>
                    </section>
                    <section className="right-section">
                        <Form
                            layout='vertical'
                            onFinish={handleLogin}
                        >
                            <Form.Item
                                label="Email"
                                htmlFor='email'
                                name="email"
                                className='d-block'
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                htmlFor='password'
                                className='d-block'
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item label={null}>
                                <Button type="primary" htmlType="submit">
                                    Login
                                </Button>
                            </Form.Item>
                        </Form>
                        <div>
                            <p>New User? <Link to="/register">Register now</Link></p>
                        </div>
                    </section>
                </main>
            </header>
        </>
    )
};
export default App;