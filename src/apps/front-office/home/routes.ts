import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import { NotFoundImage } from "./../design-system/layouts/page/notFound/NotFoundImage";
import HomePage from "./pages/HomePage";

publicRoutes([
  {
    path: URLS.home,
    component: HomePage,
  },
  {
    path: URLS.notFound,
    component: NotFoundImage,
  },
]);
