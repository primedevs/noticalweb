import React from "react";
import { Member } from "../../components/Member/Member";
import styles from "../../styles/Team.module.scss";
import members from "../../data/index/team.json";
import { Typography } from "@mui/material";

export default function index() {
  return (
    <div className={styles.team}>
      <div className={styles.team_container}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 500, textAlign: "center" }}
          gutterBottom
          component="div"
        >
          Meet our team
        </Typography>{" "}
        <Typography
          variant="subtitle1"
          gutterBottom
          component="div"
          sx={{
            textAlign: "center",
            maxWidth: 600,
            alignSelf: "center",
            marginBottom: "50px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <div className={styles.members_container}>
          {members.map((member) => (
            <Member key={member.id.toString()} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
