import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { Container } from "@mui/material";
import { useSignupMutation } from "../../queries/useSignupMutation";
import Form from "./form";

export default function SignUp() {
  const { mutate: signup, isLoading: isLoadingSignup } = useSignupMutation();

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, mb: 3, bgcolor: "green" }}>
          <ElectricBoltIcon />
        </Avatar>

        <Form onSubmit={e => signup(e)} isLoadingSignup={isLoadingSignup} />
      </Box>
    </Container>
  );
}
