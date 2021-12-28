import { AppBar, Button, Container, Stack } from "@mui/material";
import { ComponentType } from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

export const Header: ComponentType = () => {
  const classes = useStyles();

  const pages = [
    { label: "Home", path: "/" },
    { label: "News", path: "/news" },
    { label: "Profile", path: "/profile" },
    { label: "Login", path: "/login" },
  ];

  return (
    <AppBar className={classes.root} position="static" sx={{ py: 2 }}>
      <Container>
        <Stack direction="row">
          {pages.map((page: Record<string, any>, index: number) => (
            <Button
              component={Link}
              to={page.path}
              key={index}
              sx={{ color: "#FFF" }}
            >
              {page.label}
            </Button>
          ))}
        </Stack>
      </Container>
    </AppBar>
  );
};
