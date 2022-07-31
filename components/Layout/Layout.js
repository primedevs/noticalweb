import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";
import CookieConsent, { Cookies } from "react-cookie-consent";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
