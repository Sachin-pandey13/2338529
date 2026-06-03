import { useEffect, useState } from "react";

import {
  Container,
  Typography,
} from "@mui/material";

import NotificationList from "../components/NotificationList";
import { getNotifications } from "../services/api";
import { getPriorityNotifications } from "../utils/priorityUtils";
import { Log } from "../services/loggers";

const PriorityPage = () => {
  const [
    priorityNotifications,
    setPriorityNotifications,
  ] = useState([]);

  const [
    viewedNotifications,
    setViewedNotifications,
  ] = useState([]);

  useEffect(() => {
    loadPriorityNotifications();

    const viewed =
      JSON.parse(
        localStorage.getItem(
          "viewedNotifications"
        )
      ) || [];

    setViewedNotifications(viewed);
  }, []);

  const loadPriorityNotifications =
    async () => {
      try {
        await Log(
          "frontend",
          "info",
          "page",
          "Priority page loaded"
        );

        const notifications =
          await getNotifications();

        const sorted =
          getPriorityNotifications(
            notifications
          );

        setPriorityNotifications(
          sorted
        );

        await Log(
          "frontend",
          "info",
          "component",
          "Priority notifications generated"
        );
      } catch (error) {
        await Log(
          "frontend",
          "error",
          "page",
          error.message
        );
      }
    };

  const markAsViewed = (id) => {
    if (
      viewedNotifications.includes(id)
    ) {
      return;
    }

    Log(
      "frontend",
      "info",
      "component",
      `Viewed priority notification ${id}`
    );

    const updated = [
      ...viewedNotifications,
      id,
    ];

    setViewedNotifications(updated);

    localStorage.setItem(
      "viewedNotifications",
      JSON.stringify(updated)
    );
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
      >
        Top Priority Notifications
      </Typography>

      <NotificationList
        title="Priority Notifications"
        notifications={
          priorityNotifications
        }
        viewedNotifications={
          viewedNotifications
        }
        markAsViewed={
          markAsViewed
        }
      />
    </Container>
  );
};

export default PriorityPage;