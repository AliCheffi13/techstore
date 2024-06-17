import { useLocalStorage } from "../Hooks/useLocalStorage";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const [auth] = useLocalStorage("auth-token", "");
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
