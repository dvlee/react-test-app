import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const options = {
  name: `News`,
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {},
  }),
  options
);

export default useStyles;
