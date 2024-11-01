import { useSelector } from "react-redux";
import { Layout } from "antd";

import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import MenuSider from "../../components/MenuSider";
import "./LayoutAdmin.scss";

const { Header, Sider, Content } = Layout;

function LayoutAdmin() {
  const authen = useSelector((state) => state.loginReducer);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="layout-admin">
      <Header className="layout-admin__header">
        <div className="layout-admin__header-logo">IT Admin</div>
        <div className="layout-admin__header-button">
          <button>
            <NavLink to="/">Trang chủ</NavLink>
          </button>
          <button>
            <NavLink to="/logout">Đăng xuất</NavLink>
          </button>
        </div>
      </Header>
      <Layout
        className={`layout-admin__main ${
          collapsed ? "layout-admin__main--fold" : ""
        }`}
      >
        <Sider
          breakpoint="lg"
          className="layout-admin__sider"
          theme="light"
          collapsed={collapsed}
          width={230}
          onBreakpoint={(e) => setCollapsed(e)}
        >
          <MenuSider />
        </Sider>
        <Content className="layout-admin__content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default LayoutAdmin;

