import { MantineProvider } from "@mantine/core";
import type { ComponentType } from "react";

export const withStyles = (WrappedComponent: ComponentType) => () => (
  <MantineProvider>
    <WrappedComponent />
  </MantineProvider>
);
