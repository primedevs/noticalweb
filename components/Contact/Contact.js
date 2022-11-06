import React, { useState } from "react";
import styles from "./Contact.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import toast, { Toaster } from "react-hot-toast";
import { Card, CardContent, Typography } from "@mui/material";
const notify = () =>
  toast("Your email was sent. We will reach out to you shortly");
export default function Test() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = values;
  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    setValues({
      name: "",
      email: "",
      message: "",
    });
    notify;
  };
  return (
    <div className={styles.contact}>
      <Toaster />
      <div className={styles.container}>
        <Card variant="none">
          <CardContent
            sx={{ display: "flex", flexDirection: "column", rowGap: 1 }}
          >
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              sx={{ textAlign: "center" }}
            >
              Contact us
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "center" }}
            >
              Do you want your product to be the next top app? We'd love to hear
              from you.
            </Typography>
            <TextField
              id="outlined-basic"
              name="name"
              label="Full Name"
              variant="outlined"
              size="small"
              type="text"
              value={name}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              name="email"
              label="Email"
              variant="outlined"
              size="small"
              type="email"
              value={email}
              onChange={handleChange}
            />
            <TextField
              id="outlined-textarea"
              name="message"
              label="Your message"
              placeholder="Placeholder"
              multiline
              minRows={4}
              value={message}
              onChange={handleChange}
            />
            <Button
              size="medium"
              variant="contained"
              disableElevation
              sx={{ borderRadius: 2 }}
              onClick={() => {
                handleSubmit();
                notify();
              }}
            >
              Send Message
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
