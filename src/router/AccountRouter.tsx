import Alert from "@/component/Alert";
import LoginScreen from "@/page/Account/LoginScreen";
import RegisterScreen from "@/page/Account/RegisterScreen";
import useUserStore from "@/zustand/user";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const AccountRouterChildrens = [
  {
    path: "login",
    element: <LoginScreen />,
  },
  {
    path: "register",
    element: <RegisterScreen />,
  },
];

export const AccountRouter = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();

  useEffect(() => {
    if (user) {
      navigate(`/user/${user.id}`, { replace: true });
    }
  }, [user]);

  return (
    <>
      <Outlet />
      <Alert />
    </>
  );
};
