import { ComponentType } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../../components/Login";
import { BaseLayout } from "../../layouts/BaseLayout/BaseLayout";

export const LoginPage: ComponentType = () => {
  const naviagate = useNavigate();

  return (
    <BaseLayout>
      <Login />
    </BaseLayout>
  );
};
