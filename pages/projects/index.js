import React from "react";
import data from "../../data/index/projects.json";
import styles from "./Projects.module.scss";
import Pr from "../../components/Project/Pr";
import { Typography } from "@mui/material";
import Link from "next/link";
import Head from "next/head";

export default function index({ projects }) {
  return (
    <div className={styles.projects}>
      <Head>
        <title> Explore Our Work</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        />
        <meta property="og:url" content="https://www.primedevs.co/projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.projects_container}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 500 }}
          gutterBottom
          component="div"
        >
          Our work
        </Typography>
        <div className={styles.our_work_container}>
          {projects.map((project) => (
            <Link href={`/project/${project._id}`} key={project._id.toString()}>
              <a>
                <Pr project={project} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { projects: data }, // will be passed to the page component as props
  };
}
