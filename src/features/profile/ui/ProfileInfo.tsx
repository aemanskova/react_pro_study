import { Avatar, Group, Skeleton, Stack, Text } from "@mantine/core";
import { useGetUsersMeQuery } from "@shared/api/auth";

export function ProfileInfo() {
  const { data, isLoading } = useGetUsersMeQuery();

  if (isLoading) {
    return (
      <Group wrap="nowrap">
        <Skeleton height={48} circle />
        <Stack gap={8} style={{ flex: 1 }}>
          <Skeleton height={18} width="60%" />
          <Skeleton height={14} width="40%" />
        </Stack>
      </Group>
    );
  }

  return (
    <Group wrap="nowrap">
      <Avatar size="md" radius="xl" color="blue">
        {data?.name?.[0] || data?.email?.[0] || "U"}
      </Avatar>
      <Stack gap={4}>
        <Group gap={4}>
          <Text fw={500}>{data?.name || "---"}</Text>
        </Group>
        <Group gap={4}>
          <Text size="sm" c="dimmed">
            {data?.email || "---"}
          </Text>
        </Group>
      </Stack>
    </Group>
  );
}
