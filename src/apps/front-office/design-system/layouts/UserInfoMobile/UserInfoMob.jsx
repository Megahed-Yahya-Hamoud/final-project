import { Avatar, Button, Group, Text, UnstyledButton } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import cache from "@mongez/cache";
import classes from "./UserInfoMob.module.css";

export function UserInfoMob() {
  const user = cache.get("loggedInUser");

  function logout() {
    cache.remove("loggedInUser");
    notifications.show({
      message: "Success logout",
      color: "green",
    });
    setTimeout(() => {
      location.href = "/login";
    }, 1000);
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
            {user.username}
          </Text>

          <Text c="dimmed" size="xs">
            {user.email}
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
