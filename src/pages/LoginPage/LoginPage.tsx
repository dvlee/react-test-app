import { ComponentType } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../../components/Login";
import { ROUTES } from "../../constants/routes";
import { useAuth } from "../../hooks/useAuth";
import { BaseLayout } from "../../layouts/BaseLayout/BaseLayout";

interface LoginPageProps {
  isLoggedIn: boolean;
}
export const LoginPage: ComponentType<LoginPageProps> = ({ isLoggedIn }) => {
  const naviagate = useNavigate();
  const { authorized, signin } = useAuth();
  if (authorized) naviagate(ROUTES.PROFILE);

  return (
    <BaseLayout>
      <Login />
    </BaseLayout>
  );
};
