import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import {
  Avatar,
  Group,
  Paper,
  Text,
  TypographyStylesProvider,
} from "@mantine/core";
import classes from "./CaroselComment.module.css";
export default function CaroselComment() {
  return (
    <div className={classes.up}>
      <Carousel
        mt={20}
        height={300}
        slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
        slideGap={{ base: 0, sm: "md" }}
        loop
        controlsOffset="xs"
        controlSize={40}
        align="start">
        <Carousel.Slide>
          <Paper withBorder radius="md" className={classes.comment}>
            <Group>
              <Avatar
                src="https://trainings.internshala.com/cached_uploads/python/signup_page_media/feedback_givers_images/umang_gupta.png"
                alt="Max Walker"
                radius="xl"
              />
              <div>
                <Text fz="sm">Max Walker</Text>
                <Text fz="xs" c="dimmed">
                  10 minutes ago
                </Text>
              </div>
            </Group>
            <TypographyStylesProvider className={classes.body}>
              <div
                className={classes.content}
                dangerouslySetInnerHTML={{
                  __html:
                    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo neque aliquam officia facere voluptatibus nam velit, expedita magni atque consequatur natus animi rerum perferendis in. Ratione, expedita eligendi. Hic, enim!",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "baseline",
                  marginBottom: "0px",
                }}>
                <Text fw={500} fz={18} mr={8} mt={10} mb={0}>
                  4.5{" "}
                </Text>
                <Text display={"flex"} style={{ color: "#FF8C00", gap: "4px" }}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </Text>
              </div>
            </TypographyStylesProvider>
          </Paper>
        </Carousel.Slide>
        <Carousel.Slide>
          <Paper withBorder radius="md" className={classes.comment}>
            <Group>
              <Avatar
                src="https://trainings.internshala.com/cached_uploads/python/signup_page_media/feedback_givers_images/udrasht.png"
                alt="Jon Hart"
                radius="xl"
              />
              <div>
                <Text fz="sm">Jon Hart</Text>
                <Text fz="xs" c="dimmed">
                  10 minutes ago
                </Text>
              </div>
            </Group>
            <TypographyStylesProvider className={classes.body}>
              <div
                className={classes.content}
                dangerouslySetInnerHTML={{
                  __html:
                    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo neque aliquam officia facere voluptatibus nam velit, expedita magni atque consequatur natus animi rerum perferendis in. Ratione, expedita eligendi. Hic, enim!",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "baseline",
                  marginBottom: "0px",
                }}>
                <Text fw={500} fz={18} mr={8} mt={10} mb={0}>
                  4.0{" "}
                </Text>
                <Text display={"flex"} style={{ color: "#FF8C00", gap: "4px" }}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>{" "}
                </Text>
              </div>
            </TypographyStylesProvider>
          </Paper>
        </Carousel.Slide>
        <Carousel.Slide>
          <Paper withBorder radius="md" className={classes.comment}>
            <Group>
              <Avatar
                src="https://trainings.internshala.com/cached_uploads/python/signup_page_media/feedback_givers_images/akhilesh.png"
                alt="Jacob Warnhalter"
                radius="xl"
              />
              <div>
                <Text fz="sm">Jacob Warnhalter</Text>
                <Text fz="xs" c="dimmed">
                  10 minutes ago
                </Text>
              </div>
            </Group>
            <TypographyStylesProvider className={classes.body}>
              <div
                className={classes.content}
                dangerouslySetInnerHTML={{
                  __html:
                    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo neque aliquam officia facere voluptatibus nam velit, expedita magni atque consequatur natus animi rerum perferendis in. Ratione, expedita eligendi. Hic, enim!",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "baseline",
                  marginBottom: "0px",
                }}>
                <Text fw={500} fz={18} mr={8} mt={10} mb={0}>
                  4.5{" "}
                </Text>
                <Text display={"flex"} style={{ color: "#FF8C00", gap: "4px" }}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </Text>
              </div>
            </TypographyStylesProvider>
          </Paper>
        </Carousel.Slide>
        <Carousel.Slide>
          <Paper withBorder radius="md" className={classes.comment}>
            <Group>
              <Avatar
                src="https://trainings.internshala.com/cached_uploads/python/signup_page_media/feedback_givers_images/prince_anuragi.png"
                alt="Daniy Alba"
                radius="xl"
              />
              <div>
                <Text fz="sm">Daniy Alba</Text>
                <Text fz="xs" c="dimmed">
                  15 minutes ago
                </Text>
              </div>
            </Group>
            <TypographyStylesProvider className={classes.body}>
              <div
                className={classes.content}
                dangerouslySetInnerHTML={{
                  __html:
                    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo neque aliquam officia facere voluptatibus nam velit, expedita magni atque consequatur natus animi rerum perferendis in. Ratione, expedita eligendi. Hic, enim!",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "baseline",
                  marginBottom: "0px",
                }}>
                <Text fw={500} fz={18} mr={8} mt={10} mb={0}>
                  4.0{" "}
                </Text>
                <Text display={"flex"} style={{ color: "#FF8C00", gap: "4px" }}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>{" "}
                </Text>
              </div>
            </TypographyStylesProvider>
          </Paper>
        </Carousel.Slide>
        <Carousel.Slide>
          <Paper withBorder radius="md" className={classes.comment}>
            <Group>
              <Avatar
                src="https://trainings.internshala.com/cached_uploads/python/signup_page_media/feedback_givers_images/yavnika.png"
                alt="Rose Arnold"
                radius="xl"
              />
              <div>
                <Text fz="sm">Rose Arnold</Text>
                <Text fz="xs" c="dimmed">
                  20 minutes ago
                </Text>
              </div>
            </Group>
            <TypographyStylesProvider className={classes.body}>
              <div
                className={classes.content}
                dangerouslySetInnerHTML={{
                  __html:
                    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo neque aliquam officia facere voluptatibus nam velit, expedita magni atque consequatur natus animi rerum perferendis in. Ratione, expedita eligendi. Hic, enim!",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "baseline",
                  marginBottom: "0px",
                }}>
                <Text fw={500} fz={18} mr={8} mt={10} mb={0}>
                  4.5{" "}
                </Text>
                <Text display={"flex"} style={{ color: "#FF8C00", gap: "4px" }}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </Text>
              </div>
            </TypographyStylesProvider>
          </Paper>
        </Carousel.Slide>
        <Carousel.Slide>
          <Paper withBorder radius="md" className={classes.comment}>
            <Group>
              <Avatar
                src="https://trainings.internshala.com/cached_uploads/machine-learning/signup_page_media/feedback_givers_images/adarsh.png"
                alt="Jacob Warnhalter"
                radius="xl"
              />
              <div>
                <Text fz="sm">Mikel Daniy</Text>
                <Text fz="xs" c="dimmed">
                  30 minutes ago
                </Text>
              </div>
            </Group>
            <TypographyStylesProvider className={classes.body}>
              <div
                className={classes.content}
                dangerouslySetInnerHTML={{
                  __html:
                    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo neque aliquam officia facere voluptatibus nam velit, expedita magni atque consequatur natus animi rerum perferendis in. Ratione, expedita eligendi. Hic, enim!",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "baseline",
                  marginBottom: "0px",
                }}>
                <Text fw={500} fz={18} mr={8} mt={10} mb={0}>
                  4.0{" "}
                </Text>
                <Text display={"flex"} style={{ color: "#FF8C00", gap: "4px" }}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>{" "}
                </Text>
              </div>
            </TypographyStylesProvider>
          </Paper>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}
