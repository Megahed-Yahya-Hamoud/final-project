import { Grid } from "@mantine/core";
import BestStart from "../component/BestStart";
import BigCourses from "../component/BigCourses/BigCourses";
import CategoryCourses from "../component/CategoryCourses/CategoryCourses";
import CountDown from "../component/CountDown/CountDown";
import CounterLearners from "../component/CounterLearners/CounterLearners";
import LogoInterShips from "../component/LogoInterShips/LogoInterShips";
import TopCompanies from "./../component/Companies/TopCompanies";
import classes from "./CoursesPage.module.css";
export default function CoursesPage() {
  return (
    <>
      <div style={{ backgroundColor: "#EEFBFF" }}>
        <div
          style={{
            textAlign: "center",
            backgroundColor: "#EEFBFF",
            marginTop: "-10px",
          }}>
          <BestStart />
          <p className={classes.logo}>Learn, practice, and get hired!</p>
        </div>
        <div className={classes.courses}>
          <div className={classes.up_grid}>
            <Grid>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <a href="#weeks" className={classes.poy}>
                  <div>
                    <div className={classes.weekStyle}>
                      <p className={classes.certification}>
                        Certification courses
                      </p>
                      <p className={classes.week}>4-8 weeks</p>
                    </div>
                    <p className={classes.learn}>
                      Learn in-demand skills and get certified
                    </p>
                    <p className={classes.explore}>
                      Explore now{" "}
                      <i
                        className="fa-solid fa-arrow-right"
                        style={{ paddingLeft: "5px" }}></i>
                    </p>
                  </div>
                </a>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <a href="#months" className={classes.girl}>
                  <div>
                    <div className={classes.weekStyle}>
                      <p className={classes.certification}>
                        Placement Guarantee
                      </p>
                      <p className={classes.week}>4-12 months</p>
                    </div>
                    <p className={classes.learn}>
                      Upskill and get a guaranteed placement
                    </p>
                    <p className={classes.explore}>
                      Explore now{" "}
                      <i
                        className="fa-solid fa-arrow-right"
                        style={{ paddingLeft: "5px" }}></i>
                    </p>
                  </div>
                </a>
              </Grid.Col>
              {/* <Grid.Col span={{ base: 12, md: 6 }}>2</Grid.Col> */}
            </Grid>
          </div>
        </div>
        <div style={{ marginTop: "100px" }}>
          <p className={classes.top_companies}>Top companies hiring from us</p>
          <TopCompanies />
        </div>
      </div>
      <div id="weeks" className={classes.upToWeek}>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <p className={classes.certification}>CERTIFICATION COURSES</p>
          <div className={classes.weeks}>4-8 weeks</div>
        </div>
        <div>
          <span className={classes.dash}></span>
          <span className={classes.fastest}>Fastest way to build your CV</span>
        </div>
        <div className={classes.lest}>
          <p className={classes.lestLearning}>
            <i
              className="fa-solid fa-check"
              style={{
                color: "#00a5ec",
                fontSize: "17px",
                paddingRight: "5px",
              }}></i>
            Learn at your own schedule
          </p>
          <p className={classes.lestLearning}>
            <i
              className="fa-solid fa-check"
              style={{
                color: "#00a5ec",
                fontSize: "17px",
                paddingRight: "5px",
              }}></i>
            Practical learning
          </p>
          <p className={classes.lestLearning}>
            <i
              className="fa-solid fa-check"
              style={{
                color: "#00a5ec",
                fontSize: "17px",
                paddingRight: "5px",
              }}></i>
            Government-certified online training{" "}
          </p>
        </div>
        <div>
          <img
            src="https://trainings.internshala.com/cached_uploads/homepage/media/courses_section/banners/End_Of_Season_Winter_Sale-banner-1/banner-1920.png?v=8"
            className={classes.imageSale}
          />
        </div>
        <CountDown />
      </div>

      <div className={classes.categoryCourses}>
        <CategoryCourses />
      </div>
      <div>
        <BigCourses />
      </div>
      <div>
        <CounterLearners />
      </div>
      <div>
        <LogoInterShips />
      </div>
    </>
  );
}
