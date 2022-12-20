import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
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
import CardContent from "@mui/material/CardContent";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState, useEffect } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item={true} xs={12} sm={12}>
          <Card
            justifyContent="center"
            align="center"
            sx={{
              backgroundImage: `url("https://res.cloudinary.com/assurily/image/upload/c_scale,w_1280/v1638896303/garynyedotcom/IMG_8491_i3o9cq.webp")`,
              boxShadow: 1,
              borderRadius: 1,
              p: 2,
              height: isMobile ? window.innerHeight : 0.6 * window.innerHeight,
              backgroundPosition: "15% 0%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  height: isMobile
                    ? 0.4 * window.innerHeight
                    : 0.2 * window.innerHeight,
                }}
              ></Box>
              <Typography variant="h5" color="common.white">
                Hello, I'm
              </Typography>
              <Typography variant="h3" color="common.white">
                Melodie Nye
              </Typography>
              <br></br>
              <a
                style={{ textDecoration: "none" }}
                href="mailto:melodie@melodienye.com"
              >
                <Button variant="contained">Email Me</Button>
              </a>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid
          container
          direction={"row"}
          justifyContent="center"
          item={true}
          xs={12}
          sm={12}
        >
          <Card
            sx={{
              boxShadow: 0,
              borderRadius: 0,
              p: 2,
              width: "100",
              backgroundColor: "transparent",
            }}
          >
            <Typography variant="h4">
              <RemoveIcon /> My journey <RemoveIcon />
            </Typography>
          </Card>
        </Grid>

        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={12} sm={2}>
          <Card sx={{ margin: 2, maxWidth: 150, backgroundColor: "#FFFFFF" }}>
            <CardMedia
              component="img"
              image="https://res.cloudinary.com/assurily/image/upload/v1671506558/melodienyedotcom/mars_grsurb.jpg"
              alt="Mars Incorporated"
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <Typography variant="h5" color="#0288d1">
            Mars Incorporated
          </Typography>
          <Typography variant="h6" color="#388e3c">
            Sr Marketing Director, Dry Dog Food Portfolio
          </Typography>
          <Typography variant="subtitle2">
            Nashville, TN from 2018 to Present
          </Typography>
          <br></br>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body2">
                As the Senior Director of Marketing for the Dry Dog Food
                Portfolio, I was responsible for the P&L and three-year
                strategic growth plans for the US Dry Dog portfolio, which had
                over $2 billion in sales. My team included a 15-person brand
                marketing team and a 12-person cross-functional team, and we
                worked to deliver growth strategies, innovation and renovation
                pipelines, and white space opportunities to capture share for
                the Mars brand.
                <br />
                <br />
                I also implemented a successful ecommerce strategy and partnered
                with the D-Commerce, Sales, and Analytics teams to drive growth
                on Amazon and Chewy, resulting in a 37.6% increase for the Iams
                brand. In addition, I led the marketing efforts for four global
                brands and worked with brand teams from Europe, Russia, Latin
                America, and Asia to deliver global innovations and brand
                communications.
                <br />
                <br />I also implemented purpose marketing campaigns and
                initiatives focused on diversity and inclusion, and I authored
                the first differentiated development plans to formalize
                mentorship and break down barriers within the department.
                Overall, I exceeded all targets for revenue, margin, and
                earnings by over 5% each year.
              </Typography>
            </AccordionSummary>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <ArrowCircleRightIcon />
                </ListItemIcon>
                <ListItemText primary="Bullet. " />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowCircleRightIcon />
                </ListItemIcon>
                <ListItemText primary="Bullet. ." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowCircleRightIcon />
                </ListItemIcon>
                <ListItemText primary="Bullet." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowCircleRightIcon />
                </ListItemIcon>
                <ListItemText primary="Bullet. " />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowCircleRightIcon />
                </ListItemIcon>
                <ListItemText primary="Bullet. " />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowCircleRightIcon />
                </ListItemIcon>
                <ListItemText primary="Bullet. " />
              </ListItem>
            </List>
          </Accordion>
          <Typography variant="h6" color="#388e3c">
            Marketing Director
          </Typography>
          <Typography variant="subtitle2">
            Nashville, TN from 2013 to 2018
          </Typography>
          <br></br>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body2">Summary.</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="bullet." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={12} sm={2}>
          <Card sx={{ margin: 2, maxWidth: 150, backgroundColor: "#FFFFFF" }}>
            <CardMedia
              component="img"
              image="https://res.cloudinary.com/assurily/image/upload/v1671506558/melodienyedotcom/kraft_m4g33x.jpg"
              alt="Kraft Foods"
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <Typography variant="h5" color="#0288d1">
            Kraft Foods
          </Typography>
          <Typography variant="h6" color="#388e3c">
            Senior Associate Brand Manager
          </Typography>
          <Typography variant="subtitle2">
            Chicago, IL from 2010 to 2013
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body2">SUMMARY.</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Typography variant="h6" color="#388e3c">
            Senior Associate Brand Manager
          </Typography>
          <Typography variant="subtitle2">
            Nashville, TN from 2012 to 2014
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body2">SUMMARY.</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Typography variant="h6" color="#388e3c">
            Senior Associate Brand Manager
          </Typography>
          <Typography variant="subtitle2">Nashville, TN - 2011</Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body2">SUMMARY.</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Typography variant="h6" color="#388e3c">
            Senior Associate Brand Manager
          </Typography>
          <Typography variant="subtitle2">Nashville, TN - 2010</Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body2">SUMMARY.</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={12} sm={2}>
          <Card sx={{ margin: 2, maxWidth: 150, backgroundColor: "#FFFFFF" }}>
            <CardMedia
              component="img"
              image="https://res.cloudinary.com/assurily/image/upload/v1671506558/melodienyedotcom/usaf_vtorlq.jpg"
              alt="US Air Force"
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <Typography variant="h5" color="#0288d1">
            US Air Force
          </Typography>
          <Typography variant="h6" color="#388e3c">
            Officer
          </Typography>
          <Typography variant="subtitle2">
            Everywhere, World from 2003 to 2010
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body2">SUMMARY.</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Typography variant="h6" color="#388e3c">
            Officer
          </Typography>
          <Typography variant="subtitle2">
            Location, State from 2003 to 2006
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body2">SUMMARY.</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={12} sm={2}>
          <Card sx={{ margin: 2, maxWidth: 150, backgroundColor: "#FFFFFF" }}>
            <CardMedia
              component="img"
              image="https://res.cloudinary.com/assurily/image/upload/v1671506558/melodienyedotcom/asu_eefjwp.jpg"
              alt="ASU"
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <Typography variant="h5" color="#0288d1">
            Arizona State University - W. P. Carey School of Business
          </Typography>
          <Typography variant="h6" color="#388e3c">
            Master of Business Administration
          </Typography>
          <Typography variant="subtitle2">2005 to 2006</Typography>

          <List dense>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Optional Text" />
            </ListItem>
          </List>
        </Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={12} sm={2}>
          <Card sx={{ margin: 2, maxWidth: 150, backgroundColor: "#FFFFFF" }}>
            <CardMedia
              component="img"
              image="https://res.cloudinary.com/assurily/image/upload/v1671506558/melodienyedotcom/thomas_befnky.jpg"
              alt="UST"
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <Typography variant="h5" color="#0288d1">
            University of St. Thomas
          </Typography>
          <Typography variant="h6" color="#388e3c">
            BA, French, Russian
          </Typography>
          <Typography variant="subtitle2">
            St. Paul, MN from 1999 to 2003
          </Typography>

          <List dense>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Activities and Societies: AF ROTC scholarship recipient" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="BA in French language and BA in Russian language. I have visited both countries and am proficient in both languages." />
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
