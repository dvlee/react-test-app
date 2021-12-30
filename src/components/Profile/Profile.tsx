import { Box, Button, Stack, Typography } from "@mui/material";
import { ComponentType } from "react";
import useStyles from "./styles";

export const Profile: ComponentType = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Stack direction="row">
        <img src="/assets/avatar.png" alt="avatar" width={150} />
        <Stack ml={3} alignItems="flex-start">
          <Typography variant="h4" fontWeight={700}>
            admin
          </Typography>
          <Typography variant="body1">Администратор</Typography>
          <Button
            size="small"
            variant="contained"
            color="info"
            sx={{ mt: "auto" }}
          >
            Logout
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
