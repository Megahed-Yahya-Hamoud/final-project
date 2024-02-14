/* eslint-disable no-undef */
import cache from "@mongez/cache";
import { Form } from "@mongez/react-form";
import { navigateTo } from "@mongez/react-router";
import { getUserData } from "apps/front-office/Register/services/register-services";
import { EmailInput } from "apps/front-office/design-system/Form/EmailInput";
import { PasswordInput } from "apps/front-office/design-system/Form/PasswordInput";
import { SubmitButton } from "apps/front-office/design-system/Form/SubmitButton";
import {
  toastError,
  toastSuccess,
} from "apps/front-office/design-system/components/Toast/Toast";
import parseError from "apps/front-office/utils/parse-error";
import URLS from "apps/front-office/utils/urls";

export default function Login() {
  function userData({ values, form }) {
    getUserData(values)
      .then(response => {
        const userData = response.data;
        if (
          cache.get("loggedInUser").userName === userData.userName ||
          cache.get("loggedInUser").email === userData.email
        ) {
          toastSuccess("Login Successful");
          navigateTo(URLS.home);
        }
      })
      .catch(err => {
        toastError(parseError(err));
      })
      .finally(() => {
        form.submitted = false;
      });
  }
  return (
    <Form onSubmit={userData}>
      <EmailInput name="email" placeholder="Email" />
      <PasswordInput name="password" placeholder="Password" />
      <SubmitButton>Login</SubmitButton>
    </Form>
  );
}
