import * as React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { Button, Stack, CardActionArea, Avatar, Chip } from "@mui/material";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import projects from "../../data/index/projects.json";

export default function Detail(props) {
  const router = useRouter();
  const projectData =
    projects.find((project) => project._id == props.identifier) || {};
  const { ["Preview Link"]: projectLink } = projectData;
  return (
    <Card
      variant="none"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Stack direction="column" spacing={2} alignItems="center" maxWidth={900}>
        <Stack width={1}>
          <Stack direction="column" width={1}>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              onClick={() => router.back()}
              sx={{ cursor: "pointer" }}
            >
              <Card
                variant="none"
                sx={{ height: "30px", width: "30px", borderRadius: 50 }}
              >
                <CardActionArea
                  sx={{
                    height: 1,
                    width: 1,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <WestRoundedIcon fontSize="medium" />
                </CardActionArea>
              </Card>
              <Typography variant="body1" gutterBottom component="div">
                Back
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h2" gutterBottom component="div">
                {projectData.Name}
              </Typography>
              <a href={projectLink}>
                <Button
                  variant="none"
                  size="small"
                  endIcon={<LaunchRoundedIcon color="secondary" />}
                  sx={{ maxHeight: "35px", color: "#616161", borderRadius: 2 }}
                >
                  Preview
                </Button>
              </a>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                alt="Company logo"
                src={projectData["Client logo"]}
                sx={{ height: "26px", width: "26px" }}
              />
              <FiberManualRecordRoundedIcon
                fontSize="small"
                sx={{ height: "5px", width: "5px", color: "#616161" }}
              />
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                color="text.secondary"
              >
                {projectData.Client}
              </Typography>
              <FiberManualRecordRoundedIcon
                fontSize="small"
                sx={{ height: "5px", width: "5px", color: "#616161" }}
              />
              <Chip label={projectData.Type} size="small" />
            </Stack>
          </Stack>
        </Stack>

        <Stack direction="column" spacing={2}>
          <CardMedia
            component="img"
            image={projectData["Main image"]}
            alt="Project Main Image"
            sx={{
              borderRadius: "10px",
              border: 1,
              borderColor: "#eceff1",
              maxHeight: "500px",
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              About project
            </Typography>
            <Typography variant="body1" gutterBottom color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
              bibendum at varius vel pharetra vel turpis nunc eget. Consectetur
              adipiscing elit duis tristique sollicitudin nibh. Magna sit amet
              purus gravida quis blandit turpis cursus in. Erat velit
              scelerisque in dictum non consectetur a. Semper auctor neque vitae
              tempus quam pellentesque. Parturient montes nascetur ridiculus mus
              mauris. Id cursus metus aliquam eleifend. Eget mauris pharetra et
              ultrices neque ornare aenean euismod. Eget lorem dolor sed viverra
              ipsum nunc aliquet. Laoreet sit amet cursus sit amet dictum. Felis
              eget nunc lobortis mattis aliquam faucibus purus. Felis eget velit
              aliquet sagittis id consectetur. Nibh tortor id aliquet lectus
              proin nibh nisl condimentum id. Id venenatis a condimentum vitae
              sapien pellentesque habitant morbi. Nunc consequat interdum varius
              sit amet mattis vulputate. Aliquet nibh praesent tristique magna
              sit amet purus gravida. Eget nunc scelerisque viverra mauris in
              aliquam sem fringilla. Eget aliquet nibh praesent tristique magna
              sit amet purus. Et ligula ullamcorper malesuada proin libero nunc
              consequat. Molestie a iaculis at erat pellentesque adipiscing
              commodo elit. Pellentesque pulvinar pellentesque habitant morbi
              tristique senectus et. Pharetra magna ac placerat vestibulum.
              Malesuada fames ac turpis egestas sed tempus urna et.
            </Typography>
          </CardContent>
        </Stack>
      </Stack>
    </Card>
  );
}
