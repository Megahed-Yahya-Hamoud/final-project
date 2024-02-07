import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import Register from "./component/Register";

publicRoutes([
  {
    path: URLS.auth.register,
    component: Register,
  },
]);
