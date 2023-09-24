import { Card, CardContent, CardHeader, Fade, Typography } from "@mui/material";

export default function Introduction({ active }: { active: boolean }) {
  return (
    <Fade in={active} timeout={500}>
      <Card
        raised
        sx={{ width: 800, mr: 4, display: active ? "block" : "none" }}
      >
        <CardHeader
          title="Introduction"
          titleTypographyProps={{ variant: "h4" }}
        />
        <CardContent>
          <Typography variant="h6">Loren ipsum</Typography>
        </CardContent>
      </Card>
    </Fade>
  );
}
