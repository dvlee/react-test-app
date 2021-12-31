import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const options = {
  name: `Header`,
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {},
    navBtn: {
      color: theme.palette.common.white,
      "&.active": {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.primary.main,
      },
    },
  }),
  options
);

export default useStyles;
