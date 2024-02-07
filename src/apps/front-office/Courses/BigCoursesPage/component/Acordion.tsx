import { Accordion } from "@mantine/core";
import classes from "./Acordion.module.css";

const question = [
  {
    id: 1,
    title: "Who is eligible to apply for the Placement Guarantee course?",
    description:
      "The Placement Guarantee course program is meant for pre-final and final year students, recent graduates, and young professionals who wish to build a career in Full Stack Development. You should also be authorized and available to work in India upon completion of the course if you wish to avail of the internship guarantee benefits.",
  },
  {
    id: 2,
    title:
      " I am in the early years of college and will NOT be graduating in the next 12 months, can I still apply?",
    description:
      "Yes, if you have decided to make a career in full-stack development and are ready to put in the required time and effort to complete the course, you can still apply and we will evaluate your application based on its quality. You would be able to apply to the short-term or work-from-home internships that are published on Internshala. ",
  },
  {
    id: 3,
    title:
      " I have more than 3 years of work experience in a different field ,can I apply?",
    description:
      "Yes, you can. However, please note that the placement opportunities that we would be curating for the students of the Placement Guarantee course would be those of internships and the same will be made available to you too. Different companies may factor in your prior work experience in their hiring decisions differently and it will be at the sole discretion of the companies.",
  },
  {
    id: 4,
    title: "  What questions will the application process consist of?",
    description:
      "The application form would consist of questions on your education, and questions to test your communication skills.",
  },
  {
    id: 5,
    title: " On what parameters would my application be evaluated? ",
    description:
      "Your application would be evaluated on the basis of your written communication skills in this full-stack development Placement Guarantee course.",
  },
  {
    id: 6,
    title: " My application was rejected, can I re-apply?",
    description:
      "You can. However, it is recommended that you speak to us first to understand shortcomings in your previous application before deciding to re-apply.",
  },
];
export default function Acordion() {
  return (
    <div>
      {" "}
      <Accordion classNames={classes}>
        {question.map(ele => (
          <Accordion.Item key={ele.id} value={ele.title}>
            <Accordion.Control my={10}>Q. {ele.title}</Accordion.Control>
            <Accordion.Panel>{ele.description}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}
