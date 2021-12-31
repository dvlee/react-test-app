import { Box, Typography } from "@mui/material";
import { ComponentType } from "react";
import useStyles from "./styles";

interface NewsDetailsProps {
  data: Record<string, any>;
}
export const NewsDetails: ComponentType<NewsDetailsProps> = ({ data }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography>{data.body}</Typography>
    </Box>
  );
};
