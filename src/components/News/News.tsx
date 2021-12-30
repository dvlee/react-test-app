import { Box, Card, Grid, Pagination, Stack, Typography } from "@mui/material";
import { ComponentType, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../common/store";
import { useNews } from "../../hooks/useNews";
import { getNews } from "../../thunks/news-thunk";
import useStyles from "./styles";

export const News: ComponentType = () => {
  const classes = useStyles();

  const { fetchAll } = useNews();

  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const handleChangePage = () => {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [page]);

  const news = useSelector((state: State) => state.news);

  return (
    <Box className={classes.root}>
      <Grid container spacing={3}>
        {data &&
          data.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ p: 2 }}>
                <Typography variant="h6" mb={2} lineHeight={1.3}>
                  {item.title}
                </Typography>
                <Typography variant="body1">{item.body}</Typography>
              </Card>
            </Grid>
          ))}
      </Grid>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <Pagination page={page} count={pages} onChange={handleChangePage} />
      </Stack>
    </Box>
  );
};
