import { Accordion, Container, Grid, Title } from "@mantine/core";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { useEffect, useState } from "react";
import classes from "./CategoryCourses.module.css";
export type DropdownCourses = {
  id: number | string;
  img: string;
  time: number;
  rate: number;
  title: string;
  student: string;
  link: string;
};

export default function CategoryCourses() {
  const [courses, setCourses] = useState<DropdownCourses[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);
  return (
    <>
      <Container size="lg" className={classes.wrapper}>
        <Title ta="center" className={classes.titleCategory}>
          Categories Courses
        </Title>

        <Accordion variant="separated">
          <Accordion.Item className={classes.item} value="reset-password">
            <Accordion.Control
              styles={{ label: { fontWeight: "600" } }}
              className={classes.category}>
              Most popular
            </Accordion.Control>

            <Accordion.Panel>
              <Grid>
                {courses.map(item => (
                  <Grid.Col key={item.id} span={{ base: 12, md: 6, lg: 4 }}>
                    <Link
                      to={URLS.viewCourse(item)}
                      className={classes.styleLink}>
                      <div
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                          borderRadius: "10px",
                        }}>
                        <div>
                          <img
                            className={classes.image}
                            src={item.img}
                            width={"100%"}
                            height={"100%"}
                          />
                        </div>
                        <div
                          style={{
                            margin: "1px 0px 8px  10px",
                            display: "inline-block",
                          }}>
                          <p className={classes.time}>{item.time}weeks</p>
                          <p className={classes.title}>{item.title}</p>
                          <div>
                            <span className={classes.rate}>
                              <i
                                className="fa-solid fa-star"
                                style={{ color: "#FFD43B" }}></i>
                              {item.rate}
                            </span>
                            <span className={classes.span}></span>
                            <span className={classes.learn}>
                              {item.student} Learners
                            </span>
                          </div>
                        </div>
                        <div className={classes.linkMore}>
                          <p className={classes.knowMore}>
                            know more{" "}
                            <i className="fa-solid fa-angle-right"></i>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </Grid.Col>
                ))}
              </Grid>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="another-account">
            <Accordion.Control
              styles={{ label: { fontWeight: "600" } }}
              className={classes.category}>
              Programming
            </Accordion.Control>
            <Accordion.Panel>
              <Grid>
                {courses.map(item => (
                  <Grid.Col key={item.id} span={{ base: 12, md: 6, lg: 4 }}>
                    <Link
                      to={URLS.viewCourse(item)}
                      className={classes.styleLink}>
                      <div
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                          borderRadius: "10px",
                        }}>
                        <div>
                          <img
                            className={classes.image}
                            src={item.img}
                            width={"100%"}
                            height={"100%"}
                          />
                        </div>
                        <div
                          style={{
                            margin: "1px 0px 8px  10px",
                            display: "inline-block",
                          }}>
                          <p className={classes.time}>{item.time}weeks</p>
                          <p className={classes.title}>{item.title}</p>
                          <div>
                            <span className={classes.rate}>
                              <i
                                className="fa-solid fa-star"
                                style={{ color: "#FFD43B" }}></i>
                              {item.rate}
                            </span>
                            <span className={classes.span}></span>
                            <span className={classes.learn}>
                              {item.student} Learners
                            </span>
                          </div>
                        </div>
                        <div className={classes.linkMore}>
                          <p className={classes.knowMore}>
                            know more{" "}
                            <i className="fa-solid fa-angle-right"></i>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </Grid.Col>
                ))}
              </Grid>
            </Accordion.Panel>{" "}
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="newsletter">
            <Accordion.Control
              styles={{ label: { fontWeight: "600" } }}
              className={classes.category}>
              Business & Management
            </Accordion.Control>
            <Accordion.Panel>
              <Grid>
                {courses.map(item => (
                  <Grid.Col key={item.id} span={{ base: 12, md: 6, lg: 4 }}>
                    <Link
                      to={URLS.viewCourse(item)}
                      className={classes.styleLink}>
                      <div
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                          borderRadius: "10px",
                        }}>
                        <div>
                          <img
                            className={classes.image}
                            src={item.img}
                            width={"100%"}
                            height={"100%"}
                          />
                        </div>
                        <div
                          style={{
                            margin: "1px 0px 8px  10px",
                            display: "inline-block",
                          }}>
                          <p className={classes.time}>{item.time}weeks</p>
                          <p className={classes.title}>{item.title}</p>
                          <div>
                            <span className={classes.rate}>
                              <i
                                className="fa-solid fa-star"
                                style={{ color: "#FFD43B" }}></i>
                              {item.rate}
                            </span>
                            <span className={classes.span}></span>
                            <span className={classes.learn}>
                              {item.student} Learners
                            </span>
                          </div>
                        </div>
                        <div className={classes.linkMore}>
                          <p className={classes.knowMore}>
                            know more{" "}
                            <i className="fa-solid fa-angle-right"></i>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </Grid.Col>
                ))}
              </Grid>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="credit-card">
            <Accordion.Control
              styles={{ label: { fontWeight: "600" } }}
              className={classes.category}>
              Data Science
            </Accordion.Control>
            <Accordion.Panel>
              <Grid>
                {courses.map(item => (
                  <Grid.Col key={item.id} span={{ base: 12, md: 6, lg: 4 }}>
                    <Link
                      to={URLS.viewCourse(item)}
                      className={classes.styleLink}>
                      <div
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                          borderRadius: "10px",
                        }}>
                        <div>
                          <img
                            className={classes.image}
                            src={item.img}
                            width={"100%"}
                            height={"100%"}
                          />
                        </div>
                        <div
                          style={{
                            margin: "1px 0px 8px  10px",
                            display: "inline-block",
                          }}>
                          <p className={classes.time}>{item.time}weeks</p>
                          <p className={classes.title}>{item.title}</p>
                          <div>
                            <span className={classes.rate}>
                              <i
                                className="fa-solid fa-star"
                                style={{ color: "#FFD43B" }}></i>
                              {item.rate}
                            </span>
                            <span className={classes.span}></span>
                            <span className={classes.learn}>
                              {item.student} Learners
                            </span>
                          </div>
                        </div>
                        <div className={classes.linkMore}>
                          <p className={classes.knowMore}>
                            know more{" "}
                            <i className="fa-solid fa-angle-right"></i>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </Grid.Col>
                ))}
              </Grid>
            </Accordion.Panel>{" "}
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="payment">
            <Accordion.Control
              styles={{ label: { fontWeight: "600" } }}
              className={classes.category}>
              Design
            </Accordion.Control>
            <Accordion.Panel>
              <Grid>
                {courses.map(item => (
                  <Grid.Col key={item.id} span={{ base: 12, md: 6, lg: 4 }}>
                    <Link
                      to={URLS.viewCourse(item)}
                      className={classes.styleLink}>
                      <div
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                          borderRadius: "10px",
                        }}>
                        <div>
                          <img
                            className={classes.image}
                            src={item.img}
                            width={"100%"}
                            height={"100%"}
                          />
                        </div>
                        <div
                          style={{
                            margin: "1px 0px 8px  10px",
                            display: "inline-block",
                          }}>
                          <p className={classes.time}>{item.time}weeks</p>
                          <p className={classes.title}>{item.title}</p>
                          <div>
                            <span className={classes.rate}>
                              <i
                                className="fa-solid fa-star"
                                style={{ color: "#FFD43B" }}></i>
                              {item.rate}
                            </span>
                            <span className={classes.span}></span>
                            <span className={classes.learn}>
                              {item.student} Learners
                            </span>
                          </div>
                        </div>
                        <div className={classes.linkMore}>
                          <p className={classes.knowMore}>
                            know more{" "}
                            <i className="fa-solid fa-angle-right"></i>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </Grid.Col>
                ))}
              </Grid>
            </Accordion.Panel>{" "}
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}
