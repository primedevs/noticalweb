import Head from "next/head";
import styles from "../styles/Home.module.scss";
import serviceData from "../data/index/services.json";
import projectData from "../data/index/projects.json";
import Ser from "../components/Service/Ser";
import Pr from "../components/Project/Pr";
import Faq from "../components/Faq/Faq";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import { Stack, Button } from "@mui/material";
export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Notycal</title>
        <meta
          name="description"
          content="Launch faster with no-code tools. It saves you time, money & gives a professional finish."
        />
        <meta property="og:url" content="https://www.notycal.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.home_section_1}>
        <div className={styles.home_section_1_container}>
          <Stack direction="column" sx={{ alignItems: "center" }} spacing={2}>
            <Typography
              variant="h2"
              gutterBottom
              component="div"
              fontWeight={700}
              sx={{ lineHeight: 1 }}
            >
              Sync Notion & Google Calendar&nbsp;

              <Typography
                variant="h2"
                component="div"
                fontWeight={700}
                color="primary"
                sx={{

                  background:
                    "-webkit-linear-gradient(45deg, #027ab0, #1cb7fc)",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                Like Magic!
              </Typography>
            </Typography>

            <Typography
              variant="subtitle1"
              gutterBottom
              component="div"
              color="#424242"
              fontSize={18}
              sx={{
                textAlign: "center",
                maxWidth: 600,
                alignSelf: "center",
              }}
            >
              Notycal is a dynamic integration tool designed to seamlessly connect your Notion workspace with your Google Calendar. It empowers you to edit and manage your Notion tasks straight from your Google Calendar interface. With Notycal, balancing your schedule and tasks becomes more efficient than ever before.            </Typography>
            <Link href="https://app.notycal.com/">
              <Button
                size="medium"
                variant="contained"
                disableElevation
                sx={{ borderRadius: 2 }}
              >
                JOIN WAITLIST
              </Button>
            </Link>
          </Stack>
        </div>
      </div>
      <div className={styles.home_section_2}>
        <div className={styles.home_section_2_container}>
          <Typography variant="h4" gutterBottom component="div">
            Why Use Notycal?
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
            <Typography variant="h4" gutterBottom component="div">
              FAQs
            </Typography>

          </Stack>

          <div className={styles.our_work_container}>
            <Faq />
          </div>
        </div>
      </div>
      <div className={styles.home_section_4}>
        <div className={styles.home_section_4_container}>
          <Stack direction="column" alignItems="center">

            <Typography
              textAlign="center"
              variant="h4"
              gutterBottom
              component="div"
              fontWeight={700}
            >
              Sync Notion & Google Calendar.&nbsp;
              <Typography
                variant="h4"
                gutterBottom
                component="div"
                fontWeight={700}
                sx={{
                  background:
                    "-webkit-linear-gradient(45deg, #027ab0, #1cb7fc)",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                Join Today!
              </Typography>
            </Typography>
            <Link href="https://calendly.com/primedevs/bubble-development">
              <Button
                size="medium"
                variant="contained"
                disableElevation
                sx={{ borderRadius: 2 }}
              >
                JOIN WAITLIST
              </Button>
            </Link>
          </Stack>
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
