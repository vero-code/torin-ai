import { useForm } from '@mantine/form';
import {
  TextInput,
  Textarea,
  MultiSelect,
  Button,
  Box,
  Group,
  Text,
} from '@mantine/core';
import {technologiesData} from "../../data/technologiesData.js";

export default function FormSection() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      firstName: '',
      about: '',
      technologies: [],
    },

    validate: {
      firstName: (value) => (value.length < 2 ? 'The name must contain at least 2 letters' : null),
      about: (value) => (value.length < 10 ? 'Tell us a little more about yourself' : null),
      technologies: (value) => (value.length === 0 ? 'Please select at least one technology' : null),
    },
  });

  return (
    <Box maw={440} mx="auto" mt="xl">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          label="Your name"
          placeholder="How should we address you?"
          {...form.getInputProps('firstName')}
        />

        <Textarea
          label="About myself as a specialist"
          placeholder="Tell only what you think is necessary."
          mt="md"
          minRows={4}
          {...form.getInputProps('about')}
        />

        <MultiSelect
          label="Familiar technologies"
          placeholder="Select from the list"
          data={technologiesData}
          mt="md"
          searchable
          nothingFoundMessage="Nothing found..."
          {...form.getInputProps('technologies')}
        />

        <Text c="dimmed" size="xs" mt="md" ta="center">
          Try to be honest and it will come back to you.<br />
          This list will help us avoid giving you tasks on topics in which you are already an expert.
        </Text>

        <Group justify="center" mt="xl">
          <Button type="submit" size="md">
            Find my challenge
          </Button>
        </Group>
      </form>
    </Box>
  );
}