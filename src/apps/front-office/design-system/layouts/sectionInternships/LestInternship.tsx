import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { Button, Text } from "@mantine/core";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { useEffect, useState } from "react";
import { vars } from "../theme";
import classes from "./LestInternship.module.css";

export type LestInternships = {
  id: number | string;
  title: string;
  hint: string;
  category: string;
  img: string;
  country: string;
  salary: number;
  time: string;
  publication: string;
};
export default function LestInternship() {
  const [allInternships, setAllInternships] = useState<LestInternships[]>([]);
  const [intrenships, setIntrenships] = useState<LestInternships[]>([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/internships")
      .then(res => res.json())
      .then(data => {
        setAllInternships(data);
        setIntrenships(data);
      });
  }, []); // category

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then(res => res.json())
      .then(data => setCategory(data));
  }, []);

  const [active, setActive] = useState(category[0]);

  const handleSelectCategory = category => {
    const newInternships = allInternships.filter(
      ele => ele.category === category,
    );
    setIntrenships(newInternships);
    setActive(category);
  };

  return (
    <div className={classes.up}>
      {/* categories */}
      <p className={classes.titleInternship}>
        Latest internships on InternShips
      </p>
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
        {intrenships.map(intern => (
          <Carousel.Slide key={intern.id} className={classes.card}>
            <Link to={URLS.viewIntern(intern)} className={classes.linkCard}>
              <div className={classes.actively}>
                <i
                  className="fa-solid fa-arrow-trend-up"
                  style={{ color: "#3ae" }}></i>
                <p className={classes.active_hiring}>Actively hiring</p>
              </div>
              <div className={classes.cardCourses}>
                <span className={classes.headingCard}>
                  <p style={{ margin: "0px", color: "black" }}>
                    {intern.title}
                  </p>
                  <Text m={0} c="rgb(0 0 0 / 57%)">
                    {intern.hint}
                  </Text>
                </span>
                <div>
                  <img src={intern.img} width="50px" height="50px" />
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
                    {intern.country}
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-dollar-sign"
                      style={{ padding: "5px 5px 5px 0px" }}></i>
                    ${intern.salary} /Month
                  </li>
                  <li>
                    <i
                      className="fa-regular fa-calendar"
                      style={{ padding: "5px 5px 5px 0px" }}></i>
                    {intern.time}
                  </li>
                </ul>
                <div className={classes.linkVeiw}>
                  <a
                    href={URLS.viewIntern(intern)}
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
        <Carousel.Slide className={classes.styleSlide}>
          <Link className={classes.linkCard} to="/internships">
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
                  Explore more than 15,000+ internships
                </p>
              </div>

              <div className={classes.moreLink}>
                <a
                  href="/internships"
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
