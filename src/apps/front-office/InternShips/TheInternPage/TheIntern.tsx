import { Button, Container, Text, Title } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useEffect, useState } from "react";
import classes from "./TheIntern.module.css";
// import { Internships } from "../InternshipsPage/InternShips";
type Intern = {
  id: string | number;
  title: string;
  hint: string;
  category: string;
  img: string;
  img2: string;
  country: string;
  salary: number;
  time: string;
  publication: string;
  skills: Array<string>;
};
export default function TheIntern({ params }: any) {
  const id = params?.id;
  const [intern, setIntern] = useState<Intern>();

  useEffect(() => {
    fetch(`http://localhost:3000/internships/${id}`)
      .then(res => res.json())
      .then(data => setIntern(data));
  }, [id]);

  function submitIntern() {
    if (localStorage.length) {
      notifications.show({
        message: "Success Apply",
        color: "green",
      });
    } else {
      setTimeout(() => {
        location.href = "/register";
      }, 1000);
    }
  }

  return (
    <>
      <Container mb={20}>
        <Title my={25} className={classes.title}>
          {intern?.hint}
        </Title>
      </Container>

      <Container className={classes.container}>
        <div className={classes.actively}>
          <i
            className="fa-solid fa-arrow-trend-up"
            style={{ color: "#3ae" }}></i>
          <p className={classes.active_hiring}>Actively hiring</p>
        </div>
        <div className={classes.header}>
          <div>
            <Text fz={19} fw={600} mt={0}>
              {intern?.hint}
            </Text>
            <Text fz={16} fw={500} mt={0} style={{ color: "#8A8A8A" }}>
              {intern?.title}
            </Text>
          </div>
          <div>
            <img src={intern?.img} className={classes.image} />
          </div>
        </div>
        <div style={{ marginTop: "-10px" }}>
          <Text mt={0}>
            <i
              className="fa-solid fa-location-dot"
              style={{ color: "#8A8A8A", marginRight: "2px" }}></i>
            {intern?.country}
          </Text>
        </div>

        <div className={classes.info}>
          <div style={{ margin: "7px 7px 7px 0px " }}>
            <p className={classes.start}>
              {" "}
              <i
                className="fa-regular fa-circle-play"
                style={{
                  color: "#8A8A8A",
                  padding: "0px 2px 2px 0px",
                }}></i>
              START DATE
            </p>
            <p className={classes.immediately}>Immediately</p>
          </div>
          <div style={{ margin: "7px" }}>
            <p className={classes.start}>
              {" "}
              <i
                className="fa-regular fa-calendar"
                style={{
                  color: "#8A8A8A",
                  padding: "0px 2px 2px 0px",
                }}></i>
              DURATION
            </p>
            <p className={classes.immediately}>{intern?.time}</p>
          </div>
          <div style={{ margin: "7px" }}>
            <p className={classes.start}>
              {" "}
              <i
                className="fa-solid fa-money-bill"
                style={{
                  color: "#8A8A8A",
                  padding: "0px 2px 2px 0px",
                }}></i>
              SALARY
            </p>
            <p className={classes.immediately}>${intern?.salary} /month</p>
          </div>
          <div style={{ margin: "7px" }}>
            <p className={classes.start}>
              {" "}
              <i
                className="fa-solid fa-hourglass-half"
                style={{
                  color: "#8A8A8A",
                  padding: "0px 2px 2px 0px",
                }}></i>
              APPLY BY
            </p>
            <p className={classes.immediately}>17 Jun`` 24</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <p
            style={{
              margin: "5px 10px 5px 0px",
              backgroundColor: "rgb(241,255,229)",
              borderRadius: "6px",
              padding: "4px 7px",
              fontSize: "13px",
              color: "rgb(19,128,13)",
            }}>
            <i
              className="fa-regular fa-clock"
              style={{
                padding: "0px 2px 2px 0px",
              }}></i>
            {intern?.publication}
          </p>
          <p
            style={{
              margin: "5px 10px 5px 10px",
              backgroundColor: "#eee",
              borderRadius: "6px",
              padding: "4px 7px",
              fontSize: "13px",
              color: "black",
            }}>
            InternShip
          </p>
        </div>
        <div>
          <p style={{ color: "#8A8A8A" }}>
            <i className="fa-solid fa-users"></i> 120 applicants
          </p>
        </div>
        <div className={classes.line}></div>
        <div>
          <div>
            <p className={classes.aboutIntern}>About the internship</p>
            <p style={{ margin: "0px auto", color: "rgb(93 93 93)" }}>
              Selected intern`s day-to-day responsibilities include:
            </p>
          </div>
          <div style={{ marginTop: "10px", color: "rgb(93 93 93)" }}>
            <ul
              style={{
                listStyle: "auto",
                paddingLeft: "16px ",
                margin: "0px",
              }}>
              <li>Mentor projects of engineering students</li>
              <li>Solve the bugs of projects of engineering students</li>
              <li> Develop industrial projects and explain them to students</li>
            </ul>
          </div>
          <p style={{ color: "rgb(93 93 93)" }}>
            Who can apply: People who are willing to relocate to Hyderabad Note:
            The candidate would have to spend 3hrs of teaching and 4hrs of web
            development every day
          </p>
        </div>
        <div>
          <p className={classes.titleSkills}>Skill(s) required</p>
          <div className={classes.styleSkills}>
            {intern?.skills.map(ele => (
              <p key={ele} className={classes.skills}>
                {ele}
              </p>
            ))}
          </div>
        </div>
        <div>
          <Text className={classes.aboutIntern}>Who can apply</Text>
          <Text my={1}>Only those candidates can apply who:</Text>
          <ul
            style={{
              listStyle: "auto",
              paddingLeft: "16px ",
              margin: "0px",
              color: "rgb(93 93 93)",
            }}>
            <li>are available for full time (in-office) internship</li>
            <li>can start the internship between 3rd Feb`24 and 9th Mar`24</li>
            <li>are available for duration of 6 months</li>
            <li>have relevant skills and interests</li>
          </ul>
          <p
            style={{
              color: "rgb(93 93 93)",
              margin: "0px",
            }}>
            * Women wanting to start/restart their career can also apply.
          </p>
        </div>
        <div>
          <Text mt={20} className={classes.aboutIntern}>
            Take into consideration
          </Text>
          <Text my={0} ml={5} style={{ color: "rgb(93 93 93)" }}>
            3
          </Text>
        </div>
        <div>
          <Text mt={20} className={classes.aboutIntern}>
            {intern?.title}
          </Text>
          <div style={{ color: "rgb(93 93 93)" }}>
            <Text m={0}>
              Joseph SriHarsha & Mary Indraja Educational Society, in
              collaboration with the Ministry of Rural Development, Government
              of India, and DDU-GKY is offering 12+ courses with industry
              experts in `Future Skills` in the states of Andhra Pradesh,
              Gujarat, Kerala, Madhya Pradesh, Tripura, West Bengal, and is
              successfully placing students in companies across India. This
              program is meticulously executed with the help of experts
              committed to bringing about substantial change and improvement.
              <br />
              <br />
              This is a system of concrete tutelage where enrolled students are
              exposed to international placements as well to help usher their
              growth on a global scale.
            </Text>
          </div>
        </div>
        <div className={classes.lestActivity}>
          <Text fz={15} mt={0} mb={10} className={classes.aboutIntern}>
            Activity on Internships
          </Text>
          <div className={classes.activity}>
            <p className={classes.activityElement}>
              <i
                className="fa-regular fa-calendar-days"
                style={{ marginRight: "4px" }}></i>
              Hiring since December 2023
            </p>
            <p className={classes.activityElement}>
              <i
                className="fa-regular fa-clipboard"
                style={{ marginRight: "4px" }}></i>
              410 opportunities posted
            </p>
            <p className={classes.activityElement}>
              <i
                className="fa-solid fa-user-check"
                style={{ marginRight: "4px" }}></i>
              45 candidates hired
            </p>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button
            type="submit"
            onClick={() => submitIntern()}
            bg={"rgb(0,165,236)"}
            size="lg">
            Apply now
          </Button>
        </div>
      </Container>
    </>
  );
}
