import { LoginForm } from "@features/auth";
import { Card, Container } from "@mantine/core";

export function LoginPage() {
  return (
    <Container size="lg">
      <Card withBorder radius="md" p="xl">
        <LoginForm />
      </Card>
    </Container>
  );
}
