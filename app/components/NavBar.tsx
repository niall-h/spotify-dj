"use client";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Button,
  Container,
} from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import SPOTIFY_LOGO from "@/public/Spotify_Logo_White.png";
import Image from "next/image";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <AppBar position="static">
      <Toolbar disableGutters sx={{ height: "10vh" }}>
        <Container maxWidth="xl">
          {session && session.user ? (
            <Box
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                variant="body1"
                color="white"
                display="flex"
                alignItems="center"
              >
                <Avatar
                  src={session.user.image!}
                  alt={session.user.name ?? "Unavailable"}
                  sx={{ mr: 2 }}
                />
                {session.user.name}
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                onClick={() => signOut()}
              >
                Sign Out
              </Button>
            </Box>
          ) : (
            <Box display="flex" justifyContent="center">
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                onClick={() => signIn("spotify")}
              >
                <Image
                  width={30}
                  src={SPOTIFY_LOGO}
                  alt="Logo"
                  style={{ marginRight: 10 }}
                />
                Sign In
              </Button>
            </Box>
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
}
