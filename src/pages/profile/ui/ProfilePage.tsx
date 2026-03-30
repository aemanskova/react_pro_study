import { ProfileInfo } from "@features/profile";
import { Card, Container } from "@mantine/core";
import { withProtection } from "@shared/lib";

export function ProfilePage() {
  return (
    <Container size="lg">
      <Card withBorder radius="md" p="xl">
        <ProfileInfo />
      </Card>
    </Container>
  );
}

export const ProtectedProfilePage = withProtection(ProfilePage);
