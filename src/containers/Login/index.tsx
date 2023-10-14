import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

import { useAuthMutation } from "../../queries/useAuthMutation";
import Form from "./form";

export default function SignInSide() {
  const { mutate: login, isLoading: isLoadingAuth } = useAuthMutation();



  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://th.bing.com/th/id/OIG.FmWhU1ekmfWgCAQTSQpH?pid=ImgGn)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} alignSelf={"center"} >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "green" }}>
            <ElectricBoltIcon />
          </Avatar>

          <Form onSubmit={e => login(e)} isLoadingLogin={isLoadingAuth} />
        </Box>
      </Grid>
    </Grid>
  );
}
