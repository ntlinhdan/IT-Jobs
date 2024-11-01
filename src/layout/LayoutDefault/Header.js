import { NavLink } from "react-router-dom";
import "./LayoutDefault.scss";
import { getCookie } from "../../helpers/cookie";
import { useSelector } from "react-redux";

function Header() {
  const token = getCookie("token");
  const isLogin = useSelector(state => state.loginReducer);

  return (
    <>
      <div className="layout-default__header">
        <div className="layout-default__header__logo">
					<a href="/">IT Jobs</a>
				</div>
        
        <div className="layout-default__header__account">
          {token ? (
              <>
                <button><NavLink to="/admin">Quản lý</NavLink></button>
                <button><NavLink to="/logout">Đăng xuất</NavLink></button>
              </>
            ) : (
              <>
                <button><NavLink to="/login">Đăng nhập</NavLink></button>
                <button><NavLink to="/register">Đăng ký</NavLink></button>
              </>
            )}
					
        </div>
      </div>
    </>
  );
}
export default Header;
