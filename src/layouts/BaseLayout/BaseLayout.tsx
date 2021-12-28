import { Box, Container, Typography } from "@mui/material";
import { ComponentType, ReactNode } from "react";
import { Header } from "../../components/Header";

interface BaseLayoutProps {
  title?: string;
  children: ReactNode;
}
export const BaseLayout: ComponentType<BaseLayoutProps> = ({
  title,
  children,
}) => {
  return (
    <Box>
      <Header />
      <Container>
        {title && (
          <Typography variant="h3" my={2}>
            {title}
          </Typography>
        )}

        {children}
      </Container>
    </Box>
  );
};
