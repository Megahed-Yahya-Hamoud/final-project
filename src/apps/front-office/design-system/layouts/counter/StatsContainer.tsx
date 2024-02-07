import { Grid } from "@mantine/core";
import classes from "./Stats.module.css";
export default function StatsContainer() {
  return (
    <div className={classes.up}>
      {" "}
      <Grid style={{ margin: "0px 50px" }}>
        <Grid.Col
          style={{ justifyContent: "center", display: "grid" }}
          className={classes.frameOne}
          span={{ base: 6, md: 6, lg: 3 }}>
          <p className={classes.counter}>300K+</p>
          <p className={classes.title}>companies hiring</p>
        </Grid.Col>
        <Grid.Col
          style={{ justifyContent: "center", display: "grid" }}
          className={classes.frameTwo}
          span={{ base: 6, md: 6, lg: 3 }}>
          <p className={classes.counter}>10K+</p>
          <p className={classes.title}>new openings everyday</p>
        </Grid.Col>
        <Grid.Col
          className={classes.frameThree}
          style={{ justifyContent: "center", display: "grid" }}
          span={{ base: 6, md: 6, lg: 3 }}>
          <p className={classes.counter}>21Mn+</p>
          <p className={classes.title}>active students</p>
        </Grid.Col>
        <Grid.Col
          className={classes.frameFour}
          style={{ justifyContent: "center", display: "grid" }}
          span={{ base: 6, md: 6, lg: 3 }}>
          <p className={classes.counter}>600K+</p>
          <p className={classes.title}>learners</p>
        </Grid.Col>
      </Grid>
    </div>
  );
}
