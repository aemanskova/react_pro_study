import { ActionIcon, Tooltip } from "@mantine/core";
import { memo } from "react";

type Props = {
  onRemove: VoidFunction;
};

export const RemoveButton = memo(function RemoveButton({ onRemove }: Props) {
  return (
    <Tooltip label="Delete">
      <ActionIcon
        variant="subtle"
        color="red"
        aria-label="Delete task"
        onClick={onRemove}
        pos="absolute"
        top={12}
        right={12}
      >
        🗑️
      </ActionIcon>
    </Tooltip>
  );
});
