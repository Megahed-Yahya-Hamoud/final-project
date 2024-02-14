import { Checkbox } from "@mantine/core";
import { withCheckboxInput } from "./withCheckboxInput";

// <Partial<CheckboxProps>>
export const CheckboxInput = withCheckboxInput<any>(Checkbox, {
  multiple: false,
});
