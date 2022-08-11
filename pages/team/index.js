import React from "react";
import { Member } from "../../components/Member/Member";
import styles from "../../styles/Team.module.scss";
import membersData from "../../data/index/team.json";
import { Typography } from "@mui/material";
import Head from "next/head";

export default function index(props) {
  return (
    <div className={styles.team}>
      <Head>
        <title>Meet our team</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        />
        <meta property="og:url" content="https://www.primedevs.co/team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.team_container}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center" }}
          gutterBottom
          component="div"
        >
          Meet our team
        </Typography>
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
          {props.members.map((member) => (
            <Member key={member.id.toString()} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  if (!membersData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { members: membersData }, // will be passed to the page component as props
  };
}
