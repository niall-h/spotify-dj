"use client";
import {
  Box,
  Container,
  FormControlLabel,
  Grid,
  RadioGroup,
  Typography,
} from "@mui/material";
import NavBar from "./components/NavBar";
import StyledRadio from "./components/StyledRadio";
import { useState } from "react";
import backgroundImage from "../public/background.png";
import Image from "next/image";
import InfoCard from "./components/InfoCard";
import { INFO_TEXT } from "@/lib/info-text";

export default function Home() {
  const [checked, setChecked] = useState([true, false, false]);
  const [hover, setHover] = useState([false, false, false]);

  // const handleClick = (index: number) => {
  //   const tempArr = checked.map((_, n) => (n === index ? true : false));
  //   setChecked(tempArr);
  //   setCurrent(index);
  // };

  return (
    <>
      <Image
        src={backgroundImage}
        alt="background"
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          zIndex: -1,
          objectFit: "cover",
        }}
      />
      <NavBar />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Box
              height="90vh"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <RadioGroup defaultValue="About">
                <FormControlLabel
                  value="Introduction"
                  control={
                    <StyledRadio checked={hover[0] ? true : checked[0]} />
                  }
                  onClick={() => setChecked([true, false, false])}
                  onMouseOver={() => setHover([true, false, false])}
                  onMouseOut={() => setHover([false, false, false])}
                  label={
                    <Typography
                      variant="h5"
                      color={checked[0] ? "primary" : "black"}
                    >
                      Introduction
                    </Typography>
                  }
                  sx={{ my: 2 }}
                />
                <FormControlLabel
                  value="How It Works"
                  control={
                    <StyledRadio checked={hover[1] ? true : checked[1]} />
                  }
                  onClick={() => setChecked([false, true, false])}
                  onMouseOver={() => setHover([false, true, false])}
                  onMouseOut={() => setHover([false, false, false])}
                  label={
                    <Typography
                      variant="h5"
                      color={checked[1] ? "primary" : "black"}
                    >
                      How It Works
                    </Typography>
                  }
                  sx={{ my: 2 }}
                />
                <FormControlLabel
                  value="Get Started"
                  control={
                    <StyledRadio checked={hover[2] ? true : checked[2]} />
                  }
                  onClick={() => setChecked([false, false, true])}
                  onMouseOver={() => setHover([false, false, true])}
                  onMouseOut={() => setHover([false, false, false])}
                  label={
                    <Typography
                      variant="h5"
                      color={checked[2] ? "primary" : "black"}
                    >
                      Get Started
                    </Typography>
                  }
                  sx={{ my: 2 }}
                />
              </RadioGroup>
            </Box>
          </Grid>
          <Grid item md={8}>
            <Box
              height="90vh"
              display="flex"
              alignItems="center"
              justifyContent="left"
            >
              {Object.keys(INFO_TEXT).map((title, index) => (
                <InfoCard
                  title={title}
                  description={INFO_TEXT[title]}
                  active={checked[index]}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
