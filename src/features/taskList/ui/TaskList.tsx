import { type Task, TaskCard } from "@entities/task";
import { SimpleGrid } from "@mantine/core";

type Props = {
  tasks: Task[];
  onRemove: (id: string) => void;
};

export function TaskList({ tasks, onRemove }: Props) {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onRemove={onRemove} />
      ))}
    </SimpleGrid>
  );
}
