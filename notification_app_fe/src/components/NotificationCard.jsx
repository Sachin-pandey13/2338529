import {
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

const NotificationCard = ({
  notification,
  viewed,
  onView,
}) => {
  return (
    <Card
      sx={{
        mb: 2,
        cursor: "pointer",
      }}
      onClick={() => onView(notification.ID)}
    >
      <CardContent>

        <Chip
          label={
            viewed
              ? "Viewed"
              : "Unread"
          }
          color={
            viewed
              ? "success"
              : "error"
          }
          sx={{ mb: 2 }}
        />

        <Typography variant="h6">
          {notification.Type}
        </Typography>

        <Typography>
          {notification.Message}
        </Typography>

        <Typography
          variant="caption"
          color="text.secondary"
        >
          {notification.Timestamp}
        </Typography>

      </CardContent>
    </Card>
  );
};

export default NotificationCard;