import type { RegisterFormValues } from "@features/registerForm/model";
import { Button, Flex, Group, Stack, Text, TextInput } from "@mantine/core";
import { RemoveButton } from "@shared/ui";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";

export function SocialLinks() {
  const { control } = useFormContext<RegisterFormValues>();
  const {
    append,
    fields: socialLinks,
    remove
  } = useFieldArray({
    control,
    name: "socialLinks"
  });

  const addLink = () => {
    append({ value: "" });
  };

  return (
    <Stack gap="sm">
      <Group justify="space-between" align="flex-start">
        <Stack gap={2}>
          <Text fw={600}>Social links</Text>
          <Text c="dimmed" size="sm">
            Add any number of profile links such as GitHub, GitVerse, or social media.
          </Text>
        </Stack>
        <Button variant="light" onClick={addLink}>
          Add link
        </Button>
      </Group>

      <Stack gap="sm">
        {socialLinks.map((field, index) => (
          <Flex key={field.id} align="flex-start" gap="sm">
            <Controller
              name={`socialLinks.${index}.value`}
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextInput
                  label={`Profile link ${index + 1}`}
                  placeholder="https://github.com/username"
                  error={error?.message}
                  style={{ flex: 1 }}
                  {...field}
                />
              )}
            />
            <RemoveButton disabled={socialLinks.length === 1} onRemove={() => remove(index)} />
          </Flex>
        ))}
      </Stack>
    </Stack>
  );
}
