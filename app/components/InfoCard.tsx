import { Card, CardContent, CardHeader, Fade, Typography } from "@mui/material";

interface InfoBoxProps {
  title: string;
  description: string;
  active: boolean;
}

export default function InfoBox({ title, description, active }: InfoBoxProps) {
  return (
    <Fade in={active} timeout={500}>
      <Card
        raised
        sx={{ width: 800, mr: 4, display: active ? "block" : "none" }}
      >
        <CardHeader title={title} />
        <CardContent>
          <Typography variant="h6">{description}</Typography>
        </CardContent>
      </Card>
    </Fade>
  );
}
