"use client";

import { ThemeProvider, createTheme } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#1DB954",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

export default function Providers(props: Props) {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider>{props.children}</SessionProvider>
    </ThemeProvider>
  );
}
