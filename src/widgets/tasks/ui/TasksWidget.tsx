import { TaskList, useTasks } from "@features/taskList";
import { Paper, Stack } from "@mantine/core";
import { FilterSegmented } from "@shared/ui";
import { TASK_FILTER_OPTIONS } from "@widgets/tasks/model/constants";

export function TasksWidget() {
  const { filteredTasks, removeTask, filter, setFilter, isLoading } = useTasks();

  return (
    <Paper withBorder radius="md" p="md">
      <Stack gap="sm">
        <FilterSegmented items={TASK_FILTER_OPTIONS} value={filter} onChange={setFilter} />
        <TaskList tasks={filteredTasks} onRemove={removeTask} isLoading={isLoading} />
      </Stack>
    </Paper>
  );
}
