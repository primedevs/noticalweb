import React from "react";
import { useRouter } from "next/router";
import Detail from "../../components/Detail/Detail";
import projects from "../../data/index/projects.json";
import styles from "./Project.module.scss";
import Head from "next/head";

export default function Project() {
  const router = useRouter();
  const { projectId } = router.query;

  const projectData =
    projects.find((project) => project._id == projectId) || {};
  console.log(projectData);
  return (
    <div className={styles.project}>
      <Head>
        <title>{projectData["Name"]}</title>
        <meta name="description" content={projectData["Short Description"]} />
        <meta
          property="og:url"
          content={`https://www.primedevs.co/project/${projectId}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.project_container}>
        <Detail identifier={router.query.projectId} />
      </div>
    </div>
  );
}
