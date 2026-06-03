import Typography from "@mui/material/Typography";
import NotificationCard from "./NotificationCard";

const NotificationList = ({
  title = "Notifications",
  notifications = [],
  viewedNotifications = [],
  markAsViewed = () => {},
}) => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{ mt: 4, mb: 2 }}
      >
        {title}
      </Typography>

      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <NotificationCard
            key={notification.ID}
            notification={notification}
            viewed={viewedNotifications.includes(
              notification.ID
            )}
            onView={markAsViewed}
          />
        ))
      ) : (
        <Typography>
          No notifications found
        </Typography>
      )}
    </>
  );
};

export default NotificationList;