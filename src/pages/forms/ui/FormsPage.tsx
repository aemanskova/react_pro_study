import { RegisterForm } from "@features/registerForm";
import { Card, Container } from "@mantine/core";

export function FormsPage() {
  return (
    <Container size="lg">
      <Card withBorder radius="md" p="xl">
        <RegisterForm />
      </Card>
    </Container>
  );
}
