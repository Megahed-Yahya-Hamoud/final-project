import { NumberInput as BaseNumberInput } from "@mantine/core";
import { maxRule, minRule, numberRule, requiredRule } from "@mongez/react-form";
import { BaseInputProps } from "apps/front-office/design-system/types/form-types";
import { BaseInput } from "./BaseInput";

export function NumberInput(props: BaseInputProps) {
  return <BaseInput {...props} handleValueChange={e => e} />;
}

NumberInput.defaultProps = {
  type: "number",
  rule: "number",
  rules: [requiredRule, numberRule, minRule, maxRule],
  component: BaseNumberInput,
};
