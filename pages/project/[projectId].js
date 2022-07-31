import React from "react";
import { useRouter } from "next/router";
import { Detail } from "../../components/Detail/Detail";
import projects from "../../data/index/projects.json";

export default function Project() {
  const router = useRouter();
  const { projectId } = router.query;

  const projectData =
    projects.find((project) => project._id == projectId) || {};
  console.log(projectData);
  return (
    <div>
      <Detail project={projectData} />
    </div>
  );
}
