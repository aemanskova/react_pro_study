export const REF_TAB_OPTIONS = [
  { label: "ClickTimer", value: "clickTimer" },
  { label: "PreviousInput.tsx", value: "previousInput" },
  { label: "FocusTracker", value: "focusTracker" },
  { label: "DebouncedLogger", value: "debouncedLogger" },
  { label: "WebSocketLogger", value: "webSocketLogger" }
];

export type RefTab = (typeof REF_TAB_OPTIONS)[number]["value"];
