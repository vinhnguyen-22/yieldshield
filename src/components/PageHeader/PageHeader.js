import { makeStyles } from "@mui/styles";
import heroImage from "../../assets/img/d69a28_c9e1269f89d4422ea27981285c27ec51_mv2.webp";
export const useStyles = makeStyles((theme) => {
  return {
    heroSection: {
      backgroundImage: `url(${heroImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      padding: "64px 48px",
    },
  };
});
