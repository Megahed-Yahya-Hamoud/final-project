import { Textarea } from "@mantine/core";
import { trans } from "@mongez/localization";
import { requiredRule, useFormControl } from "@mongez/react-form";
import { InputWrapper } from "apps/front-office/design-system/Form/InputWrapper";
import { BaseInputProps } from "apps/front-office/design-system/types/form-types";
import React from "react";
import classes from "./style.module.scss";

function _TextAreaInput(
  { dir, label, required, placeholder, description, ...props }: BaseInputProps,
  ref: any,
) {
  const {
    id,
    value,
    visibleElementRef,
    changeValue,
    disabled,
    error,
    otherProps,
  } = useFormControl({
    ...props,
    required,
  });

  return (
    <>
      <InputWrapper
        visibleElementRef={visibleElementRef}
        error={error}
        id={id}
        label={label}
        dir={dir}
        description={description}
        required={required}>
        <Textarea
          className={classes.input_wrapper}
          id={id}
          disabled={disabled}
          ref={ref}
          required={required}
          placeholder={
            placeholder ? trans(placeholder) + (required ? " *" : "") : ""
          }
          onChange={e => changeValue(e.target.value)}
          value={value}
          {...otherProps}
        />
      </InputWrapper>
    </>
  );
}

export const TextAreaInput: React.FC<BaseInputProps> = React.memo(
  React.forwardRef(_TextAreaInput),
);

TextAreaInput.defaultProps = {
  rules: [requiredRule],
  autosize: true,
};
