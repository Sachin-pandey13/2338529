import { Log } from "./loggers";

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

    const data = [
      {
        ID: "1",
        Type: "Event",
        Message: "Tech Fest",
        Timestamp: "2026-04-22 17:49:18",
      },
      {
        ID: "2",
        Type: "Placement",
        Message: "Microsoft Hiring",
        Timestamp: "2026-04-22 17:51:18",
      },
      {
        ID: "3",
        Type: "Result",
        Message: "Mid Sem Result",
        Timestamp: "2026-04-22 17:50:18",
      },
      {
        ID: "4",
        Type: "Placement",
        Message: "AMD Hiring",
        Timestamp: "2026-04-22 17:55:18",
      },
      {
        ID: "5",
        Type: "Event",
        Message: "Hackathon",
        Timestamp: "2026-04-22 17:58:18",
      },
    ];

    await Log(
      "frontend",
      "info",
      "api",
      `Fetched ${data.length} notifications`
    );

    return data;
  } catch (error) {
    await Log(
      "frontend",
      "error",
      "api",
      error.message
    );

    return [];
  }
};