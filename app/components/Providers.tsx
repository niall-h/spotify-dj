"use client";

import { theme } from "@/lib/theme";
import { ThemeProvider, createTheme } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Providers(props: Props) {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider>{props.children}</SessionProvider>
    </ThemeProvider>
  );
}
