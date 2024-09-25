import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  FileOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { Link, Route, Routes } from "react-router-dom";
import DashboardPage from "./dashboard";

const { Header, Sider, Content } = Layout;

const Dashboard = () => <h2>Dashboard</h2>;
const Users = () => <h2>Foydalanuvchilar</h2>;
const Reports = () => <h2>Hisobotlar</h2>;

const AdminPage: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <div
          className="logo"
          style={{ color: "white", textAlign: "center", padding: "20px" }}
        >
          Admin Panel
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">

          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/adminPage">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/adminPage/users">Foydalanuvchilar</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FileOutlined />}>
            <Link to="/adminPage/reports">Hisobotlar</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, background: "#fff" }}
        />
        <Content style={{ margin: "16px", minHeight: "80vh" }}>
          <Routes>
            <Route index element={<DashboardPage />} />
            <Route path="/adminPage/users" element={<Users />} />
            <Route path="/adminPage/reports" element={<Reports />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminPage;
