import { Box, Button, Container, Grid, GridCol, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useEffect, useState } from "react";
import FromInCourse from "../FromInCourse/FromInCourse.jsx";
import CarosleComment from "../component/CaroselComment/CaroselComment.jsx";
import classes from "./CoursePage.module.css";
import image from "./signup_page.png";
export type CourseProps = {
  id: number;
  img: string;
  time: number;
  rate: number;
  title: string;
  student: string;
  img2: string;
};

export default function CoursePage({ params }: any) {
  const id = params?.id;
  const [course, setCourse] = useState<CourseProps>();

  useEffect(() => {
    fetch(`http://localhost:3000/courses/${id}`)
      .then(res => res.json())
      .then(data => setCourse(data));
  }, [id]);

  const Highlights = [
    {
      id: 1,
      title: "Learn online",
      hint: "At your own schedule",
      icon: <i className="fa-solid fa-circle-play"></i>,
    },
    {
      id: 2,

      title: "Mobile friendly",
      hint: "No laptop? No problem",
      icon: <i className="fa-solid fa-mobile"></i>,
    },
    {
      id: 3,

      title: "Placement assistance",
      hint: "To build your career",
      icon: <i className="fa-regular fa-handshake"></i>,
    },
    {
      id: 4,

      title: "Certificate of Training",
      hint: "From Internships Trainings",
      icon: <i className="fa-solid fa-medal"></i>,
    },
    {
      id: 5,

      title: "5 assignments & 1 project",
      hint: "For hands-on practice",
      icon: <i className="fa-solid fa-screwdriver-wrench"></i>,
    },
    {
      id: 6,

      title: "Learn in English",
      hint: "As per your choice",
      icon: <i className="fa-solid fa-volume-high"></i>,
    },
    {
      id: 7,
      title: "Doubt clearing",
      hint: "Through Q&A forum",
      icon: <i className="fa-regular fa-comments"></i>,
    },
    {
      id: 8,

      title: "Beginner friendly",
      hint: "No prior knowledge required",
      icon: <i className="fa-solid fa-arrow-up-right-dots"></i>,
    },
    {
      id: 9,
      title: `${course?.time} weeks duration`,
      hint: " hr/day (flexible schedule)",
      icon: <i className="fa-regular fa-calendar"></i>,
    },
  ];

  const Training = [
    {
      id: 1,
      title: "Learn concepts",
      hint: "Go through training videos to learn concepts",
      icon: <i className="fa-solid fa-circle-play"></i>,
    },
    {
      id: 2,
      title: "Test yourself",
      hint: "Test your knowledge through quizzes & module tests at regular intervals",
      icon: <i className="fa-solid fa-list-check"></i>,
    },
    {
      id: 3,
      title: "Hands-on practice",
      hint: "Work on assignments and project. Use our in-browser IDE for coding practice",
      icon: <i className="fa-solid fa-crosshairs"></i>,
    },
    {
      id: 4,
      title: "1:1 doubt solving",
      hint: "Get your doubts solved by experts through Q&A forum within 24 hours",
      icon: <i className="fa-regular fa-comments"></i>,
    },
    {
      id: 5,
      title: "Take final exam",
      hint: "Complete your training by taking the final exam",
      icon: <i className="fa-regular fa-file-lines"></i>,
    },
    {
      id: 6,
      title: "Get certified",
      hint: "Get certified in Python upon successful completion of training",
      icon: <i className="fa-solid fa-medal"></i>,
    },
  ];

  function enroll() {
    return notifications.show({
      message: "Enroll Success",
      color: "green",
    });
  }
  return (
    <>
      <div>
        <div className={classes.parent}>
          <Box ml={10}>
            <div>
              <Text
                fz={20}
                fw={600}
                my={15}
                bg={"rgb(255,217,7)"}
                style={{
                  width: "fit-content",
                  color: "#1e366b",
                  borderRadius: "4px",
                  padding: "4px 13px",
                }}>
                Certified online training
              </Text>
              <Text my={10} fz={40} fw={700}>
                {course?.title}
              </Text>
              <Text my={10} fz={19} fw={600}>
                Learn {course?.title} to master one of the most important and
                famous fields of the 21st century!
              </Text>
              <Text my={15} fz={18} fw={500}>
                <i
                  className="fa-solid fa-volume-high"
                  style={{
                    fontSize: "18px",
                    backgroundColor: "white",
                    color: "#484848",
                    padding: "8px 6px ",
                    border: "7px solid #839BCE",
                    borderRadius: "55px",
                    marginRight: "5px",
                  }}></i>{" "}
                English
              </Text>
              <div className={classes.containerDerails}>
                <Text className={classes.details}>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#FFD43B", marginRight: "5px" }}></i>
                  {course?.rate}
                </Text>
                <Text className={classes.details}>
                  {" "}
                  <i
                    className="fa-solid fa-user-group"
                    style={{ marginRight: "5px" }}></i>
                  {course?.student}
                </Text>
                <Text className={classes.details}>
                  <i
                    className="fa-solid fa-handshake"
                    style={{ marginRight: "5px" }}></i>
                  Placement Assistance
                </Text>
                <Text className={classes.details}>
                  <i
                    className="fa-regular fa-calendar"
                    style={{ marginRight: "5px" }}></i>{" "}
                  {course?.time} Weeks, 1 hr/day (flexible schedule)
                </Text>
              </div>
              <div className={classes.offer}>
                <img src={image} alt="" width={"40px"} height={"40px"} />
                <Text ml={5} fz={16} fw={500} style={{ color: "#484848" }}>
                  <span style={{ color: "#484848" }}>1+1 Offer:</span> Get
                  Internship & Job Preparation training FREE on purchase of{" "}
                  {course?.title}!
                </Text>
              </div>
            </div>
            {localStorage.length ? (
              <div style={{}}>
                <div className={classes.containerEnroll}>
                  <Text mb={10}>
                    <span
                      style={{
                        color: "rgb(255,124,0)",
                        fontSize: "25px",
                        fontWeight: 700,
                      }}>
                      {" "}
                      $120
                    </span>{" "}
                    <del style={{ color: "white", fontSize: "15px" }}>
                      {" "}
                      $150
                    </del>
                    <span style={{ color: "white", fontSize: "20px" }}>
                      {" "}
                      Valid till 15th Feb
                    </span>
                  </Text>
                  <Button
                    onClick={() => {
                      enroll();
                    }}
                    type="submit"
                    styles={{
                      label: {
                        overflow: "inherit",
                      },
                    }}
                    fz={20}
                    px={25}
                    py={20}>
                    Enroll Now{" "}
                  </Button>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </Box>
          {localStorage.length ? (
            <div> </div>
          ) : (
            <Box className={classes.BoxFrom}>
              <FromInCourse />
            </Box>
          )}
        </div>
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
          <div>
            <Text
              fz={30}
              fw={700}
              style={{ color: "#333333", textAlign: "center" }}>
              {" "}
              Course Highlights
            </Text>
            <Container mt={10} size={"lg"}>
              <Grid>
                {Highlights.map(ele => (
                  <Grid.Col
                    my={10}
                    key={ele.id}
                    span={{ base: 12, md: 6, lg: 4 }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Text className={classes.iconEle}>{ele.icon}</Text>
                      <div style={{ marginLeft: "15px" }}>
                        <Text className={classes.titleEle}>{ele.title} </Text>
                        <Text className={classes.hintEle}>{ele.hint}</Text>
                      </div>
                    </div>
                  </Grid.Col>
                ))}
              </Grid>
            </Container>
          </div>
        </div>
        <Container my={20} size={"lg"} className={classes.styleBack}>
          <Grid>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <Text fz={30} my={10} fw={700}>
                Why Learn {course?.title}?
              </Text>
              <div>
                <Text fz={19} fw={500}>
                  Versatility
                </Text>
                <Text style={{ color: "#53564E" }} fz={18} my={10}>
                  It is one of the requirements of the labor market, as its
                  spread leads to an increase in demand for it
                </Text>
              </div>
              <div>
                <Text fz={19} fw={500}>
                  Beginner friendly
                </Text>
                <Text style={{ color: "#53564E" }} fz={18} my={10}>
                  Its ease of learning and understanding makes it simple
                </Text>
              </div>
              <div>
                <Text fz={19} fw={500}>
                  Be in demand
                </Text>
                <Text style={{ color: "#53564E" }} fz={18} my={10}>
                  {course?.title} is the fastest growing language according to
                  Stack Overflow with an average fresher salary of 5 LPA+
                  according to Glassdoor.
                </Text>
              </div>
            </Grid.Col>
            <GridCol
              className={classes.boxImage}
              span={{ base: 12, md: 6, lg: 6 }}>
              <img src={course?.img2} alt="" className={classes.imgCourse} />
            </GridCol>
          </Grid>
        </Container>
        <div>
          <Container my={50} size={"lg"}>
            <Grid>
              <Grid.Col
                className={classes.boxImage}
                span={{ base: 12, md: 6, lg: 6 }}>
                <img
                  className={classes.imgCourse}
                  src="https://trainings.internshala.com/cached_uploads/python/signup_page_media/illustration-images/placement.png"
                  alt=""
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                <Box pl={20}>
                  <div>
                    <Text fz={30} my={10} fw={700}>
                      What placement assistance will you receive?{" "}
                    </Text>
                  </div>
                  <div>
                    <Text fz={19} fw={500}>
                      Free Placement Prep Training
                    </Text>
                    <Text style={{ color: "#53564E" }} fz={18} my={10}>
                      Learn how to build your resume, make great applications,
                      and ace your interviews.
                    </Text>
                  </div>
                  <div>
                    <Text fz={19} fw={500}>
                      Curated internships & jobs
                    </Text>
                    <Text style={{ color: "#53564E" }} fz={18} my={10}>
                      Get internships and fresher jobs as per your preference in
                      your inbox
                    </Text>
                  </div>
                  <div>
                    <Text fz={19} fw={500}>
                      Get highlighted on Internships
                    </Text>
                    <Text style={{ color: "#53564E" }} fz={18} my={10}>
                      Top performers will be highlighted in their internship &
                      job applications on Internships.
                    </Text>
                  </div>
                </Box>
              </Grid.Col>
            </Grid>
          </Container>
        </div>
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
          <div>
            <Text
              mb={20}
              fz={30}
              fw={700}
              style={{ color: "#333333", textAlign: "center" }}>
              {" "}
              How will your training work?
            </Text>
            <Container mt={10} size={"lg"}>
              <Grid>
                {Training.map(ele => (
                  <Grid.Col
                    my={20}
                    key={ele.id}
                    span={{ base: 12, md: 6, lg: 4 }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Text className={classes.iconEle}>{ele.icon}</Text>
                      <div style={{ marginLeft: "15px" }}>
                        <Text className={classes.titleEle}>{ele.title} </Text>
                        <Text className={classes.hintEle}>{ele.hint}</Text>
                      </div>
                    </div>
                  </Grid.Col>
                ))}
              </Grid>
            </Container>
          </div>
        </div>

        <div>
          <div className={classes.styleCarosel}>
            <Text
              mb={20}
              fz={30}
              fw={700}
              style={{ color: "#333333", textAlign: "center" }}>
              Reviews from students
            </Text>
            <Text
              mb={8}
              fz={18}
              style={{ color: "#53564E", textAlign: "center" }}>
              AVERAGE RATINGS
            </Text>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "10px",
              }}>
              <Text fw={500} fz={18} mr={8}>
                4.5{" "}
              </Text>
              <Text display={"flex"} style={{ color: "#FF8C00", gap: "4px" }}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
              </Text>
            </div>
            <div>
              <CarosleComment />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
