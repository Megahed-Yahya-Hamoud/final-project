/* eslint-disable react/jsx-key */
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { useEffect, useState } from "react";
import classes from "./CardsCarousel.module.css";
export type TrendingProps = {
  id: string | number;
  img: string;
  link: string;
};
// const trendingData = [
//   {
//     img: "https://internshala.com/static/images/pgc_course_specific_banners/pgc_homepage_banner_new.png",
//     link: "/courses",
//   },
//   {
//     img: "https://internshala-uploads.internshala.com/banner-images/home_new/placement_dec23_fh-student.png.webp",
//     link: "/courses",
//   },
//   {
//     img: "https://internshala-uploads.internshala.com/banner-images/home_new/is_jobs-student.png.webp",
//     link: "/jobs",
//   },
//   {
//     img: "https://internshala-uploads.internshala.com/banner-images/home_new/isp_39-student.png.webp",
//     link: "/internships",
//   },
//   {
//     img: "https://internshala-uploads.internshala.com/banner-images/home_new/int_opps-student.png.webp",
//     link: "/internships",
//   },
// ];
export function CardsCarousel() {
  const [trending, setTrending] = useState<TrendingProps[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/trending")
      .then(res => res.json())
      .then(data => setTrending(data));
  }, []);

  return (
    <div>
      <p className={classes.trending}>
        Trending on internShips{" "}
        <i className="fa-solid fa-fire" style={{ color: "#f62 " }}></i>
      </p>
      <Carousel
        height={300}
        style={{ margin: "10px" }}
        slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
        slideGap={{ base: 10, sm: "md", md: "sm" }}
        loop
        dragFree
        align="start"
        controlSize={40}>
        {trending.map(item => (
          <Carousel.Slide key={item.id}>
            <a href={item.link} key={item.id}>
              <img src={item.img} className={classes.itemTrending} />
            </a>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}
