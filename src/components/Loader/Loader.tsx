import { Box } from "@mui/material";
import { ComponentType } from "react";

export const Loader: ComponentType = () => {
  return (
    <Box textAlign="center">
      <img src="/assets/loading.gif" alt="loading" />
    </Box>
  );
};
