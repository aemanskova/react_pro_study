import { Container, Stack, Title } from "@mantine/core";
import { TasksWidget } from "@widgets/tasks";

export function TaskPage() {
  return (
    <Container size="lg" py="md">
      <Stack gap="md">
        <Title order={1}>My tasks</Title>
        <TasksWidget />
      </Stack>
    </Container>
  );
}
