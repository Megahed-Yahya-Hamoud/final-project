import { emailRule, requiredRule } from "@mongez/react-form";
import { BaseInputProps } from "apps/front-office/design-system/types/form-types";
import { BaseInput } from "./BaseInput";

export function EmailInput(props: BaseInputProps) {
  return <BaseInput {...props} />;
}

EmailInput.defaultProps = {
  type: "email",
  rules: [requiredRule, emailRule],
};
