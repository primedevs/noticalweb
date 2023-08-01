import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { Twitter } from "react-feather";
import { Card, CardActionArea, Stack, Typography } from "@mui/material";
const colors = {
  green: "#04A54A",
};

export default function Footer() {
  return (
    <div className={styles.home_section_5}>
      <div className={styles.home_section_5_container}>
        <Stack justifyContent="center" alignItems="center">
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            textAlign="center"
            color="#424242"
          >
            Let&apos;s Connect
          </Typography>

          <Link href="https://twitter.com/primedevsco">
            <Card
              variant="outlined"
              sx={{ width: "35px", height: "35px", borderRadius: "10px" }}
            >
              <CardActionArea
                sx={{ display: "flex", alignItems: "center", height: 1 }}
              >
                <Twitter
                  height="20"
                  width="20"
                  strokeWidth="2"
                  stroke={colors.green}
                  className={styles.linkz}
                />
              </CardActionArea>
            </Card>
          </Link>
        </Stack>
      </div>
    </div>
  );
}
