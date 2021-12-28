import { ComponentType } from "react";
import { Home } from "../../components/Home";
import { BaseLayout } from "../../layouts/BaseLayout/BaseLayout";

export const HomePage: ComponentType = () => {
  return (
    <BaseLayout title="HomePage">
      <Home />
    </BaseLayout>
  );
};
