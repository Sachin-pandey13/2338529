import axios from "axios";
import { Log } from "./loggers";

const API_URL = "/api";

const ACCESS_TOKEN =
  import.meta.env.VITE_ACCESS_TOKEN;

export const getNotifications = async (
  page = 1,
  limit = 10,
  type = ""
) => {
  try {
    await Log(
      "frontend",
      "info",
      "api",
      `Fetching notifications page=${page} limit=${limit} type=${type || "All"}`
    );

    let url =
      `${API_URL}/notifications?page=${page}&limit=${limit}`;

    if (type) {
      url += `&notification_type=${type}`;
    }

    const response = await axios.get(
      url,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    const notifications =
      response.data.data ||
      response.data.notifications ||
      response.data;

    await Log(
      "frontend",
      "info",
      "api",
      `Fetched ${notifications.length || 0} notifications`
    );

    return notifications;
  } catch (error) {
    await Log(
      "frontend",
      "error",
      "api",
      error.message
    );

    console.error(error);
    return [];
  }
};