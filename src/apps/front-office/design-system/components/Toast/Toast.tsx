import { Divider, Flex, Title } from "@mantine/core";
import {
  NotificationData,
  Notifications,
  NotificationsProps,
  hideNotification,
  notifications,
  showNotification,
  updateNotification,
} from "@mantine/notifications";

import { trans } from "@mongez/localization";
import { Random } from "@mongez/reinforcements";
import { IconCheck, IconX } from "@tabler/icons-react";
import { toastAtom } from "design-system/components/Toast/atom/toast-atom";
import React from "react";

export function ToastContainer() {
  const position = toastAtom.use("position");

  return <Notifications position={position}></Notifications>;
}

export function toastSuccess(
  message: React.ReactNode,
  title: React.ReactNode = trans("success"),
  placement: NotificationsProps["position"] = "top-right",
) {
  toastAtom.change("position", placement);
  const id = Random.string(8);

  showNotification({
    id,
    title,
    message,
    color: "green",
    icon: <IconCheck />,
    loading: false,
    autoClose: true,
  });

  return {
    success: (
      message: React.ReactNode,
      title,
      notificationProps: Partial<any> = {
        color: "green",
        autoClose: 1500,
      },
    ) => {
      updateNotification({
        id,
        title: (
          <Flex direction="column" gap="1rem">
            <Title order={3} fz="0.9rem" fw={600} c="green.9">
              {title}
            </Title>
            <Divider />
          </Flex>
        ),
        message,
        ...notificationProps,
      });
    },
    warning: (
      message: React.ReactNode,
      title: React.ReactNode = trans("warning"),
      notificationProps: Partial<any> = {
        color: "yellow",
        autoClose: 1000,
      } as any,
    ) => {
      updateNotification({
        id,
        title,
        message,
        icon: <IconX size={16} />,
        ...notificationProps,
      });
    },
    update: (message: React.ReactNode, title: React.ReactNode) => {
      updateNotification({
        id,
        title,
        message,
        loading: true,
        autoClose: false,
        withCloseButton: true,
      });
    },
    close: () => {
      hideNotification(id);
    },
    error: (
      message: React.ReactNode,
      title: React.ReactNode = trans("error"),
      notificationProps: Partial<any> = {
        color: "red",
        autoClose: 1000,
      },
    ) => {
      updateNotification({
        id,
        title,
        message,
        icon: <IconX size={16} />,
        ...notificationProps,
      });
    },
  };
}

export function toastError(
  message: React.ReactNode,
  title: React.ReactNode = trans("error"),
  options: Partial<NotificationData> = {},
) {
  toastAtom.change("position", "top-right");
  const toastId = Random.string(8);
  notifications.show({
    message,
    title,
    color: "red",
    onClose: () => toastAtom.change("position", "top-right"),
    ...options,
  });

  return {
    close: () => {
      hideNotification(toastId);
    },
  };
}

export function toastLoading(
  message: React.ReactNode,
  title: React.ReactNode = trans("loading"),
  closeAfter = 1200,
) {
  const id = Random.string(8);
  showNotification({
    id,
    title,
    message,
    loading: true,
    autoClose: false,
    withCloseButton: true,
  });

  return {
    success: (
      message: React.ReactNode,
      title: React.ReactNode = trans("success"),
      notificationProps: Partial<any> = {
        color: "green",
        autoClose: closeAfter,
      },
    ) => {
      updateNotification({
        id,
        title,
        message,
        icon: <IconCheck size={16} />,
        ...notificationProps,
      });
    },
    warning: (
      message: React.ReactNode,
      title: React.ReactNode = trans("warning"),
      notificationProps: Partial<any> = {
        color: "yellow",
        autoClose: closeAfter,
      } as any,
    ) => {
      updateNotification({
        id,
        title,
        message,
        icon: <IconX size={16} />,
        ...notificationProps,
      });
    },
    update: (message: React.ReactNode, title: React.ReactNode) => {
      updateNotification({
        id,
        title,
        message,
        loading: true,
        autoClose: false,
        withCloseButton: true,
      });
    },
    close: () => {
      hideNotification(id);
    },
    error: (
      message: React.ReactNode,
      title: React.ReactNode = trans("error"),
      notificationProps: Partial<any> = {
        color: "red",
        autoClose: closeAfter,
      },
    ) => {
      updateNotification({
        id,
        title,
        message,
        icon: <IconX size={16} />,
        ...notificationProps,
      });
    },
  };
}
