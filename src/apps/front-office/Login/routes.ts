import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import Login from "./component/Login";

publicRoutes([
  {
    path: URLS.auth.login,
    component: Login,
  },
]);
