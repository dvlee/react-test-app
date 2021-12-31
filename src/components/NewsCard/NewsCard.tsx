import { Card, Typography } from "@mui/material";
import { ComponentType } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

interface NewsCardProps {
  item: Record<string, any>;
}
export const NewsCard: ComponentType<NewsCardProps> = ({ item }) => {
  return (
    <Card
      component={NavLink}
      to={ROUTES.NEWS_DETAILS.replace(":id", item.id)}
      sx={{ p: 2, display: "block" }}
    >
      <Typography variant="h6" mb={2} lineHeight={1.3}>
        {item.title}
      </Typography>
      <Typography variant="body1">
        {item.body.length > 200 ? item.body.substr(0, 200) + "..." : item.body}
      </Typography>
    </Card>
  );
};
