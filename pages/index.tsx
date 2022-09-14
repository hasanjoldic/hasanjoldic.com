import type { NextPage } from "next";

import useTheme from "@mui/material/styles/useTheme";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Project } from "../components";

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "NodeJS",
  "postgreSQL",
  "NextJS",
  "GraphQL",
  "AWS",
];

const Home: NextPage = () => {
  const theme = useTheme();

  return (
    <Box maxWidth={theme.breakpoints.values.md}>
      <Typography variant="h4">Hey there,</Typography>
      <br />
      <Typography>
        My name is Hasan.
        <br />
        <br />
        Initially my plan was to be a scientist, but after doing an internship
        with a heavy focus on software development I pivoted to working as a
        software developer full-time and making it my career.
        <br />
        <br />
        My first programming language was Java, but I have mostly been working
        with JavaScript/TypeScript both in the backend and frontend. During my
        professional carreer I have spent about 60% of my time writing code for
        the web frontend, 30% for the backend, and the rest on other stuff like
        CI/CD.
        <br />
        <br />
        The main thing I bring to the table is the ability to figure things out
        and a methodical aproach to problem solving.
        <br />
        <br />
        Even though I try to have a broad understanding of software development,
        I have a stack in which I&apos;m most productive in:
      </Typography>
      <br />
      <Box p={1} display="flex" flexWrap="wrap" justifyContent="center">
        {technologies.map((o) => (
          <Box key={o} mr={2} display="flex" alignItems="center">
            <img
              src={`https://enki.fra1.digitaloceanspaces.com/hasanjoldic.com/technology-logos/${o}.svg`}
              alt={o}
              height={50}
            />
          </Box>
        ))}
      </Box>

      <Typography
        variant="h4"
        textAlign="center"
        marginTop={8}
        marginBottom={4}
      >
        Projects I have worked on
      </Typography>

      <Project
        title="Flare emergency dispatch"
        imgSrc="https://enki.fra1.digitaloceanspaces.com/hasanjoldic.com/work-projects/Flare emergency dispatch.png"
        websites={["https://flare.co.ke/", "https://flaredispatch.com"]}
        technologies={["TypeScript", "React", "GraphQL", "AWS"]}
      >
        Software infrastructure and operational support for emergency response
        teams, both government and private.
      </Project>
      <Project
        title="ISHAP - Documentation software"
        imgSrc="https://enki.fra1.digitaloceanspaces.com/hasanjoldic.com/work-projects/ISHAP.png"
        websites={["https://ishap.at", "https://form.ishap.at/"]}
        technologies={["TypeScript", "React", "NodeJS", "postgreSQL"]}
      >
        First and foremost, the app is used to be able to carry out the tests
        from the maintenance book digitally, but also to record important data
        on site in the building or to be able to retrieve the information from
        the ISHAP - Digital House via a mobile device (Android and IOS).
      </Project>
      <Project
        title="Pethomer"
        imgSrc="https://enki.fra1.digitaloceanspaces.com/hasanjoldic.com/work-projects/Pethomer.png"
        websites={["https://pethomer.com"]}
        technologies={["TypeScript", "React", "AWS", "NodeJS", "postgreSQL"]}
      >
        Pethomer connects dog and cat lovers who need help caring for them with
        people who provide such a service (Caregivers). Regardless of whether
        you need: a walk, day care, quick feeding or taking care of a pet for a
        few days as part of the hotel. Pethomer is a place where animal lovers
        (we call them Pethomers) are waiting for the chance to care for your
        four-legged friend.
      </Project>
    </Box>
  );
};

export default Home;
