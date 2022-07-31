import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function OutlinedCard(props) {
  const { Title, Icon, Description } = props.service;
  return (
    <Box sx={{ minWidth: 275 }} variant="outlined">
      <Card variant="none" sx={{ height: 1 }}>
        <CardActionArea
          sx={{ display: "flex", flexDirection: "row", height: 1 }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              verticalAlign: "top",
            }}
          >
            <Typography variant="h5">{Icon}</Typography>
          </CardContent>
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 500 }}
              gutterBottom
              component="div"
            >
              {Title}
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              gutterBottom
              component="div"
            >
              {Description}
            </Typography>
          </CardContent>{" "}
        </CardActionArea>
      </Card>
    </Box>
  );
}
