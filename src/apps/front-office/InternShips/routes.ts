import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import InternShips from "./InternshipsPage/InternShips";
import TheIntern from "./TheInternPage/TheIntern";

publicRoutes([
  {
    path: URLS.internships,
    component: InternShips,
  },
  {
    path: URLS.viewInternRoute,
    component: TheIntern,
  },
]);
