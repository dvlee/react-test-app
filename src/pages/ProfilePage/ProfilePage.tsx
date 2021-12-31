import { ComponentType, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Profile } from "../../components/Profile";
import { ROUTES } from "../../constants/routes";
import { useAuth } from "../../hooks/useAuth";
import { BaseLayout } from "../../layouts/BaseLayout/BaseLayout";

export const ProfilePage: ComponentType = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate(ROUTES.LOGIN);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <BaseLayout title="Profile">
      <Profile />
    </BaseLayout>
  );
};
