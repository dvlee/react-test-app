import { Box, Grid, Pagination, Stack } from "@mui/material";
import { get } from "lodash";
import { ComponentType, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { State } from "../../common/store";
import { getNews } from "../../thunks/news-thunk";
import { Loader } from "../Loader";
import { NewsCard } from "../NewsCard";
import useStyles from "./styles";

export const News: ComponentType = () => {
  const classes = useStyles();

  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const { isLoading, data, meta } = useSelector(
    (state: State) => state.news.list
  );

  const [page, setPage] = useState(
    searchParams.get("page") || get(meta, "pagination.page", 1)
  );
  const pages = get(meta, "pagination.pages", 1);

  useEffect(() => {
    dispatch(getNews({ page }));
    setSearchParams({ page });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  if (isLoading) return <Loader />;

  if (!data) return null;

  return (
    <Box className={classes.root}>
      <Grid container spacing={3}>
        {data &&
          data.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <NewsCard item={item} />
            </Grid>
          ))}
      </Grid>
      <Stack direction="row" alignItems="center" justifyContent="center" mt={4}>
        <Pagination
          page={parseInt(page)}
          count={pages}
          onChange={handleChangePage}
        />
      </Stack>
    </Box>
  );
};
