import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";

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
