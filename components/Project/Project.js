import React from "react";
import styles from "./Project.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Project(props) {
  const {
    Name,
    "Main image": mainImage,
    Description,
    "Client logo": clientLogo,
    Type,
    "Preview link": previewLink,
  } = props.project;
  return (
    <Link href="project">
      <div className={styles.project}>
        <div className={styles.image_container}>
          <Image src={`https:${mainImage}`} alt="Project Image" layout="fill" />
        </div>

        <div className={styles.bottom_container}>
          <Image
            src={`https:${clientLogo}`}
            alt="Logo Icon"
            width={25}
            height={25}
            className={styles.logo_image}
          />

          <h1>{Name}</h1>
        </div>
      </div>
    </Link>
  );
}
