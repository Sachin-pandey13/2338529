import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Box, Button } from "@mui/material";

import NotificationsPage from "./pages/NotificationsPage";
import PriorityPage from "./pages/PriorityPage";

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          mt: 2,
        }}
      >
        <Button
          component={Link}
          to="/"
          variant="contained"
        >
          ALL NOTIFICATIONS
        </Button>

        <Button
          component={Link}
          to="/priority"
          variant="contained"
        >
          PRIORITY NOTIFICATIONS
        </Button>
      </Box>

      <Routes>
        <Route
          path="/"
          element={<NotificationsPage />}
        />

        <Route
          path="/priority"
          element={<PriorityPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;