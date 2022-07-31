import React from "react";
import styles from "./Service.module.scss";

export default function Service(props) {
  const { Title, Icon, Description } = props.service;
  return (
    <div className={styles.service}>
      <h1>{Icon}</h1>
      <div className={styles.service_details}>
        <h5>{Title}</h5>
        <p>{Description}</p>
      </div>
    </div>
  );
}
