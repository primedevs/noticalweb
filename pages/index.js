import Head from "next/head";
import styles from "./Index.module.scss";
import Navbar from "../components/Navbar/Navbar";
import services from "../data/index/services.json";
import projects from "../data/index/projects.json";
import Service from "../components/Service/Service";
import Project from "../components/Project/Project";
import { Facebook, Twitter, Linkedin, Instagram } from "react-feather";
import Link from "next/link";
const colors = {
  green: "#04A54A",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Primedevs</title>
        <meta
          name="Primedevs"
          content="Launch faster with no-code tools. It saves you time, money & gives a professional finish."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className={styles.home_section_1}>
        <div className={styles.home_section_1_container}>
          <h1>
            Launch your product in days,
            <br /> not months.
          </h1>
          <p>
            We&apos;re a young and talented team of developers ready to take on your
            next big idea. We use bubble.io to develop amazing websites and
            digital products for startups, companies and ourselves. Want to work
            with an awesome team and build your product? Let&apos;s talk!
          </p>
          <button>Explore works</button>
        </div>
      </div>

      <div className={styles.home_section_2}>
        <div className={styles.home_section_2_container}>
          <h4>Here&apos;s what you can build</h4>
          <div className={styles.services_container}>
            {services.map((service) => (
              <Service service={service} key={service._id.toString()} />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.home_section_3}>
        <div className={styles.home_section_3_container}>
          <h4>Our work</h4>
          <div className={styles.our_work_container}>
            {projects.map((project) => (
              <Project project={project} key={project._id.toString()} />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.home_section_4}>
        <div className={styles.home_section_4_container}>
          <div className={styles.available_for_projects}>
            <div> </div>
            <p>AVAILABLE FOR FREELANCE PROJECTS</p>
          </div>
          <h2>
            Need help with your
            <br /> <span>Bubble project?</span> Let&apos;s talk.
          </h2>
          <button>Let&apos;schat now</button>
        </div>
      </div>

      <div className={styles.home_section_5}>
        <div className={styles.home_section_5_container}>
          <p>Let's connect</p>
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
    </div>
  );
}
