import { Carousel } from "@mantine/carousel";
import { Button } from "@mantine/core";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { useEffect, useState } from "react";
import { vars } from "../theme";
import classes from "./LestJobs.module.css";

export type LestJobs = {
  id: number;
  img: string;
  hint: string;
  title: string;
  category: string;
  country: string;
  salary: number;
  minSalary: number;
  maxSalary: number;
  publication: string;
  experience: string;
};

// const dataJobs = [
//   {
//     id: 1,
//     category: "Big brands",
//     jobs: [
//       {
//         id: 1,
//         title: "Egypt Web",
//         hint: " Flutter",
//         img: "https://internshala.com/uploads/logo%2F5e2fdbd773f701580194775.gif",
//         country: "Egypt",
//         salary: "5000 - 8000",
//       },
//       {
//         id: 2,
//         title: "Elmansoura for Programming ",
//         hint: "Back-end developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F648ff9b7cd5e71687157175.png.webp",
//         country: "Egypt",
//         salary: "6000-11000",
//       },
//       {
//         id: 3,
//         title: "Softic for Programming",
//         hint: "Web developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F63d11c00c0c5e1674648576.jpg.webp",
//         country: "Egypt",
//         salary: "7000 - 11000",
//       },
//       {
//         id: 4,
//         title: "MH Sites",
//         hint: "Front-end developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F5e2fde8161a8c1580195457.jpg.webp",
//         country: "Egypt",
//         salary: "5000 - 10000",
//       },
//       {
//         id: 5,
//         title: "Softic for Programing",
//         hint: "Full-stack developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F5e2fde8161a8c1580195457.jpg.webp",
//         country: "Egypt",
//         salary: "7000-12000",
//       },
//       {
//         id: 6,
//         title: "Unlock your true potential",
//         more: "Explore more than 15,000+ internships",
//         img: "https://internshala.com/static/images/homepage/view_all_internship.png",
//         link: "/jobs",
//       },
//     ],
//   },
//   {
//     id: 2,
//     category: "Work in home",
//     jobs: [
//       {
//         id: 1,
//         title: "Egypt Web",
//         hint: "Web developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F1j2p2x8u2ml-67133.png.webp",
//         country: "Egypt",
//         salary: "8000 - 12000",
//       },
//       {
//         id: 2,
//         title: "Softic",
//         hint: " Flutter",
//         img: "https://internshala-uploads.internshala.com/logo%2F5e2fdf1d649211580195613.jpg.webp",
//         country: "Egypt",
//         salary: "6000 - 10000",
//       },
//       {
//         id: 3,
//         title: "MH Sites",
//         hint: "Front-end developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F632416ad277c41663309485.png.webp",
//         country: "Egypt",
//         salary: "6000 - 10000",
//       },
//       {
//         id: 4,
//         title: "MH Egypt",
//         hint: "Full-stack developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F632416ad277c41663309485.png.webp",
//         country: "Egypt",
//         salary: "8000 - 13000",
//       },
//       {
//         id: 5,
//         title: "Elmansoura for Programming ",
//         hint: "Back-end developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F60c776e4d70c11623684836.jpg.webp",
//         country: "Egypt",
//         salary: "7000 - 11000",
//       },
//       {
//         id: 6,
//         title: "Unlock your true potential",
//         more: "Explore more than 15,000+ internships",
//         img: "https://internshala.com/static/images/homepage/view_all_internship.png",
//         link: "/jobs",
//       },
//     ],
//   },
//   {
//     id: 3,
//     category: "Part-time",
//     jobs: [
//       {
//         id: 1,
//         title: "MH Egypt",
//         hint: "Full-stack developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F636b3135e04541667969333.png.webp",
//         country: "Egypt",
//         salary: "9000 - 15000",
//       },
//       {
//         id: 2,
//         title: "Softic",
//         hint: " Flutter",
//         img: "https://internshala-uploads.internshala.com/logo%2F6476dca8e42211685511336.png.webp",
//         country: "Egypt",
//         salary: "6000 -10000",
//       },
//       {
//         id: 3,
//         title: "Meiny Max",
//         hint: "Front-end developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F636b3135e04541667969333.png.webp",
//         country: "Egypt",
//         salary: "6000 - 10000",
//       },
//       {
//         id: 4,
//         title: "Egypt Web",
//         hint: "Web developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F644777764f8411682405238.jpg.webp",
//         country: "Egypt",
//         salary: "6000 - 12000",
//       },
//       {
//         id: 5,
//         title: "Quite ",
//         hint: "Back-end developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F5f322da0d0a261597124000.jpg.webp",
//         country: "Egypt",
//         salary: "7000 - 11000",
//       },
//       {
//         id: 6,
//         title: "Unlock your true potential",
//         more: "Explore more than 15,000+ internships",
//         img: "https://internshala.com/static/images/homepage/view_all_internship.png",
//         link: "/jobs",
//       },
//     ],
//   },
//   {
//     id: 4,
//     category: "Media",
//     jobs: [
//       {
//         id: 1,
//         title: "Meiny Max",
//         hint: "Front-end developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F1j2p2x8u2ml-67133.png.webp",
//         country: "Egypt",
//         salary: "6000 -12000",
//       },
//       {
//         id: 2,
//         title: "Yes Web",
//         hint: " Flutter",
//         img: "https://internshala-uploads.internshala.com/logo%2F5e2fde80682f71580195456.png.webp",
//         country: "Egypt",
//         salary: "6000 - 12000",
//       },
//       {
//         id: 3,
//         title: "Egypt Web",
//         hint: "Web developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F5e2fdd35eeee61580195125.png.webp",
//         country: "Egypt",
//         salary: "6000 -11000",
//       },
//       {
//         id: 4,
//         title: "Quite ",
//         hint: "Back-end developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F6464b36a84b951684321130.png.webp",
//         country: "Egypt",
//         salary: "7000 - 14000",
//       },
//       {
//         id: 5,
//         title: "MH Egypt",
//         hint: "Full-stack developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F1j2p2x8u2ml-67133.png.webp",
//         country: "Egypt",
//         salary: "9000 - 18000",
//       },
//       {
//         id: 6,
//         title: "Unlock your true potential",
//         more: "Explore more than 15,000+ internships",
//         img: "https://internshala.com/static/images/homepage/view_all_internship.png",
//         link: "/jobs",
//       },
//     ],
//   },
//   {
//     id: 5,
//     category: "design",
//     jobs: [
//       {
//         id: 1,
//         title: "Enofeira",
//         hint: "Front-end developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F649d3f0dd4dc81688026893.png.webp",
//         country: "Egypt",
//         salary: "6000 - 12000",
//       },
//       {
//         id: 2,
//         title: "Yes Web",
//         hint: " Flutter",
//         img: "https://internshala-uploads.internshala.com/logo%2Fnlt7ggdcgb_-6797.png.webp",
//         country: "Egypt",
//         salary: "6000 - 12000",
//       },
//       {
//         id: 3,
//         title: "Meiny Max",
//         hint: "Web developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F62d505536cb621658127699.png.webp",
//         country: "Egypt",
//         salary: "5000 - 10000",
//       },
//       {
//         id: 4,
//         title: "Quite ",
//         hint: "Back-end developer",
//         img: "https://internshala.com/uploads/logo%2F60dab1b6cc7bd1624945078.jpeg",
//         country: "Egypt",
//         salary: "6000 -12000",
//       },
//       {
//         id: 5,
//         title: "MH Egypt",
//         hint: "Full-stack developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F6229cbbb4aa861646906299.png.webp",
//         country: "Egypt",
//         salary: "8000 - 16000",
//       },
//       {
//         id: 6,
//         title: "Unlock your true potential",
//         more: "Explore more than 15,000+ internships",
//         img: "https://internshala.com/static/images/homepage/view_all_internship.png",
//         link: "/jobs",
//       },
//     ],
//   },
// ];
export default function LestJobs() {
  const [allJobs, setAllJobs] = useState<LestJobs[]>([]);

  const [jobs, setJobs] = useState<LestJobs[]>([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then(res => res.json())
      .then(data => {
        setAllJobs(data);
        setJobs(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then(res => res.json())
      .then(data => setCategory(data));
  }, []);

  const handleSelectCategory = category => {
    const newJobs = allJobs.filter(ele => ele.category === category);
    setJobs(newJobs);
    setActive(category);
  };

  const [active, setActive] = useState(category[0]);

  return (
    <div className={classes.up}>
      {/* categories */}
      <p className={classes.titleInternship}>Latest internships on Jobs</p>
      <div className={classes.categories}>
        <p style={{ margin: "9px 5px", fontSize: "18px", fontWeight: 400 }}>
          POPULAR CATEGORIES:
        </p>
        {category.map(item => {
          return (
            <Button
              styles={{
                label: {
                  overflow: "inherit",
                },
              }}
              color="rgb(93,93,93)"
              variant={item === active ? "gradient" : "outline"}
              key={item}
              onClick={() => handleSelectCategory(item)}
              className={classes.category} //TODO: Give active button border...
              style={{
                borderColor: `${item === active ? vars.colors.blue[9] : ""}`,
              }}>
              {item}
            </Button>
          );
        })}
      </div>
      <Carousel
        containScroll={"keepSnaps"}
        height={300}
        style={{ margin: "10px" }}
        styles={{ container: { width: "100%" } }}
        slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
        slideGap={{ base: 10, sm: "md", md: "sm" }}
        // loop
        align="start"
        controlSize={40}
        controlsOffset="xs">
        {jobs.map(job => (
          <Carousel.Slide key={job.id} className={classes.card}>
            <Link to={URLS.viewJob(job)} className={classes.linkCard}>
              <div className={classes.actively}>
                <i
                  className="fa-solid fa-arrow-trend-up"
                  style={{ color: "#3ae" }}></i>
                <p className={classes.active_hiring}>Actively hiring</p>
              </div>
              <div className={classes.cardCourses}>
                <span className={classes.headingCard}>
                  <p style={{ margin: "0px", color: "black" }}>{job.title}</p>
                  <p
                    style={{
                      margin: "0px",
                      color: "rgb(0 0 0 / 57%)",
                    }}>
                    {job.hint}
                  </p>
                </span>
                <div>
                  <img src={job.img} width="50px" height="50px" />
                </div>
              </div>
              <div>
                <ul
                  style={{
                    margin: "16px 0px 0px",
                    listStyle: "none",
                    textAlign: "start",
                    padding: "0px",
                    color: "rgb(0 0 0 / 74%)",
                    fontSize: "14px",
                  }}>
                  <li>
                    <i
                      className="fa-solid fa-location-dot"
                      style={{ padding: "5px 5px 10px 0px" }}></i>
                    {job.country}
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-dollar-sign"
                      style={{ padding: "5px 5px 5px 0px" }}></i>
                    ${job.salary} /Monthly
                  </li>
                </ul>
                <div className={classes.linkVeiw}>
                  <a
                    href={URLS.viewJob(job)}
                    style={{
                      margin: "0px 0px 8px ",
                      textDecoration: "none",
                      color: " #008bdc",
                    }}>
                    View details
                  </a>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </Link>
          </Carousel.Slide>
        ))}
        <Carousel.Slide className={classes.card}>
          <Link to="/jobs" className={classes.linkCard}>
            <div className={classes.moreInternships}>
              <div>
                <h1
                  style={{
                    fontSize: "25px",
                    textAlign: "start",
                    margin: "0px",
                    color: "black",
                  }}>
                  Unlock your true potential
                </h1>
                <p
                  style={{
                    fontSize: "17px",
                    textAlign: "start",
                    marginTop: "0px",
                    color: "rgb(0 0 0 / 83%)",
                  }}>
                  Explore more than 15,000+ jobs
                </p>
              </div>

              <div className={classes.moreLink}>
                <a
                  href="/jobs"
                  style={{
                    textDecoration: "none",
                    color: " #008bdc",
                    marginBottom: "21px",
                  }}>
                  View internships
                </a>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </Link>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}
