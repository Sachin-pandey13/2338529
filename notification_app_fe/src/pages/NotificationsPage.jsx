import { useEffect, useState } from "react";

import {
  Container,
  Typography,
  Pagination,
} from "@mui/material";

import FilterBar from "../components/FilterBar";
import NotificationList from "../components/NotificationList";
import { Log } from "../services/loggers";
import { getNotifications } from "../services/api";

const NotificationsPage = () => {
  const [notifications, setNotifications] =
    useState([]);

  const [filter, setFilter] =
    useState("");

  const [page, setPage] =
    useState(1);

  const limit = 3;

  const [
    viewedNotifications,
    setViewedNotifications,
  ] = useState([]);

  useEffect(() => {
    loadNotifications();

    const viewed =
      JSON.parse(
        localStorage.getItem(
          "viewedNotifications"
        )
      ) || [];

    setViewedNotifications(viewed);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [filter]);

  useEffect(() => {
    Log(
      "frontend",
      "info",
      "component",
      `Filter changed to ${
        filter || "All"
      }`
    );
  }, [filter]);

  const loadNotifications = async () => {
    try {
      await Log(
        "frontend",
        "info",
        "api",
        "Fetching notifications"
      );

      const data =
        await getNotifications();

      setNotifications(data);

      await Log(
        "frontend",
        "info",
        "api",
        "Notifications fetched successfully"
      );
    } catch (error) {
      await Log(
        "frontend",
        "error",
        "api",
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
      `Viewed notification ${id}`
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

  const filteredNotifications =
    filter === ""
      ? notifications
      : notifications.filter(
          (notification) =>
            notification.Type === filter
        );

  const startIndex =
    (page - 1) * limit;

  const paginatedNotifications =
    filteredNotifications.slice(
      startIndex,
      startIndex + limit
    );

  const totalPages = Math.ceil(
    filteredNotifications.length /
      limit
  );

  return (
    <Container sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
      >
        All Notifications
      </Typography>

      <FilterBar
        filter={filter}
        setFilter={setFilter}
      />

      <NotificationList
        title="All Notifications"
        notifications={
          paginatedNotifications
        }
        viewedNotifications={
          viewedNotifications
        }
        markAsViewed={
          markAsViewed
        }
      />

      <Pagination
        count={totalPages}
        page={page}
        onChange={(_, value) =>
          setPage(value)
        }
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 4,
        }}
      />
    </Container>
  );
};

export default NotificationsPage;