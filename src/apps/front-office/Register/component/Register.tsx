import { Divider, Group, Text } from "@mantine/core";
import cache from "@mongez/cache";
import { Form } from "@mongez/react-form";
import { navigateTo } from "@mongez/react-router";
import { EmailInput } from "apps/front-office/design-system/Form/EmailInput";
import { PasswordInput } from "apps/front-office/design-system/Form/PasswordInput";
import { SubmitButton } from "apps/front-office/design-system/Form/SubmitButton";
import { TextInput } from "apps/front-office/design-system/Form/TextInput";
import {
  toastError,
  toastSuccess,
} from "apps/front-office/design-system/components/Toast/Toast";
import parseError from "apps/front-office/utils/parse-error";
import URLS from "apps/front-office/utils/urls";
import { postUserData } from "../services/register-services";
import { GoogleButton } from "./ButtonGoogle/GoogleButton";
import classes from "./Register.module.css";

export default function Register() {
  function addUser({ values, form }) {
    postUserData(values)
      .then(() => {
        cache.set("loggedInUser", values);
        toastSuccess("User created successfully");
        navigateTo(URLS.auth.login);
      })
      .catch(error => {
        toastError(parseError(error));
      })
      .finally(() => {
        form.isSubmitting = false;
      });
  }
  return (
    <div className={classes.style}>
      <div className={classes.titleHeader}>
        <p className={classes.title}>Sign-up and apply for free</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p className={classes.underline}></p>
        </div>
        <p className={classes.companies}>
          1,50,000+ companies hiring on Internships
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "50px auto 0px",
          paddingBottom: "50px",
        }}>
        <Form className={classes.form} onSubmit={addUser}>
          <Group grow mb="md" mt="md">
            <GoogleButton
              radius="xl"
              onClick={() => {
                location.href =
                  "https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=827625755886-edpmpa7jsvq8al2v03utohjqg4j2sd3b.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Finternshala.com%2Flogin%2Fgoogle&scope=profile%20email&response_type=code&state=eyAicm9sZSIgOiAidXNlciIsICJzdWNjZXNzX3BhZ2UiIDogIi9zdHVkZW50L2Rhc2hib2FyZCIsICJ1dG1fc291cmNlIiA6ICJpc19oZWFkZXJfaG9tZXBhZ2UiICwgInV0bV9tZWRpdW0iIDogIiIsICJ1dG1fY2FtcGFpZ24iIDogIiIgfQ%2C%2C&service=lso&o2v=1&theme=glif&flowName=GeneralOAuthFlow";
              }}>
              Sign in with Google
            </GoogleButton>
          </Group>
          <Divider label="OR" labelPosition="center" my="lg" color="black" />

          <div style={{ marginBottom: "-18px" }}>
            <label className={classes.label} htmlFor="username">
              Username:
            </label>
            <br />
            <TextInput
              id="username"
              name="username"
              placeholder="Username"
              required
              className={classes.field}
            />
          </div>
          <br />

          <div style={{ marginBottom: "-18px" }}>
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

          <div style={{ marginBottom: "-18px" }}>
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
          <br />

          <div style={{ marginBottom: "-18px" }}>
            <label className={classes.label} htmlFor="confirmPassword">
              ConfirmPassword:
            </label>
            <br />

            <PasswordInput
              id="confirmPassword"
              match="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              className={classes.field}
            />
          </div>
          <br />

          <Text fz={12} mb={8}>
            {" "}
            By signing up, you agree to our{" "}
            <span style={{ color: "#00A5EC", fontWeight: 500 }}>
              Terms and Conditions.
            </span>
          </Text>
          <SubmitButton style={{ width: "100%" }}>Register</SubmitButton>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "-5px",
              marginBottom: "-10px",
            }}>
            <p
              style={{
                fontWeight: 500,
                marginRight: "5px",
                color: "rgb(51,51,51)",
              }}>
              Already registered?{" "}
            </p>
            <a
              href="/login"
              style={{ color: "#00A5EC", textDecoration: "none" }}>
              Login
            </a>
          </div>
        </Form>
      </div>
    </div>
  );
}
