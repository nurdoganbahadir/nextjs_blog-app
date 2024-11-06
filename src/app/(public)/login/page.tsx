"use client";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";

const Login: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row-reverse"
        sx={{
          height: "83vh",
          p: 2,
        }}
      >
        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          ></Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Email"
                name="email"
                id="email"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Password"
                name="password"
                id="password"
                type="password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <Button
                variant="contained"
                type="submit"
                sx={{ backgroundColor: "#023373" }}
              >
                Submit
              </Button>
            </Box>
          </Box>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link href="/register">Do you have not an account?</Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
