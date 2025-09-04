import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function CardUI({ name, description, logoSrc, badgeText, badgeColor }) {
  return (
    <Link to="/sandbox" className="block hover:scale-105 transition-transform duration-200">
      <Card shadow="sm" padding="lg" radius="md" withBorder className="h-full flex flex-col">
        <Card.Section>
          <Image
            src={logoSrc}
            height={160}
            alt={`${name} Logo`}
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{name}</Text>
          <Badge color={badgeColor}>{badgeText}</Badge>
        </Group>

        <Text size="sm" c="dimmed" className="flex-grow" ta="left">
          {description}
        </Text>

        <Button color="blue" fullWidth mt="md" radius="md">
          Take a challenge
        </Button>
      </Card>
    </Link>
  );
}