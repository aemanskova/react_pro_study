import { Button, Card, Container, Stack, Text, Title } from "@mantine/core";
import { NavLink } from "react-router";

export function NotFoundPage() {
  return (
    <Container size="lg" py="md">
      <Card withBorder radius="md" p="xl">
        <Stack gap="sm">
          <Title order={1}>Page not found</Title>
          <Text c="dimmed">The page you are looking for does not exist or has been moved.</Text>
          <Button component={NavLink} to="/" w="fit-content">
            Go home
          </Button>
        </Stack>
      </Card>
    </Container>
  );
}
