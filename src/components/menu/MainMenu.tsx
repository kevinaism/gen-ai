import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
// import { Clock } from "../common/Clock";
import DbsLogo from "../logo/DbsLogo";

interface MainMenuProps {
  outlet: React.ReactElement;
}

export default function MainMenu(props: MainMenuProps) {
  const isDestopMode = useMediaQuery("(min-width:600px)");

  return (
    <>
      <AppBar sx={{ boxShadow: 0 }}>
        <Toolbar>
          <IconButton color="inherit" sx={{ mr: "12px" }}>
            <MenuIcon sx={{ size: "20px" }} />
          </IconButton>
          <DbsLogo size={30} marginRight={true} />
          <Typography
            component="h1"
            variant={isDestopMode ? "h6" : "subtitle1"}
            color="inherit"
            sx={{ flexGrow: 1 }}
          >
            Hello Hong Kong - Generative AI
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ pt: "70px" }}>
        <Container maxWidth="xl">{props.outlet}</Container>
      </Box>
    </>
  );
}
