import { Button, Container, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import classes from "./TheJobPage.module.css";
import { notifications } from "@mantine/notifications";

type Job = {
  id: number;
  title: string;
  hint: string;
  category: string;
  img: string;
  country: string;
  salary: number;
  minSalary: number;
  maxSalary: number;
  publication: string;
  experience: string;
  skills: Array<string>;
};
export default function TheJobPage({ params }: any) {
  const id = params?.id;
  const [job, setJob] = useState<Job>();

  useEffect(() => {
    fetch(`http://localhost:3000/jobs/${id}`)
      .then(res => res.json())
      .then(data => setJob(data));
  }, [id]);

  function submitJob() {
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
          {job?.hint}
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
              {job?.hint}
            </Text>
            <Text fz={16} fw={500} mt={0} style={{ color: "#8A8A8A" }}>
              {job?.title}
            </Text>
          </div>
          <div>
            <img src={job?.img} className={classes.image} />
          </div>
        </div>
        <div style={{ marginTop: "-10px" }}>
          <Text mt={0}>
            <i
              className="fa-solid fa-location-dot"
              style={{ color: "#8A8A8A", marginRight: "2px" }}></i>
            {job?.country}
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
                className="fa-solid fa-suitcase"
                style={{
                  color: "#8A8A8A",
                  padding: "0px 2px 2px 0px",
                }}></i>
              EXPERIENCE
            </p>
            <p className={classes.immediately}>{job?.experience}</p>
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
            <p className={classes.immediately}>
              ${job?.minSalary} - {job?.maxSalary} /month
            </p>
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
            <p className={classes.immediately}>17 Dec' 24</p>
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
            {job?.publication}
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
            Fresher Job
          </p>
        </div>
        <div>
          <p style={{ color: "#8A8A8A" }}>
            <i className="fa-solid fa-users"></i> 220 applicants
          </p>
        </div>
        <div className={classes.line}></div>
        <div>
          <div>
            <p className={classes.aboutJob}>About the job</p>
            <p style={{ margin: "0px auto", color: "rgb(93 93 93)" }}>
              Selected job's day-to-day responsibilities include:
            </p>
          </div>
          <div style={{ marginTop: "10px", color: "rgb(93 93 93)" }}>
            <ul
              style={{
                listStyle: "auto",
                paddingLeft: "16px ",
                margin: "0px",
              }}>
              <li>
                {" "}
                Work with backend developers to integrate frontend interfaces
                with backend services and APIs{" "}
              </li>
              <li>
                Collaborate with designers, developers, and project managers to
                ensure the best possible user experience and implementation of
                web designs
              </li>
              <li> Write clean, maintainable, and efficient code</li>
              <li>
                {" "}
                Participate in code reviews, and provide feedback and
                recommendations for improvements
              </li>
            </ul>
          </div>
          <Text mb={0} mt={10} style={{ color: "rgb(93 93 93)" }}>
            Who can apply:
          </Text>
          <div
            style={{
              marginBottom: "15px",
              marginTop: "10px",
              color: "rgb(93 93 93)",
            }}>
            <ul
              style={{
                listStyle: "auto",
                paddingLeft: "16px ",
                margin: "0px",
              }}>
              <li>
                I have the ability to communicate and have sufficient knowledge
                of the basics of the job and its requirements
              </li>
              <li>
                There is no bond, but if you leave the company within 1 year, no
                experience letter will be provided
              </li>
              <li>
                Shift timing will be 3:30 pm (afternoon) to 9:00 pm work from
                office and 11:00 pm (night) to 2:30 am work from home.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className={classes.titleSkills}>Skill(s) required</p>
          <div className={classes.styleSkills}>
            {job?.skills.map(ele => (
              <p key={ele} className={classes.skills}>
                {ele}
              </p>
            ))}
          </div>
        </div>
        <div>
          <Text className={classes.aboutJob}>Who can apply</Text>
          <Text my={1}>Only those candidates can apply who:</Text>
          <ul
            style={{
              listStyle: "auto",
              paddingLeft: "16px ",
              margin: "0px",
              color: "rgb(93 93 93)",
            }}>
            <li>are available for full time (in-office) job</li>
            <li>can start the jobship between 3rd Feb'24 and 9th Mar'24</li>
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
          <Text mt={20} className={classes.aboutJob}>
            Take into consideration
          </Text>
          <Text my={0} ml={5} style={{ color: "rgb(93 93 93)" }}>
            20
          </Text>
        </div>
        <div>
          <Text mt={20} className={classes.aboutJob}>
            {" "}
            Salary
          </Text>
          <Text
            fz={15}
            fw={500}
            style={{
              color: " #333333",
            }}>
            Probation:
          </Text>
          <Text style={{ color: "rgb(93 93 93)" }}>Duration: 3 months</Text>
          <Text style={{ color: "rgb(93 93 93)" }}>
            Salary during probation: ${job?.minSalary} /month (only for
            freshers)
          </Text>
          <Text
            mt={15}
            fz={15}
            fw={500}
            style={{
              color: " #333333",
            }}>
            After probation:
          </Text>
          <Text style={{ color: "rgb(93 93 93)" }}>
            Monthly: ${job?.maxSalary} /month
          </Text>
        </div>
        <div>
          <Text mt={20} className={classes.aboutJob}>
            {job?.title}
          </Text>
          <div style={{ color: "rgb(93 93 93)" }}>
            <Text m={0}>
              Joseph SriHarsha & Mary Indraja Educational Society, in
              collaboration with the Ministry of Rural Development, Government
              of India, and DDU-GKY is offering 12+ courses with industry
              experts in "Future Skills" in the states of Andhra Pradesh,
              Gujarat, Kerala, Madhya Pradesh, Tripura, West Bengal, and is
              successfully placing students in companies across India. This
              program is meticulously executed with the help of experts
              committed to bringing about substantial change and improvement.
              <br />
              <br />
              This is a system of concrete tutelage where enrolled students are
              exposed to jobational placements as well to help usher their
              growth on a global scale.
            </Text>
          </div>
        </div>
        <div className={classes.lestActivity}>
          <Text fz={15} mt={0} mb={10} className={classes.aboutJob}>
            Activity on job
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
              320 opportunities posted
            </p>
            <p className={classes.activityElement}>
              <i
                className="fa-solid fa-user-check"
                style={{ marginRight: "4px" }}></i>
              55 candidates hired
            </p>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button
            type="submit"
            onClick={() => submitJob()}
            bg={"rgb(0,165,236)"}
            size="lg">
            Apply now
          </Button>
        </div>
      </Container>
    </>
  );
}
