/* eslint-disable no-undef */
import { Title } from "@mantine/core";
import cache from "@mongez/cache";
import { Form } from "@mongez/react-form";
import { navigateTo } from "@mongez/react-router";
import { getUserData } from "apps/front-office/Register/services/register-services";
import { EmailInput } from "apps/front-office/design-system/Form/EmailInput";
import { PasswordInput } from "apps/front-office/design-system/Form/PasswordInput";
import { SubmitButton } from "apps/front-office/design-system/Form/SubmitButton";
import {
  toastError,
  toastSuccess,
} from "apps/front-office/design-system/components/Toast/Toast";
import parseError from "apps/front-office/utils/parse-error";
import URLS from "apps/front-office/utils/urls";
import classes from "./Login.module.css";

export default function Login() {
  function userData({ values, form }) {
    getUserData(values)
      .then(response => {
        const userData = response.data;
        if (
          cache.get("loggedInUser").userName === userData.userName ||
          cache.get("loggedInUser").email === userData.email
        ) {
          toastSuccess("Login Successful");
          navigateTo(URLS.home);
        }
      })
      .catch(err => {
        toastError(parseError(err));
      })
      .finally(() => {
        form.submitted = false;
      });
  }
  return (
    <div className={classes.style}>
      <div>
        <Title ta="center" className={classes.title}>
          Welcome back!
        </Title>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "50px auto 0px",
          paddingBottom: "50px",
        }}>
        <Form className={classes.form} onSubmit={userData}>
          <div>
            <label className={classes.label} htmlFor="email">
              Email:
            </label>
            <br />

            <EmailInput
              id="email"
              name="email"
              placeholder="Email"
              required
              className={classes.field}
            />
          </div>
          <br />

          <div>
            <label className={classes.label} htmlFor="password">
              Password:
            </label>
            <br />
            <PasswordInput
              id="password"
              name="password"
              placeholder="Password"
              required
              className={classes.field}
            />
          </div>

          <div>
            <SubmitButton style={{ width: "100%", margin: "20px auto 5px" }}>
              Login
            </SubmitButton>
            <p
              style={{
                textAlign: "center",
                fontWeight: 500,
                marginRight: "5px",
                color: "rgb(51,51,51)",
              }}>
              don{"'"}t have an account?{" "}
              <a
                href="/register"
                style={{ textDecoration: "none", color: "#00A5EC" }}>
                Register now
              </a>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}
