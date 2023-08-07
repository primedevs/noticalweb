// Navbar.js
import React, { useState, useEffect } from "react";
import styles from "./Nav.module.scss";
import Image from "next/image";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Button } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [width, setWidth] = useState();
  const handleClick = () => setMenu(!menu);
  const handleClickLogo = () => {
    if (menu) {
      setMenu(!menu);
    }
  };
  const menuClasses = () => {
    if (width <= 599) {
      const classes = menu ? styles.menu : styles.menu__mobile__inactive;
      return classes;
    } else if (width > 599) {
      return styles.menu;
    }
  };

  const menuIcon = menu ? (
    <CloseRoundedIcon
      onClick={handleClick}
      className={`${styles.menu__mobile} ${styles.spin}`}
    />
  ) : (
    <MenuRoundedIcon
      onClick={handleClick}
      className={styles.menu__mobile}
    />
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [width]);

  const [slideAnimation, setSlideAnimation] = useState("");

  const handleMenuToggle = () => {
    setMenu((prevMenu) => !prevMenu);
    setSlideAnimation((prevAnimation) =>
      menu ? "slide-in" : prevAnimation ? "slide-out" : ""
    );
  };

  return (
    <div>
      <div className={`${styles.navbar}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.container__logo}`}>
            <Link href="/">
              <Image
                onClick={handleClickLogo}
                src={"/logo.svg"}
                layout={"fill"}
                objectFit={"contain"}
              />
            </Link>
          </div>

          <div
            className={`${menuClasses()} ${slideAnimation}`}
            onAnimationEnd={() => setSlideAnimation("")}
          >
            <ul>
              <li>
                <Link href="/contact">
                  <Button
                    variant="text"
                    onClick={handleClick}
                    color="secondary"
                    sx={{ borderRadius: 2 }}
                  >
                    CONTACT US
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="https://app.notycal.com/">
                  <Button
                    variant="contained"
                    onClick={handleClick}
                    color="primary"
                    size="small"
                    disableElevation
                    sx={{ borderRadius: 2 }}
                  >
                    LOGIN
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          {menuIcon}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
