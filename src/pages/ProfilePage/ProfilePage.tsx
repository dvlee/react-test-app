import { ComponentType } from "react";
import { Profile } from "../../components/Profile";
import { BaseLayout } from "../../layouts/BaseLayout/BaseLayout";

export const ProfilePage: ComponentType = () => {
  return (
    <BaseLayout title="Profile">
      <Profile />
    </BaseLayout>
  );
};
