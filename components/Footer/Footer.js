import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "react-feather";
const colors = {
    green: "#04A54A",
  };

export default function Footer() {
  return (
    <div className={styles.home_section_5}>
      <div className={styles.home_section_5_container}>
        <p>Let&apos;s connect</p>
        <div className={styles.icons_container}>
          <Link href="https://twitter.com/primedevsco">
            <Twitter
              height="30"
              width="30"
              strokeWidth="1.4"
              stroke={colors.green}
              className={styles.linkz}
            />
          </Link>
          <Link href="https://web.facebook.com/primedevsco">
            <Facebook
              height="30"
              width="30"
              strokeWidth="1.4"
              stroke={colors.green}
              className={styles.linkz}
            />
          </Link>
          <Link href="https://www.instagram.com/primedevs/">
            <Instagram
              height="30"
              width="30"
              strokeWidth="1.4"
              stroke={colors.green}
              className={styles.linkz}
            />
          </Link>
          <Link href="https://linkedin.com/company/primedevs">
            <Linkedin
              height="30"
              width="30"
              strokeWidth="1.4"
              stroke={colors.green}
              className={styles.linkz}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
