import { Grow, Radio } from "@mui/material";
import HeadphonesIcon from "@mui/icons-material/Headphones";

interface StyledRadioProps {
  checked: boolean;
}

export default function StyledRadio({ checked }: StyledRadioProps) {
  return (
    <Radio
      checked={checked}
      disableFocusRipple
      disableRipple
      disableTouchRipple
      checkedIcon={
        <Grow in={checked} timeout={400}>
          <HeadphonesIcon sx={{ color: "black" }} />
        </Grow>
      }
      icon={<HeadphonesIcon sx={{ color: "white" }} />}
    />
  );
}
