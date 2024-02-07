import SeactionRegister from "apps/front-office/design-system/layouts/Seaction-register/SeactionRegister";
import { CardsCarousel } from "apps/front-office/design-system/layouts/carousel/CardsCarousel";
import StatsContainer from "apps/front-office/design-system/layouts/counter/StatsContainer";
import PragrapheLogo from "apps/front-office/design-system/layouts/praghapheLogo/PragrapheLogo";
import LestInternship from "apps/front-office/design-system/layouts/sectionInternships/LestInternship";
import Companies from "./../../../design-system/layouts/seaction-Companies/Companies";
import LestBigCourses from "./../../../design-system/layouts/sectionBigCourses/LestBigCourses";
import LestCourses from "./../../../design-system/layouts/sectionCourses/LestCourses";
import LestJobs from "./../../../design-system/layouts/sectionJobs/LestJobs";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <>
      <PragrapheLogo />
      <CardsCarousel />
      <LestInternship />
      <LestJobs />
      <LestCourses />
      <LestBigCourses />
      <Companies />
      <StatsContainer />
      <SeactionRegister />
    </>
  );
}
