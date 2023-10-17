import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import modalImage from "../../images/modal_image.jpg";
import { Chip } from "@mui/material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const AiModalCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="350"
        image={modalImage}
        alt="Paella dish"
      />
      <CardContent sx={{ pb: 0 }}>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
          Convert User Story to UI mock-up at ease by using Gen-AI Modal,
          accelerating production development and elevation the UI customer
          journey by rapid UI experimentation.
        </Typography>
        <Chip
          label="DBS Original"
          color="secondary"
          size="small"
          sx={{ mr: 1, mb: 1 }}
        />
        <Chip
          label="UI Mock-up"
          color="warning"
          size="small"
          sx={{ mr: 1, mb: 1 }}
        />
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Benefits:</Typography>
          <Typography>
            1. Speed up the design iteration <br />
            2. More choices of UI design on the same user story <br />
            3. Standardize with Agile methodology <br />
            4. Time to Market
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
