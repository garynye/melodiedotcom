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
            Global Lead, Breakthrough Innovation
          </Typography>
          <Typography variant="subtitle2">
            Franklin, TN from 2022 to Present
          </Typography>
          <br></br>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body2">
                As the Global Lead for Breakthrough Innovation at Mars Pet
                Nutrition, I am responsible for developing and implementing a
                highly competitive innovation practice for the organization. I
                have successfully negotiated with multiple leadership team
                members and regional presidents to understand market needs and
                create plans for growth.
                <br /> <br />I have also led cross-functional teams in creating
                and launching new, disruptive innovations that are aligned with
                current and emerging trends. As a result, we have 12 pilot
                projects on track for 2023-2025 launch. My efforts have
                contributed to the success and growth of Mars Pet Nutrition.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Responsible for authoring, aligning, and implementing a breakthrough, highly competitive innovation practice for Mars Pet Nutrition." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Negotiates with 7 Global leadership team members, 4 Regional Presidents and 12 market teams to understand markets needs and develop plans to unlock share gaining growth, globally." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Leads cross-functional teams creating and launching disruptive/new to world innovations leveraging current and emerging pet parent trends; first aligned grouping of 12 pilot projects on track for 2023-2025 launch." />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Typography variant="h6" color="#388e3c">
            Sr Marketing Director, Dry Dog Food Portfolio
          </Typography>
          <Typography variant="subtitle2">
            Franklin, TN from 2019 to 2022
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
                <ListItemText primary="Responsible for P&L delivery + 3 yr strategic growth plans, demand creation of US Dry Dog portfolio >$2B in sales inclusive of Pedigree, Iams, Nutro, Cesar, Crave, Karma; track record of delivering results - beat all targets across revenue, margin, earnings by over 5% annually." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowCircleRightIcon />
                </ListItemIcon>
                <ListItemText primary="Led 15-person brand marketing team and 12-person cross-functional team to deliver a first ever Mars unified dry dog food category growth strategy inclusive of SRM, brand communications plans, innovation/renovation pipelines and value leadership initiatives; 3 year strategic plan culminated in revenue growth of Pedigree +29.6%, Iams +20.3%, Nutro +7.3%, Cesar +44.8% and +15 points gross margin." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowCircleRightIcon />
                </ListItemIcon>
                <ListItemText primary="Delivered breakthrough ecommerce strategy, partnered with new GM of D-Commerce, Sales & Analytics teams to step change Dry Dog brand growth on Amazon + Chewy; unlocked meaningful investment and partnership to drive share gaining growth, +38% Iams sales." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowCircleRightIcon />
                </ListItemIcon>
                <ListItemText primary="Executed Purpose Marketing campaigns across branded portfolio; launched Pedigree “Dogs on Zoom” during COVID-19 lockdown, Iams “Nose ID” to reunite pet parents and their lost dogs, Nutro sustainable sourcing – critical enablers to share growth +1.1% in 2022." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowCircleRightIcon />
                </ListItemIcon>
                <ListItemText primary="Champion for diversity/inclusion, collaborated to set department agenda for diverse Associate recruitment, retention and advancement - authored first ever differentiated development plans to formalize mentorship, break down barriers." />
              </ListItem>
            </List>
          </Accordion>
          <Typography variant="h6" color="#388e3c">
            Marketing Director, Digital Marketing Center of Excellence
          </Typography>
          <Typography variant="subtitle2">
            Franklin, TN from 2017 to 2019
          </Typography>
          <br></br>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body2">
                I am proud of the results that we achieved during my time as
                Director of the Digital Marketing Center of Excellence. During
                this time, I built the first Marketing COE team at Mars,
                defining roles and responsibilities and hiring a team of 8 to
                deliver best-in-class digital and e-commerce marketing
                strategies. I also established strategic partnerships with
                Amazon, Google, and Facebook and led the development of the
                Marketing and Sales digital commerce strategy, resulting in an
                86% increase in sales revenue.
                <br />
                <br />
                In addition to increasing sales revenue by 86%, we also received
                recognition as a best-in-class partner by Amazon and developed a
                3-year SEO roadmap that ultimately informed the creation of the
                Global Pet Nutrition plan. Our efforts in building and
                implementing effective digital marketing strategies and our
                commitment to development and learning also helped drive brand
                growth for the future.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Built first-ever Marketing COE team at Mars; defined work and roles, hired 8-person team to build and deliver best-in-class digital and e-commerce marketing strategies for the future – immediate results through data-driven mix of proven & emerging media channels + authored marketing data strategy to improve quality & quantity of 1P data and pave way for creation of CRM, DCO programs." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Owned strategic agency relationships across all creative and media agencies; collaborated with Global and Mars Inc teams on agency deliverables and periodic reviews – unlocked unprecedented levels of support and cost savings." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Established strategic partnerships with Amazon, Google, Facebook; established quarterly face-to-face and annual JBPs – resulted in first-ever platform tests with sales lift results for those partners -- proved marketing delivers sales with highest digital ROIs." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Led development of Marketing & Sales digital commerce strategy; sales revenue +86%, highlighted as best in class partner by Amazon." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Directed team to write first-ever Mars Pet Nutrition paid/organic integrated search strategy, aligned leadership and activated in 2018 based on critical non-branded terms and category entry points - created 3-yr SEO roadmap and ultimately authored Global Pet Nutrition plan." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sponsored development of a digital framework unifying all marketers and agency partners on the Digital Consumer Journey; commonality of language and approach enabled best-in-class digital plans to drive brand growth for 2018 & beyond." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Relentless commitment to Associate development; championed a learning/sharing program; published 8 media test/learn results + relevant case studies and 10 sharing sessions per year - built superior capabilities across media & digital." />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Typography variant="h6" color="#388e3c">
            Senior Brand Manager, Pedigree
          </Typography>
          <Typography variant="subtitle2">
            Franklin, TN from 2015 to 2017
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body2">
                As the senior brand manager for Pedigree, I led the business to
                a full turnaround, exceeding revenue targets and becoming the #1
                dry dog brand in mass distribution. I improved the Pedigree
                margin by 30 percentage points and created successful digital
                marketing campaigns, resulting in increased sales and brand
                awareness. I also expanded into the U.S. Hispanic market and
                established a talent pipeline through the creation of an
                internship program and recruiting efforts.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Led $1B Pedigree business to a full turnaround; exceeded revenue targets every year: 2015 +0.2% (vs 0%); 2016 +5.7% (vs +1.1%); 2017 +1.8% (vs +1%) while improving margin +1% – became #1 dry dog brand in mass distribution." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Authored and aligned strategic direction & associated product plans for Pedigree 5 year brand plans in partnership with sales, R&D, CMI, finance and ops - plans approved and on-track for +$40MM incremental revenue through 2021." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Implemented data-driven pricing/sizing choices, prioritized cost savings projects; improved Pedigree margin +30 ppts." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Created collaborative agency environment around Purpose Marketing campaign 'Feed the Good' enabling breakthrough creative 'Rescue' & multiple award-winning campaigns 'Dark to Light', 'General Howe's Dog', 'Pick-Me', 'Vote for Good', Adoptable Facebook Mask, 'Pupletes' social videos; generated earned coverage in national media - lauded by BBDO CEO as BIC advertising, Cannes Lions Finalist." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Exploded Pedigree’s digital marketing efforts, pioneered first Snapchat ads with +2.4% sales lift, Twitter FirstView ads exceeding benchmarks with 75MM impressions, YouTube Masthead Takeover exceeding benchmarks with 360MM impressions and produced 9 social videos with average VTR of 34.5% vs. >30% target -- +20% $Sales YoY." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Led brand team and four agency partners to execute on U.S. Hispanic Pedigree Brand Vision - launched first-ever Spanish language TV and digital advertising -- paved way for new growth segment for Pedigree for 2017 and beyond." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Identified key functional gap and created marketing talent acquisition plan, authored internship program and led peers in recruiting efforts across 3 schools; 3 interns hired in 2016, 5 interns hired in 2017 -established crucial talent pipeline." />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Typography variant="h6" color="#388e3c">
            Brand Manager, Temptations
          </Typography>
          <Typography variant="subtitle2">
            Franklin, TN from 2013 to 2015
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body2">
                As a brand manager for Temptations, I led the business to exceed
                its growth target for three consecutive years, achieving 19%
                growth in 2013, 15% in 2014, and 13% in 2015. I drove
                advertising and business fundamentals to drive brand and
                category growth, launching successful campaigns such as the
                #PackAttack campaign, which won a silver Cannes Lion in print. I
                also launched the Temptations Tumblers, which helped to increase
                brand household penetration by 9.6 points.
                <br /> <br />
                In addition, I worked with key buyers to address underdeveloped
                cat treat category footprints, leading to incremental
                distribution and category expansion at six top accounts,
                resulting in a 24% growth for the category in 2015, which was 2x
                the growth of the previous year.
                <br /> <br />I also launched the first ever E-commerce specific
                SKUs for Temptations, which became the top-selling products in
                the cat treats category on Amazon within one week of their
                launch. Overall, my efforts contributed to significant growth
                for the Temptations brand and the cat treats category.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Led Temptations business to exceed 12% growth target 3 yrs in a row: 19% in 2013, 15% in 2014, 13% in 2015." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Relentlessly drove advertising and business fundamentals to drive brand and category growth; launched #PackAttack campaign, awarded silver Cannes Lion in print, launched Temptations Tumblers breakthrough innovation - grew brand household penetration +9.6pts vs PY." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="•	Authored sell stories and met with key buyers to address underdeveloped cat treat category footprint; won incremental distribution and category expansion at 6 top accounts enabled +24% growth for the category in 2015, +2x growth YoY." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Launched first ever E-commerce specific SKUs; items were #1 and #3 in cat treats category on Amazon after 1 week." />
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
            Associate & Senior Associate Brand Manager, KRAFT Natural Cheese
          </Typography>
          <Typography variant="subtitle2">
            Glenview, IL from 2010 to 2013
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body2">
                As an Associate and Senior Associate Brand Manager at Kraft
                Foods Group, I contributed to the success of the KRAFT Natural
                Cheese brand by driving strong financial performance and driving
                innovation. I led the launch of the successful Touch of
                Philadelphia shredded cheese product and directed the "Make
                Something Amazing" marketing campaign. Additionally, I led the
                development of a successful $1 product platform that resulted in
                the fastest launch ever.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Led KRAFT Cheese to over-deliver on all financial metrics: 2011 +9% revenue, +48% earnings; 2012 +3% revenue, +12% earnings." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Spearheaded Touch of Philadelphia shredded cheese innovation launch; exceeded benchmarks in trial & repeat; earned +$100MM revenue, delivered 16% category expansion and 83% new consumers to Kraft brand in year one." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Directed “Make Something Amazing” marketing campaign across 5 Kraft brands including asset creation & usage strategy with 5 agency teams, 3 commercials, 4 documentaries, +45 pieces of recipe/web content -- brand equity growth above industry benchmarks." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Led Kraft Cheese Business-wide creation of $1 product platform across 7 separate business teams unlocking Value Channel growth; directed team to fastest launch ever; 4 new SKUs ready in 5 weeks; oversaw in-store execution generating $5MM revenue annually." />
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
            Intelligence Officer
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
              <Typography variant="body2">
                As an intelligence officer in the United States Air Force, I led
                a team that discovered 140 IEDs and increased available
                intelligence by 250% through the use of weapons systems video. I
                received the AF Achievement Medal for this accomplishment. I
                also planned 28 reconnaissance flights per day in Iraq and
                Afghanistan, leading to the location of terrorist camps.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Led 110-person team responsible for analyzing adversary military activities on 4 different high priority national security missions." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Initiated first-ever taskings of weapons systems video to locate improvised explosive devices (IEDs), resulting in discovery of 140 IEDs and increased available intelligence by 250% -- awarded AF Achievement Medal." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Planned 28 reconnaissance flights daily in Iraq & Afghanistan while deployed to Al Udeid Air Base, Qatar - located terrorist camps." />
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
          <Typography variant="subtitle2">December 2006</Typography>
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
          <Typography variant="subtitle2">St. Paul, MN | May 2003</Typography>

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
