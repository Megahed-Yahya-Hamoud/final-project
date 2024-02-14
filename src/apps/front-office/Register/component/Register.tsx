import cache from "@mongez/cache";
import { Form } from "@mongez/react-form";
import { navigateTo } from "@mongez/react-router";
import { EmailInput } from "apps/front-office/design-system/Form/EmailInput";
import { PasswordInput } from "apps/front-office/design-system/Form/PasswordInput";
import { SubmitButton } from "apps/front-office/design-system/Form/SubmitButton";
import { TextInput } from "apps/front-office/design-system/Form/TextInput";
import {
  toastError,
  toastSuccess,
} from "apps/front-office/design-system/components/Toast/Toast";
import parseError from "apps/front-office/utils/parse-error";
import URLS from "apps/front-office/utils/urls";
import { postUserData } from "../services/register-services";

export default function Register() {
  function addUser({ values, form }) {
    postUserData(values)
      .then(() => {
        cache.set("loggedInUser", values);
        toastSuccess("User created successfully");
        navigateTo(URLS.auth.login);
      })
      .catch(error => {
        toastError(parseError(error));
      })
      .finally(() => {
        form.isSubmitting = false;
      });
  }
  return (
    <Form onSubmit={addUser}>
      <TextInput name="username" placeholder="Username" required />
      <EmailInput name="email" placeholder="Email" required />
      <PasswordInput
        id="password"
        name="password"
        placeholder="Password"
        required
      />
      <PasswordInput
        match="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        required
      />
      <SubmitButton>Register</SubmitButton>
    </Form>
  );
}
