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
                    <h1>Register to BookMyShow</h1>
                </section>
                <section className="right-section">
                    <Form
                        layout='vertical'
                    >
                        <Form.Item
                            label="Name"
                            htmlFor='name'
                            name="name"
                            className='d-block'
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input />
                        </Form.Item>
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
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                    <div>
                        <p>Already a user? <Link to="/login">Login now</Link></p>
                    </div>
                </section>
            </main>
        </header>
    </>
);
export default App;