import { PasswordInput as BasePasswordInput } from "@mantine/core";
import {
  lengthRule,
  matchRule,
  maxLengthRule,
  minLengthRule,
  requiredRule,
} from "@mongez/react-form";
import { BaseInputProps } from "apps/front-office/design-system/types/form-types";
import { BaseInput } from "./BaseInput";

export function PasswordInput(props: BaseInputProps) {
  return <BaseInput {...props} />;
}

PasswordInput.defaultProps = {
  type: "password",
  component: BasePasswordInput,
  rules: [requiredRule, minLengthRule, lengthRule, maxLengthRule, matchRule],
};
