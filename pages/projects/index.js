import { StyleTwoTone } from "@mui/icons-material";
import React from "react";
import projects from "../../data/index/projects.json";
import styles from "./Projects.module.scss";
import Pr from "../../components/Project/Pr";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function index() {
  return (
    <div className={styles.projects}>
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
            <Link
              href={`/projects/?[projectId]?projectId=${project._id}`}
              as={`/project/${project._id}`}
              scroll={false}
              key={project._id.toString()}
            >
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
