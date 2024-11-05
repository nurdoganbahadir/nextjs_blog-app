import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "@mui/material";

const aboutStyle: React.CSSProperties = {
  width: "100%",
  height: 500,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  minHeight: "83vh",
  border: "none",
  textAlign: "center",
};

const About: React.FC = () => {
  return (
    <Card sx={aboutStyle}>
      <CardMedia
        sx={{ height: 100, width: 100, borderRadius: "50px" }}
        image="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png"
        title="nurdoganbahadir"
      />
      <CardContent>
        <Typography gutterBottom variant="h3">
          Nurdoğan Bahadır
        </Typography>
        <Typography variant="h5">Full Stack Developer</Typography>
      </CardContent>
      <CardActions sx={{ gap: 2 }}>
        <Link href="https://www.linkedin.com/in/nurdoganbahadir/">
          <LinkedInIcon
            sx={{
              ":hover": { color: "green", cursor: "pointer" },
              fontSize: "45px",
            }}
          />
        </Link>
        <Link href="https://github.com/nurdoganbahadir">
          <GitHubIcon
            sx={{
              ":hover": { color: "green", cursor: "pointer" },
              fontSize: "45px",
              color: "black",
            }}
          />
        </Link>
      </CardActions>
    </Card>
  );
};

export default About;
