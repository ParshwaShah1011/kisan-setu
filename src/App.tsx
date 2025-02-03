import React from "react";
import { Layout, Menu, Button } from "antd";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { logout } from "./redux/userSlice";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Layout>
      {/* Header */}
      <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Left Side: Logo */}
        <div style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            MyShop
          </Link>
        </div>

        {/* Center: Navigation Menu */}
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} style={{ flex: 1, justifyContent: "center" }}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/cart">Cart</Link>
          </Menu.Item>
          {isAuthenticated && (
            <Menu.Item key="3">
              <Link to="/profile">Profile</Link>
            </Menu.Item>
          )}
        </Menu>

        {/* Right Side: Login/Signup or Logout */}
        <div>
          {isAuthenticated ? (
            <Button type="primary" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button onClick={() => navigate("/login")} style={{ marginRight: "10px" }}>
                Login
              </Button>
              <Button type="primary" onClick={() => navigate("/signup")}>
                Signup
              </Button>
            </>
          )}
        </div>
      </Header>

      {/* Content */}
      <Content style={{ padding: "20px 50px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Content>

      {/* Footer */}
      <Footer style={{ textAlign: "center" }}>MyShop ©{new Date().getFullYear()} Created by You</Footer>
    </Layout>
  );
};

export default App;
