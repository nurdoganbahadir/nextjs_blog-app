"use client";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {
  Avatar,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "85.6vh",
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
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Box>
            <Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField
                  label="User Name"
                  name="username"
                  id="username"
                  type="text"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  label="First Name"
                  name="firstName"
                  id="firstName"
                  type="text"
                  variant="outlined"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                  label="Last Name"
                  name="lastName"
                  id="lastName"
                  type="text"
                  variant="outlined"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#0367A6",
                    "&:hover": { backgroundColor: "#023373" },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link href="/login">Do you have an account?</Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
