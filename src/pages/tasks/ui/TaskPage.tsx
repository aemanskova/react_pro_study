import { Container, Stack, Title } from "@mantine/core";
import { withProtection } from "@shared/lib";
import { TasksWidget } from "@widgets/tasks";

function TaskPage() {
  return (
    <Container size="lg" py="md">
      <Stack gap="md">
        <Title order={1}>My tasks</Title>
        <TasksWidget />
      </Stack>
    </Container>
  );
}

export const ProtectedTaskPage = withProtection(TaskPage);
