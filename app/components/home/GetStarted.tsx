"use client";
import {
  Alert,
  Box,
  Button,
  ButtonProps,
  Card,
  CardContent,
  CardHeader,
  Fade,
  Typography,
} from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import SPOTIFY_LOGO from "@/public/Spotify_Logo_White.png";

export default function GetStarted({ active }: { active: boolean }) {
  const { data: session } = useSession();

  const buttonProps = session
    ? {
        href: "/playlist",
      }
    : {
        onClick: () => signIn("spotify", { callbackUrl: "/playlist" }),
      };

  return (
    <Fade in={active} timeout={500}>
      <Card
        raised
        sx={{ width: 800, mr: 4, display: active ? "block" : "none" }}
      >
        <CardHeader
          title="Get Started"
          titleTypographyProps={{ variant: "h4" }}
        />
        <CardContent>
          <Typography paragraph>
            A good DJ always knows their songs. They carefully observe the
            dancefloor, reading each and every move of the crowd, and curate a
            playlist that will keep the energy going throughout the night. These
            important reins will now be handed to you!
          </Typography>
          <Typography paragraph>
            Your job is to create that playlist. Select the songs you want and
            the DJ will beatmatch them for you. And remember, song selection is
            important!
          </Typography>
          {session ? null : (
            <Typography sx={{ fontStyle: "italic" }}>
              * You are not signed in currently. Please sign in to continue:
            </Typography>
          )}
          <Box
            height={150}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              sx={{
                borderRadius: 15,
                p: 2,
                width: 350,
              }}
              {...buttonProps}
            >
              <Typography
                variant="h5"
                color="white"
                sx={{ textTransform: "none" }}
              >
                {session ? "Create Playlist" : "Sign in with Spotify"}
              </Typography>
              <Image
                width={30}
                src={SPOTIFY_LOGO}
                alt="Logo"
                style={{ marginLeft: 10 }}
              />
            </Button>
          </Box>
          <Alert severity="info">
            Note: At this time, the DJ will only function properly with a
            premium Spotify account.
          </Alert>
        </CardContent>
      </Card>
    </Fade>
  );
}
