import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#1DB954",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});
