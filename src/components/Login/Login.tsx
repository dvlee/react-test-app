import {
  Button,
  Card,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { ComponentType } from "react";
import { useAuth } from "../../hooks/useAuth";
import {
  FIELD_LOGIN,
  FIELD_PASSWORD,
  LoginValidationSchema,
} from "./LoginValidationSchema";

export const Login: ComponentType = () => {
  const { login } = useAuth();

  const handleSubmit = () => {
    login(formik.values);
  };

  const formik = useFormik({
    initialValues: {
      [FIELD_LOGIN]: "",
      [FIELD_PASSWORD]: "",
    },
    onSubmit: handleSubmit,
    validationSchema: LoginValidationSchema,
  });

  return (
    <Container maxWidth="xs">
      <Card sx={{ p: 6, mt: 10 }}>
        <form onSubmit={formik.handleSubmit}>
          <Typography textAlign="center" variant="h4" mb={3}>
            Авторизация
          </Typography>
          <Stack>
            <TextField
              {...formik.getFieldProps(FIELD_LOGIN)}
              label="Login"
              sx={{ mb: 3 }}
            />
            <TextField
              {...formik.getFieldProps(FIELD_PASSWORD)}
              label="Password"
              sx={{ mb: 3 }}
            />
            <Stack alignItems="flex-end">
              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
              >
                Log in
              </Button>
            </Stack>
          </Stack>
        </form>
      </Card>
    </Container>
  );
};
