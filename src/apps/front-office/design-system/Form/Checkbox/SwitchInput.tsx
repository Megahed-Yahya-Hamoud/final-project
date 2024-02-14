import { Switch } from "@mantine/core";
import { withCheckboxInput } from "./withCheckboxInput";

// <Partial<SwitchProps>>
export const SwitchInput = withCheckboxInput<any>(Switch, {
  multiple: false,
});
