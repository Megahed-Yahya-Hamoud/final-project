import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import LestBigCourses from "../design-system/layouts/sectionBigCourses/LestBigCourses";
import BigCoursesPage from "./BigCoursesPage/BigCoursesPage";
import CoursePage from "./CoursePage/CoursePage";
import CoursesPage from "./CoursesPage";

publicRoutes([
  {
    path: URLS.courses,
    component: CoursesPage,
  },
  {
    path: URLS.viewCourseRoute,
    component: CoursePage,
  },
  {
    path: URLS.bigCourses,
    component: LestBigCourses,
  },
  {
    path: URLS.viewBigCourseRoute,
    component: BigCoursesPage,
  },
]);
