/* eslint-disable no-undef */
import { Button, Title } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { ErrorMessage, Field, Form, Formik } from "formik";
import classes from "./Login.module.css";
import LoginSchema from "./LoginSchema/LoginSchema";

export default function Login() {
  function loginUser(values) {
    fetch(
      `http://localhost:3000/users?email=${values.email}&password=${values.password}`,
    )
      .then(res => res.json())
      .then(data => {
        if (data.length) {
          localStorage.setItem("loggedInUser", JSON.stringify(data[0]));
          notifications.show({
            message: "Success login",
            color: "green",
          });
          setTimeout(() => {
            location.href = "/";
          }, 2000);
        } else {
          console.log("Wrong email or password");
          notifications.show({
            message: "Wrong email or password",
            color: "red",
          });
        }
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
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={loginUser}>
          <Form className={classes.form}>
            <div>
              <label className={classes.label} htmlFor="email">
                Email:
              </label>
              <br />
              <Field
                className={classes.field}
                id="email"
                type="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage
                style={{ color: "red" }}
                name="email"
                component={"div"}
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
                style={{ color: "red" }}
                name="password"
                component={"div"}
              />
            </div>
            <div>
              <Button
                type="submit"
                style={{ width: "100%", margin: "20px auto 10px" }}>
                Login
              </Button>
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
        </Formik>
      </div>
    </div>
  );
}
