import { ActionIcon, Tooltip } from "@mantine/core";
import { memo } from "react";

type Props = {
  onRemove: VoidFunction;
  disabled?: boolean;
};

export const RemoveButton = memo(function RemoveButton({ onRemove, disabled = false }: Props) {
  return (
    <Tooltip label="Delete">
      <ActionIcon
        disabled={disabled}
        variant="subtle"
        color="red"
        aria-label="Delete task"
        onClick={onRemove}
      >
        🗑️
      </ActionIcon>
    </Tooltip>
  );
});
