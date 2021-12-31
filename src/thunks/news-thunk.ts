import { Dispatch } from "redux";
import { ApiFetch } from "../http/api-config";
import { NewsActions } from "../slices/news-slice";
import { API_ENDPOINTS } from "./../constants/api-endpoints";

const { POSTS, POST } = API_ENDPOINTS.NEWS;

const {
  setNewsFailure,
  setNewsPostFailure,
  setNewsPostRequest,
  setNewsPostSuccess,
  setNewsRequest,
  setNewsSuccess,
} = NewsActions;

export const getNews =
  (params?: Record<string, any>) => async (dispatch: Dispatch) => {
    dispatch(setNewsRequest());
    try {
      const apiUrl = [POSTS, new URLSearchParams(params).toString()].join("?");
      const data = await ApiFetch(apiUrl);
      dispatch(setNewsSuccess(data));
    } catch (error) {
      dispatch(setNewsFailure(error));
    }
  };

export const getPost = (id: string | number) => async (dispatch: Dispatch) => {
  dispatch(setNewsPostRequest());
  try {
    const data = await ApiFetch(POST.replace(":id", id.toString()));
    dispatch(setNewsPostSuccess(data));
  } catch (error) {
    dispatch(setNewsPostFailure(error));
  }
};
