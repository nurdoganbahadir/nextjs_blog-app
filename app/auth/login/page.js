import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LoginForm from "../../../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <Container maxWidth="lg" sx={{ minHeight: "76.7vh" }}>
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        alignItems="center"
        sx={{
          my: "5rem",
          p: 2,
        }}
      >
        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "primary.main",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <PersonIcon />
          </Avatar>
          <Typography variant="h4" align="center" mb={4} color="primary.main">
            Login
          </Typography>
          <LoginForm />
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Box>Do you have not an account?</Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
