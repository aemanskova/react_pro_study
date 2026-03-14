import { Container, Stack, Title } from "@mantine/core";
import { RefWidget } from "@widgets/ref";

export function RefPage() {
  return (
    <Container size="lg" py="md">
      <Stack gap="md">
        <Stack gap={4}>
          <Title order={1}>Ref examples</Title>
        </Stack>
        <RefWidget />
      </Stack>
    </Container>
  );
}
