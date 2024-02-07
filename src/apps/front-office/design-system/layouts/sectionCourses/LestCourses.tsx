import { Carousel } from "@mantine/carousel";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { useEffect, useState } from "react";
import classes from "./LestCourses.module.css";
// const dataCourses = [
//   {
//     id: 1,
//     img: "https://internshala.com/static/images/home/trainings/images/web_development.png",
//     time: 8,
//     rate: 4.1,
//     title: "Web Development",
//     student: "91,500",
//     link: "/internships",
//   },
//   {
//     id: 2,
//     img: "https://internshala.com/static/images/home/trainings/images/python.png",
//     time: 6,
//     rate: 4.1,
//     title: "Programming with Python",
//     student: "73,000",
//     link: "/internships",
//   },
//   {
//     id: 3,
//     img: "https://internshala.com/static/images/home/trainings/images/digital_marketing.png",
//     time: 8,
//     rate: 4.1,
//     title: "Digital Marketing",
//     student: "53,913",
//     link: "/internships",
//   },
//   {
//     id: 4,
//     img: "https://internshala.com/static/images/home/trainings/images/machine_learning.png",
//     time: 6,
//     rate: 4.5,
//     title: "Machine learning",
//     student: "28,865",
//     link: "/internships",
//   },
//   {
//     id: 5,
//     img: "https://internshala.com/static/images/home/trainings/images/excel.png",
//     rate: 4.4,
//     time: 4,
//     title: "Advanced Excel",
//     student: "30,440",
//     link: "/internships",
//   },
//   {
//     id: 6,
//     img: "https://internshala.com/static/images/home/trainings/images/programming_with_c_and_c++.png",
//     time: 8,
//     title: "Programming with C and C++",
//     student: "28,900",
//     link: "/internships",
//   },
//   {
//     id: 7,
//     title: "Learn in-demand skills and get certified ",
//     link: "/courses",
//   },
// ];
export type CoursesProps = {
  id: number;
  img: string;
  time: number;
  rate: number;
  title: string;
  student: number;
};

export default function LestCourses() {
  const [courses, setCourses] = useState<CoursesProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <div className={classes.up}>
      <div>
        <p className={classes.certification}>Certification courses</p>
        <p className={classes.fastest}>Fastest way to build your CV</p>
      </div>
      <Carousel
        controlsOffset="xs"
        controlSize={40}
        height={400}
        style={{ margin: "0px 0px", padding: "0px 40px" }}
        slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
        slideGap={{ base: 0, sm: "md" }}
        loop
        align="start">
        {courses.map(course => (
          <Carousel.Slide key={course.id} style={{ padding: "0px 20px" }}>
            <Link
              to={URLS.viewCourse(course)}
              style={{
                textDecoration: "none",
              }}>
              <div className={classes.slide}>
                <img
                  src={course.img}
                  width={"100%"}
                  height={"150px"}
                  className={classes.img}
                />
                <div className={classes.description}>
                  <p
                    style={{
                      margin: " 0px 0px 0px",
                      color: "rgb(104 104 104)",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}>
                    {course.time} Weeks
                  </p>
                  <p
                    style={{
                      margin: " 5px 0px",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}>
                    {course.title}
                  </p>
                  <div style={{ margin: "6px 0px 0px" }}>
                    <span>
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "gold" }}></i>{" "}
                      {course.rate}
                    </span>
                    <span
                      style={{
                        borderLeft: "solid 2px rgb(51 170 238 / 30%)",
                        margin: "0px 8px",
                        padding: "0px 0px 0px 10px",
                      }}>
                      {course.student}
                    </span>
                  </div>
                  <div
                    style={{
                      color: "#008BDC",
                      paddingTop: "5px",
                    }}>
                    <span>
                      Know more <i className="fa-solid fa-chevron-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </Carousel.Slide>
        ))}
        <Carousel.Slide className={classes.linkMore}>
          <a
            href="/courses"
            style={{
              width: "100%",
              textDecoration: "none",
              textAlign: "start",
            }}>
            <div>
              <p className={classes.titleLinkMore}>
                Learn in-demand skills and get certified
              </p>
              <p className={classes.viewAll}>View all</p>
            </div>
          </a>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}
