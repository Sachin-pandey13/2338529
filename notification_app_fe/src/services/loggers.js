// logging_middleware/logger.js

import axios from "axios";

export const Log = async (
  stack,
  level,
  pkg,
  message,
  token
) => {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: pkg,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Logging failed:", error);
  }
};