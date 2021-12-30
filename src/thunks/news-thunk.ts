import { Dispatch } from "redux";
import { NewsActions } from "../slices/news-slice";

export const getNews = (page?: number) => async (dispatch: Dispatch) => {
  dispatch(NewsActions.setNewsRequest());
  try {
    const pathParams = page && page > 1 ? "?page=" + page : "";
    const data = await fetch(
      "https://gorest.co.in/public/v1/posts" + pathParams
    );
    dispatch(NewsActions.setNewsSuccess(data));
  } catch (error) {
    dispatch(NewsActions.setNewsFailure(error));
  }
};
