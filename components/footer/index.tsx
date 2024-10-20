import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "green",
        color: "white",
        py: 3,
        mt: "auto", // İçeriğin alt kısmında durması için
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1">
          © 2024 My Website. All rights reserved.
        </Typography>
        <Typography variant="body2">Designed by Nurdoğan Bahadır</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
