import classes from "./LogoInterShips.module.css";
export default function LogoInterShips() {
  return (
    <>
      <div className={classes.styleLogoInter}>
        <div className={classes.logo}>
          <div>
            <p className={classes.kickstart}>
              Kickstart your career with Internships
            </p>
          </div>
          <div>
            <p className={classes.scratch}>
              We’ll help you with your confusion about career choices, teach you
              practical skills and help you land a placement. Join a network of
              600K+ learners and #Start it from scratch.
            </p>
          </div>
        </div>
        <div className={classes.upBtn}>
          <div>
            <a href="#weeks" className={classes.btnWeeks}>
              Certification courses
            </a>
          </div>
          <div>
            <a href="#months" className={classes.btnMonths}>
              {" "}
              Placement Guarantee courses
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
