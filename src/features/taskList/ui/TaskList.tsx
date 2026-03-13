import { type Task } from "@entities/task";
import { TaskListItem } from "@features/taskList/ui/TaskListItem.tsx";
import { Center, Loader, SimpleGrid, Stack, Text } from "@mantine/core";

type Props = {
  tasks: Task[];
  onRemove: (id: number) => void;
  isLoading: boolean;
};

export function TaskList({ tasks, isLoading, onRemove }: Props) {
  if (isLoading) {
    return (
      <Center py="xl">
        <Loader />
      </Center>
    );
  }

  if (tasks.length === 0) {
    return (
      <Center py="xl">
        <Stack gap={4} align="center">
          <Text fw={500}>No tasks yet</Text>
        </Stack>
      </Center>
    );
  }

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
      {tasks.map((task) => (
        <TaskListItem key={task.id} task={task} onRemove={onRemove} />
      ))}
    </SimpleGrid>
  );
}
