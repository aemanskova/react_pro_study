import { Container, Stack, Title } from "@mantine/core";
import { TasksWidget } from "@widgets/tasks";

export function TaskPage() {
  return (
    <Container size="md" py="md">
      <Stack gap="md">
        <Title order={1}>My tasks</Title>
        <TasksWidget />
      </Stack>
    </Container>
  );
}
