import { ComponentType, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../../components/Login";
import { ROUTES } from "../../constants/routes";
import { useAuth } from "../../hooks/useAuth";
import { BaseLayout } from "../../layouts/BaseLayout/BaseLayout";

export const LoginPage: ComponentType = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate(ROUTES.HOME);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <BaseLayout>
      <Login />
    </BaseLayout>
  );
};
