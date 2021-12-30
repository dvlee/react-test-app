export const useNews = () => {
  const PUBLIC_POSTS_API_URL = "https://gorest.co.in/public/v1/posts";

  const fetchAll = (page?: number) => {
    const queryPage = (page && page > 1 && `?page=${page}`) || "";
    fetch(PUBLIC_POSTS_API_URL + queryPage)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  };
  const fetchPost = (id: number) => {};

  return { fetchAll, fetchPost };
};
