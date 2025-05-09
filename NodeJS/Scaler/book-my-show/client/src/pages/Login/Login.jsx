import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const onFinish = values => {
    console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};

const App = () => (
    <>
        <header className='App-header'>
            <main className='main-area mw-500 text-center px-3'>
                <section className="left-section">
                    <h1>Login to BookMyShow</h1>
                </section>
                <section className="right-section">
                    <Form
                        layout='vertical'
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
);
export default App;