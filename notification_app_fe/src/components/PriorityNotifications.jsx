import Typography from "@mui/material/Typography";

import NotificationCard from "./NotificationCard";

const PriorityNotifications = ({
  notifications,
}) => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{ mb: 2 }}
      >
        Top Priority Notifications
      </Typography>

      {notifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
        />
      ))}
    </>
  );
};

export default PriorityNotifications;