import { ComponentType, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { State } from "../../common/store";
import { Loader } from "../../components/Loader";
import { NewsDetails } from "../../components/NewsDetails";
import { BaseLayout } from "../../layouts/BaseLayout/BaseLayout";
import { getPost } from "../../thunks/news-thunk";

export const NewsDetailsPage: ComponentType = () => {
  const params: Record<string, any> = useParams();
  const { isLoading, data } = useSelector((state: State) => state.news.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <Loader />;

  if (!data) return null;

  return (
    <BaseLayout title={data.title}>
      <NewsDetails data={data} />
    </BaseLayout>
  );
};
