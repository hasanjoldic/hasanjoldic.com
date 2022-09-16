import useTheme from "@mui/material/styles/useTheme";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface Props extends React.PropsWithChildren {
  title: string;
  websites: string[];
  imgSrc: string;
  technologies: string[];
}

export const Project: React.FC<Props> = ({
  title,
  websites,
  imgSrc,
  technologies,
  children,
}) => {
  const theme = useTheme();
  return (
    <Box marginBottom={8}>
      <Paper>
        <Box
          padding={4}
          display="grid"
          gridTemplateColumns="100%"
          justifyItems="center"
          rowGap={4}
        >
          <Typography variant="h5" textAlign="center">
            {title}
          </Typography>
          <Box display="flex">
            {websites.map((o) => (
              <Box key={o} marginRight={2}>
                <Button
                  href={o}
                  target="_blank"
                  variant="contained"
                  endIcon={<OpenInNewIcon />}
                >
                  Visit website
                </Button>
              </Box>
            ))}
          </Box>
          <Typography>{children}</Typography>
          <img src={imgSrc} width="80%" alt="Project screenshot" />
          <Box
            display="flex"
            flexWrap="wrap"
            sx={{
              "& > div": {
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? theme.palette.common.white
                    : "unset",
              },
            }}
          >
            {technologies?.map((o) => (
              <Box
                key={o}
                mr={2}
                p={1}
                borderRadius={1}
                display="flex"
                alignItems="center"
              >
                <img
                  src={`https://enki.fra1.digitaloceanspaces.com/hasanjoldic.com/technology-logos/${o}.svg`}
                  alt={o}
                  height={20}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
