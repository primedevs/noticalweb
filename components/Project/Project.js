import React from "react";
import styles from "./Project.module.scss";
import Image from "next/image";
import Link from "next/link";
import Modal from "react-modal";
Modal.setAppElement("#__next");
import { useRouter } from "next/router";

export default function Project(props) {
  const {
    _id,
    Name,
    "Main image": mainImage,
    Description,
    "Client logo": clientLogo,
    Type,
    "Preview link": previewLink,
  } = props.project || {};

  const router = useRouter();
  const { projectId } = router.query;

  return (
    <div className={styles.project}>
      <div className={styles.image_container}>
        <Image src={`https:${mainImage}`} alt="Project Image" layout="fill" />
      </div>

      <div className={styles.bottom_container}>
        <Image
          src={`https:${clientLogo}` || undefined}
          alt="Logo Icon"
          width={25}
          height={25}
          className={styles.logo_image}
        />

        <h1>{Name}</h1>
      </div>
    </div>
  );
}
