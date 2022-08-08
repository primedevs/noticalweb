import * as React from "react";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard(props) {
  const {
    _id,
    Name,
    "Main image": mainImage,
    Description,
    "Client logo": clientLogo,
    Type,
    "Preview link": previewLink,
  } = props.project || {};
  return (
    <Card variant="outlined" sx={{ borderRadius: 3}}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={mainImage} alt={Name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="div"
            gutterBottom
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>{" "}
          <Chip
            label={Type}
            color="primary"
            size="small"
            sx={{ marginTop: 2 }}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
