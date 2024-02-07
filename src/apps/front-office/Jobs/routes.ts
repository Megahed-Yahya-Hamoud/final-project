import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import Jobs from "./JobsPage/Jobs";
import TheJobPage from "./TheJobPage";

publicRoutes([
  {
    path: URLS.jobs,
    component: Jobs,
  },
  {
    path: URLS.viewJobRoute,
    component: TheJobPage,
  },
]);
