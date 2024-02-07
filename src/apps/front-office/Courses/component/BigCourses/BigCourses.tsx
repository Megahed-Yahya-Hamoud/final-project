import { Button, Grid } from "@mantine/core";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { useEffect, useState } from "react";
import classes from "./BigCourses.module.css";
export type BigCoursesType = {
  id: number | string;
  img: string;
  title: string;
  hint: string;
  time: number;
  price: string;
  offer: string;
};
export default function BigCourses() {
  const [dataBigCourses, setDataBigCourses] = useState<BigCoursesType[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/bigCourses")
      .then(res => res.json())
      .then(data => setDataBigCourses(data));
  }, []);
  return (
    <>
      <div id="months" className={classes.backBigCourses}>
        <div className={classes.parent}>
          <div className={classes.titleBigCourses}>
            <span className={classes.placement}>
              PLACEMENT GUARANTEE COURSES
            </span>
            <span className={classes.months}>4-12 months</span>
          </div>
          <div>
            <span className={classes.dash}></span>
            <span className={classes.fastest}>
              Guaranteed way to start your career
            </span>
          </div>
          <div className={classes.lest}>
            <p className={classes.lestLearning}>
              <i
                className="fa-solid fa-check"
                style={{
                  color: "rgb(74,189,254)",
                  fontSize: "17px",
                  paddingRight: "5px",
                }}></i>
              Guaranteed placement
            </p>
            <p className={classes.lestLearning}>
              <i
                className="fa-solid fa-check"
                style={{
                  color: "rgb(74,189,254)",
                  fontSize: "17px",
                  paddingRight: "5px",
                }}></i>
              Get 100% refund if not hired
            </p>
            <p className={classes.lestLearning}>
              <i
                className="fa-solid fa-check"
                style={{
                  color: "rgb(74,189,254)",
                  fontSize: "17px",
                  paddingRight: "5px",
                }}></i>
              Become job ready
            </p>
          </div>
          <div>
            <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}>
              {dataBigCourses.map(item => (
                <Grid.Col
                  style={{ marginBottom: "20px" }}
                  key={item.id}
                  span={{ base: 12, md: 6, lg: 3 }}>
                  <Link
                    to={URLS.viewBigCourses(item)}
                    style={{ textDecoration: "none" }}>
                    <div className={classes.container}>
                      <div>
                        <img src={item.img} width={"100%"} height={"100%"} />
                      </div>
                      <div style={{ margin: "5px 0px 5px 15px" }}>
                        <p className={classes.titleCourse}>{item.title}</p>
                        <p className={classes.hintCourses}>{item.hint}</p>
                        <p className={classes.description}>
                          <i
                            className="fa-solid fa-clock"
                            style={{ marginRight: "10px" }}></i>
                          {item.time} /months courses
                        </p>
                        <p className={classes.description}>
                          <i
                            className="fa-solid fa-money-bill"
                            style={{ marginRight: "10px" }}></i>
                          {item.price}
                        </p>
                        <p className={classes.description}>
                          <i
                            className="fa-solid fa-suitcase"
                            style={{ marginRight: "10px" }}></i>
                          {item.offer}
                        </p>
                      </div>
                      <div className={classes.app}>
                        <div style={{ fontSize: "13px" }}>
                          <p style={{ margin: "0px", color: "#6F6666" }}>
                            Application closes
                          </p>
                          <p
                            style={{
                              margin: "0px",
                              color: "#484848",
                              fontWeight: 600,
                            }}>
                            1st Feb 2024
                          </p>
                        </div>
                        <div>
                          <Button
                            onClick={() => {
                              location.href = "#";
                            }}>
                            know More{" "}
                            <i
                              className="fa-solid fa-angle-right"
                              style={{
                                color: "aliceblue",
                                marginLeft: "5px",
                              }}></i>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Grid.Col>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}
