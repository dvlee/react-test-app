import { Box } from "@mui/material";
import { ComponentType } from "react";
import useStyles from "./styles";

export const Profile: ComponentType = () => {
  const classes = useStyles();
  return <Box className={classes.root}></Box>;
};
