import { Input, LoadingOverlay, Tooltip } from "@mantine/core";
import { trans } from "@mongez/localization";
import { IconHelp } from "@tabler/icons-react";
import React from "react";

export function InputWrapper({
  visibleElementRef,
  error,
  id,
  label,
  dir,
  loading,
  hint,
  description,
  required,
  children,
  labelProps,
  tooltip,
}: any) {
  let inputDescription = description || hint;

  if (hint && !description) {
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
    <Input.Wrapper
      ref={visibleElementRef}
      error={error}
      id={id}
      label={label}
      dir={dir}
      description={inputDescription}
      styles={theme => ({
        root: {
          position: "relative",
        },
        label: {
          marginBottom: !inputDescription ? theme.spacing.xs : undefined,
          cursor: "pointer",
        },
        description: {
          marginBottom: inputDescription ? theme.spacing.xs : undefined,
        },
        error: {
          fontWeight: "bold",
          margin: "5px 0",
        },
      })}
      withAsterisk={required}
      labelProps={labelProps}>
      <LoadingOverlay visible={loading} />

      <ContentWrapper {...contentProps}>
        <div>{children}</div>
      </ContentWrapper>
    </Input.Wrapper>
  );
}
