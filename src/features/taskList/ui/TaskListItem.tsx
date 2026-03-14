import { type Task, TaskCard } from "@entities/task";
import { Card, Flex } from "@mantine/core";
import { RemoveButton } from "@shared/ui";
import { memo, useCallback } from "react";

type Props = {
  task: Task;
  onRemove: (id: number) => void;
};

export const TaskListItem = memo(function TaskListItem({ task, onRemove }: Props) {
  const handleRemove = useCallback(() => {
    onRemove(task.id);
  }, [onRemove, task.id]);

  return (
    <Card withBorder radius="md" p="md">
      <Flex direction="row" justify="space-between">
        <TaskCard task={task} />
        <RemoveButton onRemove={handleRemove} />
      </Flex>
    </Card>
  );
});
