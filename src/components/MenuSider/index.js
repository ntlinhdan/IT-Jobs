import { Menu } from "antd";
import {
  PlayCircleOutlined,
  RightCircleOutlined,
  LogoutOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function MenuSider() {
  const items = [
    {
      label: <Link to="/admin">Tổng quan</Link>,
      icon: <PlayCircleOutlined />,
      key: "menu-1"
    },
    {
      label: <Link to="/info-company">Thông tin công ty</Link>,
      icon: <RightCircleOutlined />,
      key: "menu-2"
    },
    {
      label: <Link to="/jobs-manage">Quản lý việc làm</Link>,
      icon: <LogoutOutlined />,
      key: "menu-3",
    },
    {
      label: <Link to="/cv-manage">Quản lý CV</Link>,
      icon: <BookOutlined />,
      key: "/menu-4",
    },
  ];
  return (
    <>
      <Menu mode="inline" items={items} defaultSelectedKeys={["/"]} />
    </>
  );
}
export default MenuSider;
