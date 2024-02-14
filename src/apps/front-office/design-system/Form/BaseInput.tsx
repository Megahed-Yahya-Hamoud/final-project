import { Loader, TextInput, Tooltip, useMantineTheme } from "@mantine/core";
import { trans } from "@mongez/localization";
import { useFormControl } from "@mongez/react-form";
import { IconAlertCircle, IconHelp } from "@tabler/icons-react";
import { currentDirection } from "app/utils/helpers";
import { vars } from "apps/front-office/design-system/layouts/theme";
import { BaseInputProps } from "apps/front-office/design-system/types/form-types";
import React from "react";
import classes from "./style.module.scss";

function _BaseInput(
  {
    dir,
    component: Component = TextInput,
    loading,
    description,
    placeholder,
    hint,
    tooltip,
    label,
    handleValueChange = e => e.target.value,
    ...props
  }: BaseInputProps,
  ref: any,
) {
  const {
    value,
    changeValue,
    visibleElementRef,
    inputRef,
    error,
    id,
    disabled,
    otherProps,
  } = useFormControl(props);

  let rightSection: React.ReactNode = null;

  const theme = useMantineTheme();

  if (error) {
    rightSection = (
      <Tooltip label={error} position="top-end" withArrow>
        <div>
          <IconAlertCircle
            size={18}
            style={{
              color: theme.colors.red[8],
              display: "block",
              opacity: 0.9,
            }}
          />
        </div>
      </Tooltip>
    );
  } else if (loading) {
    rightSection = <Loader size={18} color="gray" />;
  }

  let inputDescription = description || hint;

  if (hint) {
    inputDescription = (
      <>
        {description || trans("moonlight.didYouKnow")}
        <Tooltip multiline label={hint}>
          <span
            style={{
              verticalAlign: "middle",
              marginInlineStart: "0.2rem",
              display: "inline-block",
            }}>
            <IconHelp size="1.0rem" />
          </span>
        </Tooltip>
      </>
    );
  }

  const ContentWrapper: any = tooltip ? Tooltip : React.Fragment;

  const contentProps = tooltip ? { label: tooltip } : {};

  return (
    <ContentWrapper {...contentProps}>
      <>
        <Component
          dir={dir}
          id={id}
          className={classes.input_wrapper}
          wrapperProps={{
            ref: visibleElementRef,
            description: inputDescription,
            withAsterisk: props.required,
            dir: dir,
            error,
            styles: () => ({
              root: {
                position: "relative",
              },
              placeholder: {
                marginBottom: inputDescription ? undefined : theme.spacing.xs,
              },
              label: {
                cursor: "pointer",
                marginBottom: inputDescription ? undefined : vars.spacing.xs,
              },
              description: {
                marginBottom: inputDescription ? vars.spacing.xs : undefined,
              },
              error: {
                fontWeight: "bold",
                margin: "5px 0",
              },
            }),
          }}
          label={label}
          error={error}
          ref={input => {
            inputRef.current = input;

            if (typeof ref === "function") {
              ref(input);
            } else if (ref) {
              ref.current = input;
            }
          }}
          readOnly={loading}
          disabled={disabled}
          rightSection={rightSection}
          styles={() => ({
            input: {
              textAlign: currentDirection() === "ltr" ? "ltr" : "rtl",
            },
          })}
          placeholder={
            placeholder ? trans(placeholder) + (props.required ? " *" : "") : ""
          }
          onChange={e => changeValue(handleValueChange(e))}
          value={value}
          {...otherProps}
        />
      </>
    </ContentWrapper>
  );
}

export const BaseInput = React.memo(React.forwardRef(_BaseInput));
