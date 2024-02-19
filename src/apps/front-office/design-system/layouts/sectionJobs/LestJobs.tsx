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
