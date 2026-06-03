import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";

import { mockNotifications } from "../data/mockNotifications";
import { getPriorityNotifications } from "../utils/priorityUtils";

import PriorityNotifications from "../components/PriorityNotifications";
import NotificationList from "../components/NotificationList";

const Dashboard = () => {
  const [notifications, setNotifications] = useState([]);
  const [priorityNotifications, setPriorityNotifications] = useState([]);

  useEffect(() => {
    setNotifications(mockNotifications);

    setPriorityNotifications(
      getPriorityNotifications(mockNotifications)
    );
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Campus Notifications
      </Typography>

      <PriorityNotifications
        notifications={priorityNotifications}
      />

      <NotificationList
        notifications={notifications}
      />
    </Container>
  );
};

export default Dashboard;