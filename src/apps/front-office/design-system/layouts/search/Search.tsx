import { rem } from "@mantine/core";
import { Spotlight, SpotlightActionData, spotlight } from "@mantine/spotlight";
import "@mantine/spotlight/styles.css";
import {
  IconDashboard,
  IconFileText,
  IconHome,
  IconSearch,
} from "@tabler/icons-react";
const actions: SpotlightActionData[] = [
  {
    id: "home",
    label: "Home",
    description: "Get to home page",
    onClick: () => (location.href = "/"),
    leftSection: (
      <IconHome style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
    ),
  },
  {
    id: "internships",
    label: "Internships",
    description: "Get to internships page",
    onClick: () => (location.href = "/internships"),
    leftSection: (
      <IconDashboard style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
    ),
  },
  {
    id: "jobs",
    label: "Jobs",
    description: "Get to jobs page",
    onClick: () => (location.href = "/jobs"),
    leftSection: (
      <i className="fa-solid fa-suitcase" style={{ marginLeft: "5px" }}></i>
    ),
  },
  {
    id: "courses",
    label: "Courses",
    description: "Get to courses page",
    onClick: () => (location.href = "/courses"),
    leftSection: (
      <IconFileText style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
    ),
  },
];
export default function Search() {
  return (
    <>
      <p
        onClick={spotlight.open}
        style={{
          cursor: "pointer",
          fontSize: "16px",
          color: "#666",
          display: "flex",
          gap: "5px",
          alignItems: "center",
        }}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <span>Search</span>
      </p>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        searchProps={{
          leftSection: (
            <IconSearch
              style={{ width: rem(20), height: rem(20) }}
              stroke={1.5}
            />
          ),
          placeholder: "Search...",
        }}
      />
    </>
  );
}
