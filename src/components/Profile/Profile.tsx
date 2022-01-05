import { Box, Button, Stack, Typography } from "@mui/material";
import { get } from "lodash";
import { ComponentType } from "react";
import { useAuth } from "../../hooks/useAuth";
import useStyles from "./styles";

export const Profile: ComponentType = () => {
  const classes = useStyles();

  const { user, logout } = useAuth();

  return (
    <Box className={classes.root}>
      <Stack direction="row">
        <img src="/assets/avatar.png" alt="avatar" width={150} />
        <Stack ml={3} alignItems="flex-start">
          <Typography variant="h4" fontWeight={700}>
            {get(user, "login")}
          </Typography>
          <Typography variant="body1">{get(user, "role")}</Typography>
          <Button
            size="small"
            variant="contained"
            color="info"
            sx={{ mt: "auto" }}
            onClick={logout}
          >
            Выйти
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
