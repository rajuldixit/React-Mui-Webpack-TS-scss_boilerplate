import { Typography } from "@mui/material";
import "./App.scss";
import Stack from "@mui/material/Stack";

const App = () => {
  return (
    <Stack
      className={"main-container"}
      sx={{ color: { xs: "green", sm: "red" } }}
    >
      <Typography className={"text-style"}>hi</Typography>
    </Stack>
  );
};

export default App;
