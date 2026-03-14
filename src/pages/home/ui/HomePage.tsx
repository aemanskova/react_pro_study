import { Card, Container, Text } from "@mantine/core";

export function HomePage() {
  return (
    <Container size="lg" py="md">
      <Card withBorder radius="md" p="xl">
        <Text fw={700} size="xl">
          Hello everyone:) This is an app with homeworks for the Sber University course React Pro
          Study
        </Text>
      </Card>
    </Container>
  );
}
