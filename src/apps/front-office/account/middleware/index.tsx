import cache from "@mongez/cache";
import { navigateTo } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";

/**
 * Use this middleware if the page requires the user to be logged in
 */
export function Guardian() {
  if (!cache.has("loggedInUser")) {
    return navigateTo(URLS.auth.login);
  }
  return null;
}

/**
 * Use this middleware if you want to redirect the user to the home page if he/she is logged in
 */
export function ReverseGuardian() {
  if (cache.has("loggedInUser")) {
    return navigateTo(URLS.home);
  }

  return null;
}

/**
 * Use this middleware if the forget password and reset password are in two different routes
 * This should check if the user has the OTP code in the reset password atom
 * If not then he/she should be redirected to the forget password page
 */
// export function hasOTP() {
//   if (!resetPasswordAtom.get("code")) {
//     return navigateTo(URLS.auth.forgetPassword);
//   }
// }
