import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { GetCurrentUser } from './../calls/users';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { hideLoading, showLoading } from '../redux/loaderSlice';
import { Layout, Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { HomeOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";

const ProtectedRoute = ({ children }) => {

    const { user } = useSelector(store => store.user);
    const { loader } = useSelector(store => store.loader);

    const navItems = [
        {
            key: "home",
            label: "Home",
            icon: <HomeOutlined />,
            onClick: () => {
                navigate("/");
            }
        },
        {
            key: "user",
            label: "My Profile",
            icon: <UserOutlined />,
            children: [
                {
                    key: "profile",
                    label: "My Profile",
                    icon: <UserOutlined />,
                },
                {
                    key: "logout",
                    label: "Logout",
                    icon: <LogoutOutlined />,
                    onClick: () => {
                        localStorage.removeItem("token");
                        navigate("/login");
                    },
                },
            ],
        },
    ];

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const getUser = async () => {
            try {
                dispatch(showLoading());
                const res = await GetCurrentUser();

                if (res.data.success) {
                    dispatch(setUser(res.data.data));
                } else {
                    navigate('/login')
                }

            } catch (err) {
                console.log("Error fetching user:", err);
            } finally {
                dispatch(hideLoading());
            }
        };

        if (localStorage.getItem('token')) {
            getUser();
        } else {
            navigate('/login');
        }
    }, []);

    if (loader) {
        return <>Loading...</>
    }

    return (
        <>
            <Layout>
                <Header
                    className="d-flex justify-content-between"
                    style={{
                        position: "sticky",
                        top: 0,
                        zIndex: 1,
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <h3 className="demo-logo text-white m-0" style={{ color: "white" }}>
                        Book My Show
                    </h3>
                    <Menu theme="dark" mode="horizontal" items={navItems} />
                </Header>
                <div style={{ padding: 24, minHeight: 380, background: "#fff" }}>
                    {children}
                </div>
            </Layout>
        </>
    )
}

export default ProtectedRoute
