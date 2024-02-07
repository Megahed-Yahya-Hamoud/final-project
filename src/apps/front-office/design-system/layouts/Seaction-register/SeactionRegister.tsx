import classes from "./SeactionRegister.module.css";
export default function SeactionRegister() {
  return (
    <div className={classes.up}>
      <div className={classes.container}>
        <div>
          <p className={classes.empower}>
            Empower your career with Internships today
          </p>
        </div>
        <div className={classes.buts}>
          <div>
            <a
              href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=827625755886-edpmpa7jsvq8al2v03utohjqg4j2sd3b.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Finternshala.com%2Flogin%2Fgoogle&scope=profile%20email&response_type=code&state=eyAicm9sZSIgOiAidXNlciIsICJzdWNjZXNzX3BhZ2UiIDogIi9zdHVkZW50L2Rhc2hib2FyZCIsICJ1dG1fc291cmNlIiA6ICIiICwgInV0bV9tZWRpdW0iIDogIiIsICJ1dG1fY2FtcGFpZ24iIDogIiIgfQ%2C%2C&service=lso&o2v=1&theme=glif&flowName=GeneralOAuthFlow"
              target="blank"
              className={classes.butGoogle}>
              <img
                src="https://internshala.com/static/images/login/google_logo_24.svg"
                width={"24px"}
                height={"24px"}
              />{" "}
              Continue with Google
            </a>
          </div>
          <div>
            <a href="#" className={classes.register}>
              Register now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
