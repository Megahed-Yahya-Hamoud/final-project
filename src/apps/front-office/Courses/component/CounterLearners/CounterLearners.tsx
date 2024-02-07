import { Grid } from "@mantine/core";
import classes from "./CounterLearners.module.css";
export default function CounterLearners() {
  return (
    <>
      <div className={classes.styleCounter}>
        <div>
          <div>
            <span className={classes.dash}></span>
            <span className={classes.fastest}>
              Giving flight to your ambitions{" "}
            </span>
          </div>
          <p className={classes.realSuccess}>
            Real success requires the right skillset. Through our online
            courses, you too can give wings to your dreams.
          </p>
        </div>
        <div style={{ marginTop: "40px" }}>
          <Grid style={{ margin: "0px 0px" }}>
            <Grid.Col
              style={{ justifyContent: "center", display: "grid" }}
              className={classes.stateOne}
              span={{ base: 12, md: 6, lg: 3 }}>
              <p className={classes.state}>600K+</p>
              <p className={classes.nameState} style={{ paddingLeft: "30px" }}>
                Learners
              </p>
            </Grid.Col>
            <Grid.Col
              style={{ justifyContent: "center", display: "grid" }}
              className={classes.stateTwo}
              span={{ base: 12, md: 6, lg: 3 }}>
              <p className={classes.state}>200M+</p>
              <p className={classes.nameState} style={{ paddingLeft: "10px" }}>
                Learning Minutes
              </p>
            </Grid.Col>
            <Grid.Col
              className={classes.stateThree}
              style={{ justifyContent: "center", display: "grid" }}
              span={{ base: 12, md: 6, lg: 3 }}>
              <p className={classes.state}>4.5/5</p>
              <p className={classes.nameState} style={{ paddingLeft: "10px" }}>
                Average rating
              </p>
            </Grid.Col>
            <Grid.Col
              className={classes.stateFour}
              style={{ justifyContent: "center", display: "grid" }}
              span={{ base: 12, md: 6, lg: 3 }}>
              <p className={classes.state}>1.3M+</p>
              <p className={classes.nameState} style={{ paddingLeft: "20px" }}>
                Placements
              </p>
            </Grid.Col>
          </Grid>
        </div>
      </div>
    </>
  );
}
