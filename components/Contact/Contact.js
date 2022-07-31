import React from "react";
import styles from "./Contact.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Card, CardContent, Typography } from "@mui/material";
export default function Test() {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <Card variant="none">
          <CardContent
            sx={{ display: "flex", flexDirection: "column", rowGap: 3 }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: 500 }}
              gutterBottom
              component="div"
            >
              Contact us
            </Typography>
            <TextField
              id="outlined-basic"
              label="Full name"
              variant="outlined"
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              size="small"
            />
            <TextField
              id="outlined-textarea"
              label="Your message"
              placeholder="Placeholder"
              multiline
              minRows={4}
            />
            <Button size="medium" variant="contained" disableElevation>
              Send message
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
