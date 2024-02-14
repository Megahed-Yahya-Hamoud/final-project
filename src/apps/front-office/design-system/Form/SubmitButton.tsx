import { ButtonProps, Button as PrimaryButton } from "@mantine/core";
import { useSubmitButton } from "@mongez/react-form";
import { vars } from "apps/front-office/design-system/layouts/theme";

export function SubmitButton({
  children,
  loading,
  disabled: incomingDisabled,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { isSubmitting, disabled } = useSubmitButton();

  return (
    <>
      <PrimaryButton
        style={{
          boxShadow: vars.shadows.md,
        }}
        type="submit"
        color="blue"
        {...props}
        loading={loading || isSubmitting}
        disabled={incomingDisabled || disabled || isSubmitting}>
        {children}
      </PrimaryButton>
    </>
  );
}
