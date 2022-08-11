import Head from "next/head";
import styles from "../styles/Home.module.scss";
import serviceData from "../data/index/services.json";
import projectData from "../data/index/projects.json";
import Ser from "../components/Service/Ser";
import Pr from "../components/Project/Pr";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Primedevs</title>
        <meta
          name="description"
          content="Launch faster with no-code tools. It saves you time, money & gives a professional finish."
        />
        <meta property="og:url" content="https://www.primedevs.co" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.home_section_1}>
        <div className={styles.home_section_1_container}>
          <Typography
            variant="h3"
            fontWeight={900}
            gutterBottom
            component="div"
          >
            Launch Faster With
            <br />
            <Typography
              variant="h3"
              component="div"
              fontWeight={900}
              color="primary"
            >
              No code!
            </Typography>
          </Typography>

          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            color="#424242"
            sx={{
              textAlign: "center",
              maxWidth: 600,
              alignSelf: "center",
            }}
          >
            We&apos;re a talented team of developers ready to take on your next
            big idea. We use bubble.io to develop amazing websites and digital
            products for startups, companies and ourselves. Want to work with an
            awesome team and build your product? Let&apos;s talk!
          </Typography>
          <Link href="/projects">
            <Button
              size="small"
              variant="contained"
              disableElevation
              sx={{ borderRadius: 2 }}
            >
              Explore Our Work
            </Button>
          </Link>
        </div>
      </div>
      <div className={styles.home_section_2}>
        <div className={styles.home_section_2_container}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 500 }}
            gutterBottom
            component="div"
          >
            Here&apos;s what you can build
          </Typography>

          <div className={styles.services_container}>
            {props.services.map((service) => (
              <Ser service={service} key={service._id.toString()} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.home_section_3}>
        <div className={styles.home_section_3_container}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: 500 }}
              gutterBottom
              component="div"
            >
              Our work
            </Typography>
            <Link href="/projects">
              <Typography
                variant="body1"
                gutterBottom
                sx={{ cursor: "pointer" }}
              >
                See more 👉
              </Typography>
            </Link>
          </Stack>

          <div className={styles.our_work_container}>
            {props.projects.map((project) => (
              <Link
                href={`/project/${project._id}`}
                key={project._id.toString()}
              >
                <a>
                  <Pr project={project} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.home_section_4}>
        <div className={styles.home_section_4_container}>
          <div className={styles.available_for_projects}>
            <div> </div>
            <Typography
              color="text.primary.300"
              fontWeight={300}
              variant="body2"
            >
              AVAILABLE FOR FREELANCE PROJECTS
            </Typography>
          </div>

          <Typography
            textAlign="center"
            variant="h3"
            gutterBottom
            component="div"
            fontWeight={800}
          >
            Need help with your
            <br />
            <Typography
              variant="h3"
              gutterBottom
              component="div"
              fontWeight={800}
              color="primary"
            >
              Bubble project?
            </Typography>{" "}
          </Typography>
          <Link href="https://calendly.com/primedevs/bubble-development">
            <Button
              size="small"
              variant="contained"
              disableElevation
              sx={{ borderRadius: 2 }}
            >
              Schedule a Call
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  if (!projectData) {
    return {
      notFound: true,
    };
  }
  if (!serviceData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { projects: projectData, services: serviceData }, // will be passed to the page component as props
  };
}
