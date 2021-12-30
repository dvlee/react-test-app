import { createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
  isLoading: boolean;
  error: string | null;
  list: Record<string, any> | null;
}

const initialState: initialStateProps = {
  isLoading: false,
  error: null,
  list: null,
};

export const { actions: NewsActions, reducer: NewsReducer } = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNewsRequest: (state) => {
      state = {
        isLoading: true,
        error: null,
        list: null,
      };
    },
    setNewsSuccess: (state, action) => {
      state = {
        isLoading: false,
        error: null,
        list: action.payload,
      };
    },
    setNewsFailure: (state, action) => {
      state = {
        isLoading: false,
        error: null,
        list: action.payload,
      };
    },
  },
});
