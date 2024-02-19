import {
  Autocomplete,
  Box,
  Burger,
  Divider,
  Drawer,
  Group,
  Image,
  ScrollArea,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "@mongez/react-router";
import { IconSearch } from "@tabler/icons-react";
import { UserInfoMob } from "apps/front-office/design-system/layouts/UserInfoMobile/UserInfoMob";
import { UserInfo } from "apps/front-office/design-system/layouts/userInfo/UserInfo";
import URLS from "apps/front-office/utils/urls";
import Search from "../search/Search";
import classes from "./StyleHeader.module.css";

const links = [
  { id: 1, link: "/", label: "Home" },
  { id: 2, link: "/internships", label: "Internships" },
  { id: 3, link: "/jobs", label: "Jobs" },
  { id: 4, link: "/courses", label: "Courses" },
];

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const active = window.location.pathname.split("/")[2] || "/";

  const items = links.map(link => {
    return (
      <a
        key={link.id}
        href={link.link}
        className={classes.link}
        data-active={link.link.endsWith(active) || undefined}>
        {link.label}
      </a>
    );
  });

  return (
    <Box pb={0}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Box className={classes.boxLogo}>
            <Image
              onClick={() => {
                location.href = "/";
              }}
              radius="xl"
              h={80}
              w={250}
              pr={20}
              pt={10}
              src="https://i.pinimg.com/originals/e5/0c/c5/e50cc50a7e5e24960caa6dbbd244de8c.png"
            />
            <Group h="100%" gap={10} visibleFrom="lg">
              {items}
            </Group>
          </Box>

          <Group visibleFrom="lg">
            {localStorage.length ? (
              <>
                <UserInfo />
              </>
            ) : (
              <>
                <Search />

                <Link className={classes.login} to={URLS.auth.login}>
                  Log in
                </Link>
                <Link className={classes.register} to={URLS.auth.register}>
                  Register
                </Link>
              </>
            )}
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="lg"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="lg"
        zIndex={1000000}>
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          {items}
          <Autocomplete
            style={{ margin: "10px" }}
            className={classes.search}
            placeholder="Search"
            leftSection={
              <IconSearch
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            data={["internships", "courses", "jobs"]}
          />
          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            {localStorage.length ? (
              <>
                <UserInfoMob />
              </>
            ) : (
              <>
                <Link className={classes.login} to={URLS.auth.login}>
                  Log in
                </Link>
                <Link className={classes.register} to={URLS.auth.register}>
                  Register
                </Link>
              </>
            )}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
