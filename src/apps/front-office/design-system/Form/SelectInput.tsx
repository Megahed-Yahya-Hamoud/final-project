import { Loader, Select, SelectProps } from "@mantine/core";
import { trans } from "@mongez/localization";
import {
  FormControlProps,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";
import { useOnce } from "@mongez/react-hooks";
import { InputWrapper } from "apps/front-office/design-system/Form/InputWrapper";
import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import parseError from "../../utils/parse-error";
import { toastError } from "../components/Toast/Toast";

export type SelectInputProps = SelectProps &
  FormControlProps & {
    labelKey: string;
    valueKey: string;
    responseKey: string; // New prop for dynamic key
    request?: () => Promise<AxiosResponse>;
    dynamicRequest?: () => Promise<AxiosResponse>;
  };

function _SelectInput(
  {
    dir,
    label,
    request,
    required,
    placeholder,
    description,
    labelKey,
    valueKey,
    responseKey,
    dynamicRequest,
    ...props
  }: SelectInputProps,
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

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useOnce(() => {
    if (!request) return;

    setLoading(true);

    request()
      .then(response => {
        const responseData =
          response.data && response.data[responseKey]
            ? response.data[responseKey]
            : [];
        setData(responseData);
      })
      .catch(error => {
        toastError(parseError(error));
      })
      .finally(() => {
        setLoading(false);
      });
  });

  useEffect(() => {
    if (!dynamicRequest) return;

    setLoading(true);

    dynamicRequest()
      .then(response => {
        const responseData =
          response.data && response.data[responseKey]
            ? response.data[responseKey]
            : [];
        setData(responseData);
      })
      .catch(error => {
        toastError(parseError(error));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [responseKey, dynamicRequest]);

  return (
    <InputWrapper
      visibleElementRef={visibleElementRef}
      error={error}
      id={id}
      dir={dir}
      description={description}
      required={required}>
      <Select
        id={id}
        disabled={disabled}
        ref={ref}
        searchable
        required={required}
        placeholder={
          placeholder ? trans(placeholder) + (required ? " *" : "") : ""
        }
        radius={0}
        label={label}
        data={data.map(item => ({
          label: item[labelKey],
          value: String(item[valueKey]),
        }))}
        rightSection={loading ? <Loader size="xs" /> : null}
        value={value ? String(value) : null}
        onChange={changeValue}
        {...otherProps}
      />
    </InputWrapper>
  );
}

export const SelectInput: React.FC<SelectInputProps> = React.memo(
  React.forwardRef(_SelectInput),
);

SelectInput.defaultProps = {
  rules: [requiredRule],
  autosize: true,
};
