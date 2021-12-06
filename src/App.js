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
        <Typography variant="h5">Hello, I'm</Typography>
        <Typography variant="h3">Gary Nye,</Typography>
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
        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={12} sm={2}>
          <Card sx={{ margin: 2, maxWidth: 150, backgroundColor: "#FFFFFF" }}>
            <CardMedia
              component="img"
              image="https://media-exp1.licdn.com/dms/image/C4D0BAQFxhsUQuX5Qyg/company-logo_200_200/0/1561991494491?e=1646870400&v=beta&t=H-i2LrXQi-WF9SPeDmeF-sy2npJiLa8s2st6s4nDjLQ"
              alt="Mars Inc."
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <Typography variant="h5" color="#0288d1">
            Mars Incorporated
          </Typography>
          <Typography variant="h6" color="#388e3c">
            Senior Business Operations Team Leader
          </Typography>
          <Typography variant="subtitle2">
            Nashville, TN from 2014 to 2015
          </Typography>

          <List dense>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Led purchasing operational integration for Mars Petcare Pet Specialty, Petcare P&G, and Mars Petcare US divisions into Mars Petcare NA after Petcare P&G acquisition. Final organization design provided access to 55 associates vs. a prior of 11 for the Pet Specialty division and no disruption to business operations." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Designed Mars Strategic Operations Methodology to address the need for a robust analytical framework to optimize internal and external operation planning. Initial categories are on track for October 2015." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Implemented new procure to pay procedure and supplier owned inventory to address a business cash challenge. Results for Australian sourced Lamb drove a positive cash impact of $4M." />
            </ListItem>
          </List>
          <Typography variant="h6" color="#388e3c">
            Sr. Category Insights Manager
          </Typography>
          <Typography variant="subtitle2">
            Nashville, TN from 2012 to 2014
          </Typography>

          <List dense>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Created Seaboard Lane Insights Center, an 18,000 sqft research facility, to address a speed to insights generation need at Mars Petcare NA in 6 months from concept to opening. Results enabled insights generation improvement from 18 to 6 months, research savings of $1.2M, and increased earnings of $12.2M." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Developed Wet Dog and Dog C&T aisle redesigns based on shopper insights and deployed to 9 priority accounts. Store test at Meijer achieved a 16% lift in category dollar sales, 34% lift on Cesar, and reversed decline of Pedigree vs. control stores." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Led IRI to Nielsen transition, coding, and training for Mars Petcare US Sales that delivered store level data and visibility to all categories and delivered $300k dollar savings." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Collaborated with Mars Petcare Canada to apply Shopper Based Design (SBD) approach for a total department redesign at Sobeys. Sobeys accepted concepts and MPC Canada now utilizes SBD." />
            </ListItem>
          </List>
          <Typography variant="h6" color="#388e3c">
            Trade Strategy Manager (Graduate Leadership Development Program)
          </Typography>
          <Typography variant="subtitle2">Nashville, TN from 2011</Typography>

          <List dense>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Developed a new Trade allocation framework to deploy $255M in customer trade dollars to strategic accounts. Strategic accounts went from a 102 index of trade dollars to a 110 index, simplified the accrual process by 96% and improved start of year allocation from 65% to 93%." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Constructed new Price Card and deployed in Jan 2012 to address process gaps and align with internal strategies. Results were $2.3M in savings driven by truck weight increase of 3000 lbs, 7% improvement in  Case Pick and increased collaboration with customers through a proactive process." />
            </ListItem>
          </List>
          <Typography variant="h6" color="#388e3c">
            Logistics Manager (Graduate Leadership Development Program)
          </Typography>
          <Typography variant="subtitle2">Nashville, TN from 2010</Typography>

          <List dense>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Developed inbound materials hub and spoke model. Study projected to improve inventory on essentials and slow-moving packaging by 18% and reduced miles by 14% for $1.8M in savings." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Executed a $15M emergency bid for a warehouse transition at West Jefferson, OH to address a financially unstable 3PL that resulted in $1.2M cash generation and maintained CSL." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Negotiated a build to suit lease for a $47M 1.3M SQFT RDC in Columbus, OH to consolidate two existing distribution centers.  Project resulted in $17M savings and reduced supply chain risk." />
            </ListItem>
          </List>
        </Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={12} sm={2}>
          <Card sx={{ margin: 2, maxWidth: 150, backgroundColor: "#FFFFFF" }}>
            <CardMedia
              component="img"
              image="https://media-exp1.licdn.com/dms/image/C560BAQHZnQf3t8fKKg/company-logo_200_200/0/1620306010588?e=1646870400&v=beta&t=aes49tO8g1rjQpnIyXesgueUQFxnZiTsSu2bgikXjpM"
              alt="Ford"
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <Typography variant="h5" color="#0288d1">
            Ford Motor Company
          </Typography>
          <Typography variant="h6" color="#388e3c">
            Global Launch Strategy Engineer
          </Typography>
          <Typography variant="subtitle2">
            Detroit, MI from 2006 to 2010
          </Typography>

          <List dense>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Designed and launched a global product reporting system in Europe, South America, and Asia-Pacific regions. This system standardized weekly status reports to the CEO on product launches for all countries and reduced workload redundancies by 75%." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Led a team of seven engineers to improve the Global Launch Quality Operating System and launched globally. Results were a more robust Quality Operating System and the implementation of a global solution that provides all product launch deliverables to associates." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Developed launch validation strategies to maintain quality and reduce risk with resourcing of three supplier plants impacting eight vehicle lines. Results were zero downtime for all final assembly plants and no quality degradation." />
            </ListItem>
          </List>
          <Typography variant="h6" color="#388e3c">
            Ford College Graduate Developmental Program
          </Typography>
          <Typography variant="subtitle2">
            Detroit, MI from 2003 to 2006
          </Typography>

          <List dense>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Managed Piston & Rod sub assembly line at Romeo Engine Plant and developed process flow improvement with UAW that resulted in an efficiency increase of 8% and a labor reduction of 17%." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Analyzed and designed the resolution of exhaust body interaction on the 2007 SVT Mustang. Associated design resolution led to 100% improvement of the sound quality issue." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Developed Facilities, Tooling, and Labor cost study for the 2007 Lincoln Town Car Limousine. Interfaced with product development and manufacturing to identify cost study improvements that resulted in a budget of $2.4M vs. target of $3.5M." />
            </ListItem>
          </List>
        </Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={12} sm={2}>
          <Card sx={{ margin: 2, maxWidth: 150, backgroundColor: "#FFFFFF" }}>
            <CardMedia
              component="img"
              image="https://media-exp1.licdn.com/dms/image/C4D0BAQEhm6CxadhHZg/company-logo_200_200/0/1584994142361?e=1646870400&v=beta&t=W9lMHdZQHLRqF_AElBVYyRBS1sIo8RjoBquNoEA3-OU"
              alt="UM"
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <Typography variant="h5" color="#0288d1">
            Ford Motor Company
          </Typography>
          <Typography variant="h6" color="#388e3c">
            Global Launch Strategy Engineer
          </Typography>
          <Typography variant="subtitle2">
            Ann Arbor, MI from 2007 to 2009
          </Typography>

          <List dense>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="President of the DTE Clean Energy Prize Competition" />
            </ListItem>
          </List>
        </Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={12} sm={2}>
          <Card sx={{ margin: 2, maxWidth: 150, backgroundColor: "#FFFFFF" }}>
            <CardMedia
              component="img"
              image="https://media-exp1.licdn.com/dms/image/C560BAQHdGNXEdwcaUg/company-logo_200_200/0/1519856161122?e=1646870400&v=beta&t=uL_ZMYxrO9j-7ZoSMCCjHFOvbAMHCpUxOMYHuKKzs1I"
              alt="MTU"
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <Typography variant="h5" color="#0288d1">
            Michigan Technological University
          </Typography>
          <Typography variant="h6" color="#388e3c">
            Bachelor of Science in Computer Engineering
          </Typography>
          <Typography variant="subtitle2">
            Houghton, MI from 1999 to 2003
          </Typography>

          <List dense>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Resident Assistant: 2001-2003" />
            </ListItem>
          </List>
        </Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
      </Grid>
      <Box
        sx={{
          height: 300,
        }}
      ></Box>
    </div>
  );
}

export default App;
