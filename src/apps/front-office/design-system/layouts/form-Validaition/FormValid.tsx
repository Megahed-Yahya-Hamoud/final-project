import { Box, Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

export default function FormValid() {
  const form = useForm({
    initialValues: { name: "", email: "", password: "", confirmPassword: "" },
    validate: {
      name: value =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: value => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: value =>
        value.length >= 10
          ? "Password must not exceed  10 number or letters"
          : null,
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  const handleError = (errors: typeof form.errors) => {
    if (errors.name) {
      notifications.show({ message: "Please fill name field", color: "red" });
    } else if (errors.email) {
      notifications.show({
        message: "Please provide a valid email",
        color: "red",
      });
    } else if (errors.password) {
      notifications.show({
        message: "Please provide a valid password",
        color: "red",
      });
    } else if (errors.confirmPassword) {
      notifications.show({
        message: "Please provide a valid confirmPassword",
        color: "red",
      });
    }
  };
  const handleSubmit = () => {
    notifications.show({
      message: "Success login",
      color: "green",
    });
  };

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit(handleSubmit, handleError)}>
        <TextInput
          label="Name"
          placeholder="Name"
          {...form.getInputProps("name")}
        />
        <TextInput
          mt="sm"
          label="Email"
          placeholder="Email"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Password"
          placeholder="Password"
          {...form.getInputProps("password")}
        />

        <PasswordInput
          mt="sm"
          label="Confirm password"
          placeholder="Confirm password"
          {...form.getInputProps("confirmPassword")}
        />
        <Button type="submit" mt="sm">
          Submit
        </Button>
      </form>
    </Box>
  );
}
