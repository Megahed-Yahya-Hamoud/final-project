import { Grid } from "@mantine/core";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "rgb(51,51,51)", padding: "20px 50px" }}>
      <Grid>
        <Grid.Col
          className={classes.iconImage}
          span={{ base: 12, md: 6, lg: 3 }}>
          <div>
            <div className={classes.upImage}>
              <img
                className={classes.imageFooter}
                // src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/bf2bff25fe751375afbb0fd63cebc52e"
                // src="https://images.squarespace-cdn.com/content/v1/5c2cbb6aec4eb70767c6ffde/1652959405799-FC8IWUKWVBOGW4950LVW/2.png?format=2500w"
                src="https://images.squarespace-cdn.com/content/v1/5a6798b2b7411cbed3514c94/6044ba84-7259-4546-869c-95d8a1ff04d6/Freedom+Church+Internships.png"
              />
            </div>

            {/* <p className={classes.logo}>internships</p> */}
            <p className={classes.hintFooter}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              omnis, ipsa neque ratione
            </p>
          </div>
        </Grid.Col>
        <Grid.Col className={classes.col} span={{ base: 12, md: 6, lg: 3 }}>
          <ul className={classes.upUl}>
            <li className={classes.headerLi}>Internship by places</li>
            <li className={classes.liHover}>
              <a href="#"> internship in Egypt </a>
            </li>
            <li className={classes.liHover}>
              <a href="#"> Internships in Dubai </a>
            </li>
            <li className={classes.liHover}>
              <a href="#"> internship in England </a>
            </li>
            <li className={classes.liHover}>
              <a href="#"> internship in India </a>
            </li>
            <li className={classes.liHover}>
              <a href="#"> internship in German </a>
            </li>
          </ul>
        </Grid.Col>
        <Grid.Col className={classes.col} span={{ base: 12, md: 6, lg: 3 }}>
          <ul className={classes.upUl}>
            <li className={classes.headerLi}>Internship by stream</li>
            <li className={classes.liHover}>
              <a href="#"> internship in Egypt </a>
            </li>
            <li className={classes.liHover}>
              <a href="#"> Internships in Dubai </a>
            </li>
            <li className={classes.liHover}>
              <a href="#"> internship in England </a>
            </li>
            <li className={classes.liHover}>
              <a href="#"> internship in India </a>
            </li>
            <li className={classes.liHover}>
              <a href="#"> internship in German </a>
            </li>
          </ul>
        </Grid.Col>

        <Grid.Col className={classes.col} span={{ base: 12, md: 6, lg: 3 }}>
          <ul className={classes.upUl}>
            <li className={classes.headerLi}>Jobs by places</li>
            <li className={classes.liHover}>
              <a href="#"> job in Dubai </a>
            </li>
            <li className={classes.liHover}>
              <a href="#"> job in India </a>
            </li>
            <li className={classes.liHover}>
              <a href="#"> job in German </a>
            </li>
            <li className={classes.liHover}>
              <a href="#"> job in Egypt </a>
            </li>
            <li className={classes.liHover}>
              <a href="#"> job in England </a>
            </li>
          </ul>
        </Grid.Col>
      </Grid>

      <div
        style={{
          marginTop: "10px",
          height: "1px",
          backgroundColor: "rgb(255 255 255 / 0.5)",
        }}></div>

      <div className={classes.social}>
        <div
          className={classes.iconSocial}
          style={{ display: "flex", gap: "12px" }}>
          <a href="#">
            <i
              style={{ fontSize: "25px", color: "aliceblue" }}
              className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i
              style={{ fontSize: "25px", color: "aliceblue" }}
              className="fa-brands fa-twitter"></i>
          </a>

          <a href="#">
            <i
              style={{ fontSize: "25px", color: "aliceblue" }}
              className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i
              style={{ fontSize: "25px", color: "aliceblue" }}
              className="fa-brands fa-youtube"></i>
          </a>
        </div>
        <div>
          <p style={{ color: "aliceblue", marginTop: "0px" }}>
            © Copyright 2023 Internships
          </p>
        </div>
      </div>
    </div>
  );
}
