import type { Task } from "@entities/task";
import { Badge, Card, Stack, Text } from "@mantine/core";
import { memo } from "react";

type Props = {
  task: Task;
};

export const TaskCard = memo(function TaskCard({ task }: Props) {
  return (
    <Card withBorder radius="md" p="md">
      <Stack gap={6}>
        <Badge variant="light" color={task.completed ? "green" : "gray"}>
          {task.completed ? "Completed" : "Incomplete"}
        </Badge>
        <Text fw={600} style={{ flex: 1 }} lineClamp={2}>
          {task.title}
        </Text>
      </Stack>
    </Card>
  );
});
