import { ComponentType } from "react";
import { News } from "../../components/News";
import { BaseLayout } from "../../layouts/BaseLayout/BaseLayout";

export const NewsPage: ComponentType = () => {
  return (
    <BaseLayout title="Новости">
      <News />
    </BaseLayout>
  );
};
