import axios from "axios";

const ACCESS_TOKEN =
  import.meta.env.VITE_ACCESS_TOKEN;

export const Log = async (
  stack,
  level,
  pkg,
  message
) => {
  try {
    await axios.post(
      "/api/evaluation-service/logs",
      {
        stack,
        level,
        package: pkg,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
  } catch (error) {
    console.error(
      "Logging failed:",
      error.message
    );
  }
};