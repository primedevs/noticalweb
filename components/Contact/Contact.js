import React, { useState } from "react";
import styles from "./Contact.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import toast, { Toaster } from "react-hot-toast";
import { Card, CardContent, Typography } from "@mui/material";

export default function Test() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = values;
  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });
  const handleSubmit = async () => {
    if (!name || !email || !message) {
      // Check if required fields are empty
      toast.error("Please fill out all the required fields.");
      return;
    }

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
    notify();
  };

  const notify = () => {
    toast.success(
      "Your message has been sent successfully. We will reach out to you shortly. Thank you for considering our services!"
    );
  };

  const isRequiredFieldEmpty = (field) => {
    return !field.trim();
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
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "center", marginBottom: "20px" }}
            >
              We’d love to hear from you! Please fill out the form below and
              we’ll get back to you as soon as possible.
            </Typography>
            <TextField
              id="outlined-basic"
              name="name"
              label="Full Name *"
              variant="outlined"
              size="small"
              type="text"
              value={name}
              onChange={handleChange}
              sx={{
                borderRadius: 10,
                borderColor: isRequiredFieldEmpty(name) ? "red" : "inherit",
              }}
            />
            <TextField
              id="outlined-basic"
              name="email"
              label="Email *"
              variant="outlined"
              size="small"
              type="email"
              value={email}
              onChange={handleChange}
              sx={{
                borderRadius: 10,
                borderColor: isRequiredFieldEmpty(email) ? "red" : "inherit",
              }}
            />
            <TextField
              id="outlined-textarea"
              name="message"
              label="Your message *"
              placeholder="Placeholder"
              multiline
              minRows={4}
              value={message}
              onChange={handleChange}
              sx={{
                borderRadius: 10,
                marginBottom: "20px",
                borderColor: isRequiredFieldEmpty(message) ? "red" : "inherit",
              }}
            />
            <Button
              size="medium"
              variant="contained"
              disableElevation
              sx={{
                borderRadius: 2,
                width: "fit-content",
                marginTop: "20px",
                margin: "0 auto",
              }}
              onClick={handleSubmit}
            >
              Send Message
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
