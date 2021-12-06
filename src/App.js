import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./App.css";
import { Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";


function App() {
  return (
    <div>
      <Box
        sx={{
          boxShadow: 1,
          borderRadius: 1,
          p: 2,
          height: 0.1 * window.innerHeight,
          backgroundSize: "cover",
        }}
      >
        <Typography variant="h5" color="common.white">
          Hello, I'm
        </Typography>
        <Typography variant="h3" color="common.white">
          Gary Nye,
        </Typography>
        <br></br>
        <a style={{ textDecoration: "none" }} href="mailto:gary@garynye.com">
          <Button variant="contained">Email Me</Button>
        </a>
      </Box>

      <Grid container spacing={2}>
        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={12} sm={2}>
          <Card sx={{ margin: 2, maxWidth: 150, backgroundColor: "#FFFFFF" }}>
            <CardMedia
              component="img"
              image="https://res.cloudinary.com/assurily/image/upload/v1638820376/garynyedotcom/bridgestone-mark-color_vwwla5.png"
              alt="Bridgestone"
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <Typography variant="h5" color="#0288d1">
            Bridgestone Americas
          </Typography>
          <Typography variant="h6" color="#388e3c">
            Executive Director
          </Typography>
          <Typography variant="subtitle2">Nashville, TN</Typography>
          <br></br>
          <Typography variant="body2">
            Bridgestone Mobility Solutions is a business unit
            designed to leverage technology to make it easier to move people and
            goods between two points. I was responsible for
            identifying and bringing to market all non-tire new growth
            innovation for Bridgestone Americas to address the B2B market.
          </Typography>
          <List dense>
            <ListItem>
              <ArrowCircleRightIcon />
              <ListItemText primary="Managed the Mileage Sales business unit with over 150 hourly and salaried employees in operations and sales across the US and Canada to maintain a 36% gross margin on a $55M P&L. " />
            </ListItem>
            <ListItem>
              <ArrowCircleRightIcon />
              <ListItemText primary="Developed strategic partnership & investment with reach24.net to digitize the dispatching process for emergency and planned events resulting in improved downtime from 2hr 40min to under 2hr in emergencies." />
            </ListItem>
          </List>
        </Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
      </Grid>
    </div>
  );
}

export default App;
