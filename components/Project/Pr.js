import * as React from "react";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%", // This will make the card stretch to the height of its container
};

const contentStyle = {
  flexGrow: 1, // This will make the content section (CardContent) take up the available space
};

export default function MultiActionAreaCard(props) {
  const {
    _id,
    Name,
    "Main image": mainImage,
    Description,
    "Client logo": clientLogo,
    Type,
    "Preview link": previewLink,
    "Short Description": miniDescription,
  } = props.project || {};

  return (
    <Card variant="outlined" sx={{ borderRadius: 3 }} style={cardStyle}>
      <CardActionArea style={{ flexGrow: 1 }}>
        <CardMedia
          component="div" // Use a div container for the CardMedia
          sx={{
            height: 0,
            paddingTop: "56.25%", // 16:9 aspect ratio (change as needed)
            backgroundSize: "cover", // This will make the image fill the container
            backgroundImage: `url(${mainImage})`,
          }}
        />
        <CardContent style={contentStyle}>
          <Typography gutterBottom variant="h5" component="div">
            {Name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="div"
            gutterBottom
          >
            {miniDescription}
          </Typography>
          <Chip label={Type} color="primary" size="small" sx={{ marginTop: 2 }} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
