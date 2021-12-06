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
import ListItemIcon from "@mui/material/ListItemIcon";
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
            Executive Director of Mobility Solutions
          </Typography>
          <Typography variant="subtitle2">
            Nashville, TN from 2018 to 2021
          </Typography>
          <br></br>
          <Typography variant="body2">
            Bridgestone Mobility Solutions is a business unit designed to
            leverage technology to make it easier to move people and goods
            between two points. I was responsible for identifying and bringing
            to market all non-tire new growth innovation for Bridgestone
            Americas to address the B2B market.
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Managed the Mileage Sales business unit with over 150 hourly and salaried employees in operations and sales across the US and Canada to maintain a 36% gross margin on a $55M P&L. " />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Developed strategic partnership & investment with reach24.net to digitize the dispatching process for emergency and planned events resulting in improved downtime from 2hr 40min to under 2hr in emergencies." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Outsourced emergency response organization resulting in a single staffing model, a 15% improvement in operating budget, and reduction of 30 headcount." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Deployed iTrack II, a mining telematics solution, across the US and Canada to close a completive gap in Bridgestone’s portfolio leading to the full acquisition of the company." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Launched Bridgestone Intellitire Tire Pressure System to improve fleet uptime by up 46% through preemptive pressure loss detection and through linkage into reach24.net for emergency detection and service dispatching through a direct salesforce and reseller network. " />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Partnered with Amazon AWS digital innovation group to launch myuptimeauto.com, a freemium fleet maintenance service, to solve a small business owner (SBO) need around vehicle maintenance to improve SBO uptime and revenue for Bridgestone." />
            </ListItem>
          </List>
          <Typography variant="h6" color="#388e3c">
            Director & Operating Vice President for Bridgestone-Bandag
          </Typography>
          <Typography variant="subtitle2">
            Nashville, TN from 2015 to 2018
          </Typography>
          <br></br>
          <Typography variant="body2">
            P&L responsibility for the Bandag retread business representing
            $580M in revenue, field operations for franchise technical group,
            and emergency response operations.
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Led field technical operations team in the US and Canada to improve franchise operations at dealer locations resulting in a 9% year over year improvement in audit results." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Developed Commercial tire distribution Strategy based on dealer segmentation to address consolidating marketplace trends and long-term declining share. Implementation resulted in creation of a six-dealer alliance and majority divestment of COO with an impact of $120M." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Developed turnaround strategy for Emergency Road Service group to address service degradation and turnover.  Implementation of strategy delivered simplified billing, improved turnover from 100% to 40% while reducing headcount by 18 and added $2M in incremental operating profit." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Launched Global Retread Management platform to be the global governing body for the Bandag brand resulting in global coordination on three initiatives: product innovation strategy, retread value proposition, and retread perception." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Focused resources and development efforts on new product 3D siping technology resulting in 30% increased wear performance vs. competition." />
            </ListItem>
          </List>
        </Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
      </Grid>
    </div>
  );
}

export default App;
