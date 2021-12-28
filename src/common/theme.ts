import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*, *::before, *::after": {
          boxSizing: "border-box",
        },
        a: {
          textDecoration: "none",
        },
        p: {
          marginTop: 0,
        },
      },
    },
  },
});
