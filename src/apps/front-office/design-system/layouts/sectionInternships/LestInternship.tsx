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

// const dataIntern = [
//   {
//     id: 1,
//     title: "Big brands",
//     category: "Big brands",
//     intern: [
//       {
//         id: 1,
//         title: "MH Sites",
//         hint: "Front-end developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F5e2fde8161a8c1580195457.jpg.webp",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 2,
//         title: "Egypt Web",
//         hint: " Flutter",
//         img: "https://internshala.com/uploads/logo%2F5e2fdbd773f701580194775.gif",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 3,
//         title: "Softic for Programming",
//         hint: "Web developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F63d11c00c0c5e1674648576.jpg.webp",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 4,
//         title: "Elmansoura for Programming ",
//         hint: "Back-end developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F648ff9b7cd5e71687157175.png.webp",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 5,
//         title: "Softic for Programing",
//         hint: "Full-stack developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F5e2fde8161a8c1580195457.jpg.webp",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 6,
//         title: "Unlock your true potential",
//         more: "Explore more than 15,000+ internships",
//         img: "https://internshala.com/static/images/homepage/view_all_internship.png",
//         link: "/internships",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Work in home",
//     category: "Work in home",
//     intern: [
//       {
//         id: 1,
//         title: "MH Sites",
//         hint: "Front-end developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F632416ad277c41663309485.png.webp",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 2,
//         title: "Softic",
//         hint: " Flutter",
//         img: "https://internshala-uploads.internshala.com/logo%2F5e2fdf1d649211580195613.jpg.webp",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 3,
//         title: "Egypt Web",
//         hint: "Web developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F1j2p2x8u2ml-67133.png.webp",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 4,
//         title: "Elmansoura for Programming ",
//         hint: "Back-end developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F60c776e4d70c11623684836.jpg.webp",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 5,
//         title: "MH Egypt",
//         hint: "Full-stack developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F632416ad277c41663309485.png.webp",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 6,
//         title: "Unlock your true potential",
//         more: "Explore more than 15,000+ internships",
//         img: "https://internshala.com/static/images/homepage/view_all_internship.png",
//         link: "/internships",
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "Part-time",
//     category: "Part-time",
//     intern: [
//       {
//         id: 1,
//         title: "Meiny Max",
//         hint: "Front-end developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F636b3135e04541667969333.png.webp",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 2,
//         title: "Softic",
//         hint: " Flutter",
//         img: "https://internshala-uploads.internshala.com/logo%2F6476dca8e42211685511336.png.webp",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 3,
//         title: "Egypt Web",
//         hint: "Web developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F644777764f8411682405238.jpg.webp",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 4,
//         title: "Quite ",
//         hint: "Back-end developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F5f322da0d0a261597124000.jpg.webp",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 5,
//         title: "MH Egypt",
//         hint: "Full-stack developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F636b3135e04541667969333.png.webp",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 6,
//         title: "Unlock your true potential",
//         more: "Explore more than 15,000+ internships",
//         img: "https://internshala.com/static/images/homepage/view_all_internship.png",
//         link: "/internships",
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: "Media",
//     category: "Media",
//     intern: [
//       {
//         id: 1,
//         title: "Meiny Max",
//         hint: "Front-end developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F1j2p2x8u2ml-67133.png.webp",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 2,
//         title: "Yes Web",
//         hint: " Flutter",
//         img: "https://internshala-uploads.internshala.com/logo%2F5e2fde80682f71580195456.png.webp",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 3,
//         title: "Egypt Web",
//         hint: "Web developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F5e2fdd35eeee61580195125.png.webp",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 4,
//         title: "Quite ",
//         hint: "Back-end developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F6464b36a84b951684321130.png.webp",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 5,
//         title: "MH Egypt",
//         hint: "Full-stack developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F1j2p2x8u2ml-67133.png.webp",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 6,
//         title: "Unlock your true potential",
//         more: "Explore more than 15,000+ internships",
//         img: "https://internshala.com/static/images/homepage/view_all_internship.png",
//         link: "/internships",
//       },
//     ],
//   },
//   {
//     id: 5,
//     title: "design",
//     category: "design",
//     intern: [
//       {
//         id: 1,
//         title: "Enofeira",
//         hint: "Front-end developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F649d3f0dd4dc81688026893.png.webp",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 2,
//         title: "Yes Web",
//         hint: " Flutter",
//         img: "https://internshala-uploads.internshala.com/logo%2Fnlt7ggdcgb_-6797.png.webp",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 3,
//         title: "Meiny Max",
//         hint: "Web developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F62d505536cb621658127699.png.webp",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 4,
//         title: "Quite ",
//         hint: "Back-end developer",
//         img: "https://internshala.com/uploads/logo%2F60dab1b6cc7bd1624945078.jpeg",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 5,
//         title: "MH Egypt",
//         hint: "Full-stack developer",
//         img: "https://internshala-uploads.internshala.com/logo%2F6229cbbb4aa861646906299.png.webp",
//         country: "Egypt",
//         salary: "6000",
//         time: "3 Months",
//       },
//       {
//         id: 6,
//         title: "Unlock your true potential",
//         more: "Explore more than 15,000+ internships",
//         img: "https://internshala.com/static/images/homepage/view_all_internship.png",
//         link: "/internships",
//       },
//     ],
//   },
// ];
// const dataIntern = [
//   { categories: ["Big brand", "Design", "Work in home", "Media", "Part-time"] },
//   {
//     id: 1,
//     title: "MH Sites",
//     hint: "Front-end developer",
//     category: "Big brands",
//     img: "https://internshala-uploads.internshala.com/logo%2F5e2fde8161a8c1580195457.jpg.webp",
//     country: "India",
//     salary: 8000,
//     time: "3 Months",
//     publication: "3 weeks ago",
//   },
//   {
//     id: 2,
//     title: "Egypt Web",
//     hint: " Flutter",
//     category: "Big brands",
//     img: "https://internshala.com/uploads/logo%2F5e2fdbd773f701580194775.gif",
//     country: "Egypt",
//     salary: 7000,
//     time: "5 Months",
//     publication: "2 weeks ago",
//   },
//   {
//     id: 3,
//     title: "Softic for Programming",
//     hint: "Web developer",
//     category: "Big brands",
//     img: "https://internshala-uploads.internshala.com/logo%2F63d11c00c0c5e1674648576.jpg.webp",
//     country: "USA",
//     salary: 4000,
//     time: "6 Months",
//     publication: "4 weeks ago",
//   },
//   {
//     id: 4,
//     title: "Elmansoura for Programming ",
//     hint: "Back-end developer",
//     category: "Big brands",
//     img: "https://internshala-uploads.internshala.com/logo%2F648ff9b7cd5e71687157175.png.webp",
//     country: "Germany",
//     salary: 5000,
//     time: "3 Months",
//     publication: "1 weeks ago",
//   },
//   {
//     id: 5,
//     title: "Softic for Programing",
//     hint: "Full-stack developer",
//     category: "Big brands",
//     img: "https://internshala-uploads.internshala.com/logo%2F5e2fde8161a8c1580195457.jpg.webp",
//     country: "Egypt",
//     salary: 8000,
//     time: "5 Months",
//     publication: "5 weeks ago",
//   },
//   {
//     id: 6,
//     title: "MH Sites",
//     hint: "Front-end developer",
//     category: "Work in home",
//     img: "https://internshala-uploads.internshala.com/logo%2F632416ad277c41663309485.png.webp",
//     country: "Egypt",
//     salary: 5000,
//     time: "3 Months",
//     publication: "3 weeks ago",
//   },
//   {
//     id: 7,
//     title: "Softic",
//     hint: " Flutter",
//     category: "Work in home",
//     img: "https://internshala-uploads.internshala.com/logo%2F5e2fdf1d649211580195613.jpg.webp",
//     country: "India",
//     salary: 4000,
//     time: "5 Months",
//     publication: "6 weeks ago",
//   },
//   {
//     id: 8,
//     title: "Egypt Web",
//     hint: "Web developer",
//     category: "Work in home",
//     img: "https://internshala-uploads.internshala.com/logo%2F1j2p2x8u2ml-67133.png.webp",
//     country: "USA",
//     salary: 9000,
//     time: "6 Months",
//     publication: "2 weeks ago",
//   },
//   {
//     id: 9,
//     title: "Elmansoura for Programming ",
//     hint: "Back-end developer",
//     category: "Work in home",
//     img: "https://internshala-uploads.internshala.com/logo%2F60c776e4d70c11623684836.jpg.webp",
//     country: "Germany",
//     salary: 3000,
//     time: "4 Months",
//     publication: "6 weeks ago",
//   },
//   {
//     id: 10,
//     title: "MH Egypt",
//     hint: "Full-stack developer",
//     category: "Work in home",
//     img: "https://internshala-uploads.internshala.com/logo%2F632416ad277c41663309485.png.webp",
//     country: "Egypt",
//     salary: 5000,
//     time: "2 Months",
//     publication: "1 weeks ago",
//   },
//   {
//     id: 11,
//     title: "Softic",
//     hint: " Flutter",
//     category: "Part-time",
//     img: "https://internshala-uploads.internshala.com/logo%2F6476dca8e42211685511336.png.webp",
//     country: "Germany",
//     salary: 6000,
//     time: "3 Months",
//     publication: "3 weeks ago",
//   },
//   {
//     id: 12,
//     title: "Meiny Max",
//     hint: "Front-end developer",
//     category: "Part-time",
//     img: "https://internshala-uploads.internshala.com/logo%2F636b3135e04541667969333.png.webp",
//     country: "USA",
//     salary: 4000,
//     time: "5 Months",
//     publication: "4 weeks ago",
//   },
//   {
//     id: 13,
//     title: "Egypt Web",
//     hint: "Web developer",
//     category: "Part-time",
//     img: "https://internshala-uploads.internshala.com/logo%2F644777764f8411682405238.jpg.webp",
//     country: "Egypt",
//     salary: 3000,
//     time: "4 Months",
//     publication: "6 weeks ago",
//   },
//   {
//     id: 14,
//     title: "Quite ",
//     hint: "Back-end developer",
//     category: "Part-time",
//     img: "https://internshala-uploads.internshala.com/logo%2F5f322da0d0a261597124000.jpg.webp",
//     country: "India",
//     salary: 7000,
//     time: "3 Months",
//     publication: "4 weeks ago",
//   },
//   {
//     id: 15,
//     title: "MH Egypt",
//     hint: "Full-stack developer",
//     category: "Part-time",
//     img: "https://internshala-uploads.internshala.com/logo%2F636b3135e04541667969333.png.webp",
//     country: "Egypt",
//     salary: 3000,
//     time: "5 Months",
//     publication: "1 weeks ago",
//   },
//   {
//     id: 16,
//     title: "Meiny Max",
//     hint: "Front-end developer",
//     category: "Media",
//     img: "https://internshala-uploads.internshala.com/logo%2F1j2p2x8u2ml-67133.png.webp",
//     country: "Germany",
//     salary: 6000,
//     time: "3 Months",
//     publication: "3 weeks ago",
//   },
//   {
//     id: 17,
//     title: "Yes Web",
//     hint: " Flutter",
//     category: "Media",
//     img: "https://internshala-uploads.internshala.com/logo%2F5e2fde80682f71580195456.png.webp",
//     country: "India",
//     salary: 5000,
//     time: "4 Months",
//     publication: "6 weeks ago",
//   },
//   {
//     id: 18,
//     title: "Egypt Web",
//     hint: "Web developer",
//     category: "Media",
//     img: "https://internshala-uploads.internshala.com/logo%2F5e2fdd35eeee61580195125.png.webp",
//     country: "Egypt",
//     salary: 8000,
//     time: "6 Months",
//     publication: "2 weeks ago",
//   },
//   {
//     id: 19,
//     title: "Quite ",
//     hint: "Back-end developer",
//     category: "Media",
//     img: "https://internshala-uploads.internshala.com/logo%2F6464b36a84b951684321130.png.webp",
//     country: "USA",
//     salary: 5000,
//     time: "4 Months",
//     publication: "3 weeks ago",
//   },
//   {
//     id: 20,
//     title: "MH Egypt",
//     hint: "Full-stack developer",
//     category: "Media",
//     img: "https://internshala-uploads.internshala.com/logo%2F1j2p2x8u2ml-67133.png.webp",
//     country: "Egypt",
//     salary: 7000,
//     time: "4 Months",
//     publication: "2 weeks ago",
//   },
//   {
//     id: 21,
//     title: "Enofeira",
//     hint: "Front-end developer",
//     category: "Design",
//     img: "https://internshala-uploads.internshala.com/logo%2F649d3f0dd4dc81688026893.png.webp",
//     country: "Egypt",
//     salary: 3000,
//     time: "6 Months",
//     publication: "7 weeks ago",
//   },
//   {
//     id: 22,
//     title: "Yes Web",
//     hint: " Flutter",
//     category: "Design",
//     img: "https://internshala-uploads.internshala.com/logo%2Fnlt7ggdcgb_-6797.png.webp",
//     country: "Egypt",
//     salary: 5000,
//     time: "4 Months",
//     publication: "2 weeks ago",
//   },
//   {
//     id: 23,
//     title: "Meiny Max",
//     hint: "Web developer",
//     category: "Design",
//     img: "https://internshala-uploads.internshala.com/logo%2F62d505536cb621658127699.png.webp",
//     country: "Egypt",
//     salary: 6000,
//     time: "3 Months",
//     publication: "3 weeks ago",
//   },
//   {
//     id: 24,
//     title: "Quite ",
//     hint: "Back-end developer",
//     category: "Design",
//     img: "https://internshala.com/uploads/logo%2F60dab1b6cc7bd1624945078.jpeg",
//     country: "Egypt",
//     salary: 4000,
//     time: "5 Months",
//     publication: "6 weeks ago",
//   },
//   {
//     id: 25,
//     title: "MH Egypt",
//     hint: "Full-stack developer",
//     category: "Design",
//     img: "https://internshala-uploads.internshala.com/logo%2F6229cbbb4aa861646906299.png.webp",
//     country: "Egypt",
//     salary: 8000,
//     time: "6 Months",
//     publication: "2 weeks ago",
//   },
//   {
//     id: 26,
//     title: "Unlock your true potential",
//     more: "Explore more than 15,000+ internships",
//     img: "https://internshala.com/static/images/homepage/view_all_internship.png",
//     link: "/internships",
//   },
// ];
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
  });

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
