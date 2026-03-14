import {
  ClickTimer,
  DebouncedLogger,
  FocusTracker,
  PreviousInput,
  WebSocketLogger
} from "@features/refExamples";
import { Paper, Stack } from "@mantine/core";
import { FilterSegmented } from "@shared/ui";
import { REF_TAB_OPTIONS, type RefTab } from "@widgets/ref/model/constants.ts";
import type { ReactNode } from "react";
import { useState } from "react";

const TAB_CONTENT: Record<RefTab, ReactNode> = {
  clickTimer: <ClickTimer />,
  previousInput: <PreviousInput />,
  focusTracker: <FocusTracker />,
  debouncedLogger: <DebouncedLogger />,
  webSocketLogger: <WebSocketLogger />
};

export function RefWidget() {
  const [tab, setTab] = useState<RefTab>("clickTimer");

  return (
    <Paper withBorder radius="md" p="md">
      <Stack gap="sm">
        <FilterSegmented items={REF_TAB_OPTIONS} value={tab} onChange={setTab} />
        {TAB_CONTENT[tab]}
      </Stack>
    </Paper>
  );
}
