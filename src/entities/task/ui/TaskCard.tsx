import type { Task } from "@entities/task";
import { ActionIcon, Badge, Card, Group, Stack, Text, Tooltip } from "@mantine/core";

type Props = {
  task: Task;
  onRemove: (id: string) => void;
};

export function TaskCard({ task, onRemove }: Props) {
  return (
    <Card withBorder radius="md" p="md">
      <Stack gap={6}>
        <Group justify="space-between" align="flex-start">
          <Text fw={600} style={{ flex: 1 }} lineClamp={2}>
            {task.title}
          </Text>

          <Tooltip label="Delete">
            <ActionIcon
              variant="subtle"
              color="red"
              aria-label="Delete task"
              onClick={() => onRemove(String(task.id))}
            >
              🗑️
            </ActionIcon>
          </Tooltip>
        </Group>

        <Badge variant="light" color={task.completed ? "green" : "gray"}>
          {task.completed ? "Completed" : "Incomplete"}
        </Badge>
      </Stack>
    </Card>
  );
}
