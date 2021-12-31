import { AppBar, Button, Container, Stack } from "@mui/material";
import { ComponentType } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useAuth } from "../../hooks/useAuth";
import useStyles from "./styles";

export const Header: ComponentType = () => {
  const classes = useStyles();
  const { user } = useAuth();

  const pages = [
    { label: "Home", path: "/", loggedIn: null },
    { label: "News", path: "/news", loggedIn: null },
    { label: "Profile", path: "/profile", loggedIn: true },
    { label: "Login", path: "/login", loggedIn: false },
  ];

  return (
    <AppBar className={classes.root} position="static" sx={{ py: 2 }}>
      <Container>
        <Stack direction="row" spacing={2}>
          <Button
            component={NavLink}
            to={ROUTES.HOME}
            className={classes.navBtn}
          >
            Главная
          </Button>
          <Button
            component={NavLink}
            to={ROUTES.NEWS}
            className={classes.navBtn}
          >
            Новости
          </Button>
          {user && (
            <Button
              component={NavLink}
              to={ROUTES.PROFILE}
              className={classes.navBtn}
            >
              Профиль
            </Button>
          )}
          {!user && (
            <Button
              component={NavLink}
              to={ROUTES.LOGIN}
              className={classes.navBtn}
            >
              Войти
            </Button>
          )}
        </Stack>
      </Container>
    </AppBar>
  );
};
