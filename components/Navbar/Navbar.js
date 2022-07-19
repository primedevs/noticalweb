import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";


export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo_container}>
          <Link href="/">
            <img
              src="/logo.png"
              alt="Primedevs Logo"
              className={styles.logo_image}
            />
          </Link>
        </div>
        <Link href="/contact">
          <button className={styles.cta_button}>Let&apos;s Talk</button>
        </Link>
      </div>
    </div>
  );
}
