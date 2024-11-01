import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAllCookies } from "../../helpers/cookie";
import { useEffect } from "react";
import { checkAuthen } from "../../actions/checkAuthen";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  deleteAllCookies();
  useEffect(() => {
    dispatch(checkAuthen(false));
    navigate("/login");
  }, []);
  return <></>;
}
export default Logout;
