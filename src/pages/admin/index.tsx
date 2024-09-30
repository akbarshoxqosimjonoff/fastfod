
import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import Account from "./account";
import Dashboard from "./dashboard";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import Chat from "./chat";
import Calendars from "./calendar";
import Buyurtma from "./buyurtma";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "0", <PieChartOutlined />),
  getItem("Users", "1", <UserOutlined />),
  getItem("Account", "2", <DesktopOutlined />),
  getItem("Mahsulotlar", "3", <UserOutlined />),
  getItem("Buyurtmalar", "4", <FileOutlined />),
  getItem("Kategoriya", "5", <FileOutlined />),
  getItem("Kalendar", "6", <TeamOutlined />),
  getItem("Eslatmalarim", "7", <TeamOutlined />),
  getItem("Chat", "8", <IoChatboxEllipsesOutline />),
  getItem("Sozlanmalar", "9", <DesktopOutlined />),
  getItem("Home", "10", <DesktopOutlined />),
];

const AdminPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string>("0");
  const navigate = useNavigate();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick = (e: any) => {
    setSelectedKey(e.key);
    if (e.key === "10") {
      navigate("/home");
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["0"]}
          mode="inline"
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>
              {selectedKey === "2"
                ? "Account"
                : selectedKey === "0"
                ? "Dashboard"
                : selectedKey === "3"
                ? "Mahsulotlar"
                : selectedKey === "4"
                ? "Buyurtmalar"
                : selectedKey === "5"
                ? "Kategoriya"
                : selectedKey === "6"
                ? "Kalendar"
                : selectedKey === "7"
                ? "Eslatmalarim"
                : selectedKey === "8"
                ? "Chat"
                : selectedKey === "9"
                ? "Sozlanmalar"
                : selectedKey === "10"
                ? "Home"
                : "Bill"}
            </Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {selectedKey === "0" ? (
              <Dashboard />
            ) : selectedKey === "2" ? (
              <Account />
            ) : selectedKey === "3" ? (
              "Mahsulotlar ko‘rsatildi."
            ) : selectedKey === "4" ? (
              <Buyurtma/>
            ) : selectedKey === "5" ? (
              "Kategoriya ko‘rsatildi."
            ) : selectedKey === "6" ? (
             <Calendars/>
            ) : selectedKey === "7" ? (
              "Eslatmalarim ko‘rsatildi."
            ) : selectedKey === "8" ? (
              <Chat/>
            ) : selectedKey === "9" ? (
              "Sozlanmalar ko‘rsatildi."
            ) : (
              "Bill is a cat."
            )}
          </div>
        </Content>
        <Footer style={{ textAlign: "center",fontWeight:"9002" }}>
          Fast-Food {new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminPage;
