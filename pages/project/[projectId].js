import React from "react";
import { useRouter } from "next/router";
import Detail from "../../components/Detail/Detail";
import projects from "../../data/index/projects.json";
import styles from "./Project.module.scss";

export default function Project() {
  const router = useRouter();
  const { projectId } = router.query;

  const projectData =
    projects.find((project) => project._id == projectId) || {};
  console.log(projectData);
  return (
    <div className={styles.project}>
      <div className={styles.project_container}>
        <Detail identifier={router.query.projectId} />
      </div>
    </div>
  );
}
