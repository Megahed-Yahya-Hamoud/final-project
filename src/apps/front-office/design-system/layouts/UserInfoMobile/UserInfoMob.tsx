import { Avatar, Button, Group, Text, UnstyledButton } from "@mantine/core";
import cache from "@mongez/cache";
import { navigateTo } from "@mongez/react-router";
import user from "apps/front-office/account/user";
import { toastSuccess } from "apps/front-office/design-system/components/Toast/Toast";
import URLS from "apps/front-office/utils/urls";
import classes from "./UserInfoMob.module.css";

export function UserInfoMob() {
  const userData = cache.get("loggedInUser");

  function logout() {
    cache.remove("loggedInUser");
    user.logout();
    toastSuccess("Logout successfully");
    navigateTo(URLS.auth.login);
  }
  return (
    <UnstyledButton className={classes.user}>
      <Group ml={25}>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {userData.username}
          </Text>

          <Text c="dimmed" size="xs">
            {userData.email}
          </Text>
        </div>
        <Button
          bg={"none"}
          type="submit"
          onClick={() => {
            logout();
          }}>
          <i
            className="fa-solid fa-right-from-bracket"
            style={{ color: "black", fontSize: "20px" }}></i>
        </Button>
      </Group>
    </UnstyledButton>
  );
}
