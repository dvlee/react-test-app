import { Box, Typography } from "@mui/material";
import { ComponentType } from "react";
import useStyles from "./styles";

export const Home: ComponentType = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quos,
        aliquam corporis laborum, at harum et repudiandae rem enim praesentium
        temporibus labore commodi consequatur rerum eveniet nesciunt esse
        deserunt culpa!
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quod
        porro doloremque, voluptas, quasi sed suscipit repudiandae accusantium
        saepe adipisci nostrum voluptatem ut id tempora praesentium a, inventore
        rem error.
      </Typography>
    </Box>
  );
};
