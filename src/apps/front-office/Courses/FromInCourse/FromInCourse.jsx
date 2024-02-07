import { Button, Divider, Group, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { ErrorMessage, Field, Form, Formik } from "formik";
import RegisterSchema from "../../Register/component/RegisterSchema/RegisterSchema";
import classes from "./FromInCourse.module.css";
import { GoogleButton } from "./GoogleButton";

export default function From() {
  function addUser(values) {
    const data = { ...values };
    if (
      data.username === "" ||
      data.email === "" ||
      data.password !== data.confirmPassword
    ) {
      notifications.show({
        message: "Wrong in one of the inputs",
        color: "red",
      });
    } else {
      delete data.confirmPassword;
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      notifications.show({
        message: "Success register",
        color: "green",
      });
      setTimeout(() => {
        location.href = "/login";
      }, 2000);
    }
  }

  return (
    <div className={classes.style}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "50px auto 0px",
          // paddingBottom: "50px",
        }}>
        <>
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={RegisterSchema}
            onSubmit={addUser}>
            <Form className={classes.form}>
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
              <Divider
                label="OR"
                labelPosition="center"
                my="lg"
                color="black"
              />
              <div>
                <label className={classes.label} htmlFor="username">
                  Username:
                </label>
                <br />

                <Field
                  className={classes.field}
                  id="username"
                  type="username"
                  name="username"
                  placeholder="Username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>
              <br />
              <div>
                <label className={classes.label} htmlFor="email">
                  Email
                </label>
                <br />

                <Field
                  className={classes.field}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email address"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>
              <br />

              <div>
                <label className={classes.label} htmlFor="password">
                  Password:
                </label>
                <br />

                <Field
                  className={classes.field}
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>
              <br />

              <div style={{ marginBottom: "-18px" }}>
                <label className={classes.label} htmlFor="confirmPassword">
                  ConfirmPassword:
                </label>
                <br />
                <Field
                  className={classes.field}
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  style={{ color: "red" }}
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
              <div>
                <Button style={{ width: "100%" }} type="submit">
                  Register{" "}
                </Button>
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
              </div>
            </Form>
          </Formik>
        </>
      </div>
    </div>
  );
}
