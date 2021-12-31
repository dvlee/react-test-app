import { createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
  list: {
    isLoading: boolean;
    error: string | null;
    data: Record<string, any>[] | null;
    meta: Record<string, any> | null;
  };
  post: {
    isLoading: boolean;
    error: string | null;
    data: Record<string, any> | null;
  };
}

const initialState: initialStateProps = {
  list: {
    isLoading: false,
    error: null,
    data: null,
    meta: null,
  },
  post: {
    isLoading: false,
    error: null,
    data: null,
  },
};

export const { actions: NewsActions, reducer: NewsReducer } = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNewsRequest: (state) => {
      state.list = {
        isLoading: true,
        error: null,
        data: null,
        meta: null,
      };
    },
    setNewsSuccess: (state, { payload }) => {
      state.list = {
        isLoading: false,
        error: null,
        data: payload.data,
        meta: payload.meta,
      };
    },
    setNewsFailure: (state, { payload }) => {
      state.list = {
        isLoading: false,
        error: payload,
        data: null,
        meta: null,
      };
    },

    setNewsPostRequest: (state) => {
      state.post = {
        isLoading: true,
        error: null,
        data: null,
      };
    },
    setNewsPostSuccess: (state, { payload }) => {
      state.post = {
        isLoading: false,
        error: null,
        data: payload.data,
      };
    },
    setNewsPostFailure: (state, { payload }) => {
      state.post = {
        isLoading: false,
        error: null,
        data: payload,
      };
    },
  },
});
