import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Card, Stack } from "@mui/material";
import { StyledBadge } from "./style";

export const Header = () => {
  return (
    <AppBar
      sx={{
        display: "flex",
        flexDirection: "row",
        color: "#6326ed",
        bgcolor: "#000000",
        borderColor: "#6326ed",
        borderBottom: 1,
        borderBottomWidth: 3,
        height: "10%"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "auto",
          width: "100%",
        }}
      >
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            border: 0.2,
            bgcolor: "#6326ed",
            color: "#000000",
            marginBottom: 0.3,
            width: "35%"
          }}
        >
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar sx={{ marginLeft: 1 }} />
          </StyledBadge>
          <Stack>
            <Typography sx={{ marginLeft: 1, marginRight: 1 }}>
              Score:{" "}
            </Typography>
            <Typography sx={{ marginLeft: 1, marginRight: 1 }}>
              Place:{" "}
            </Typography>
          </Stack>
        </Card>
        <Typography
          variant="h5"
          sx={{
            marginTop: 1,
            marginBottom: 1,
            flexGrow: 1,
            textAlign: "center",
          }}
        >
          LetoCTF2024
        </Typography>
      </Box>
    </AppBar>
  );
};
