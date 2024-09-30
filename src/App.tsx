import { ConfigProvider } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import Login from "@src/pages/login";
import Register from "@src/pages/login/reg";

import AdminPage from "@src/pages/admin";
import Account from "@src/pages/admin/account";
import DashboardPage from "@src/pages/admin/dashboard";
import Chat from "@src/pages/admin/chat";

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#FFAB08",
          },
        }}
      >
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminPage" element={<AdminPage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/chat" element={<Chat />} />

          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Register />} />
        </Routes>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
