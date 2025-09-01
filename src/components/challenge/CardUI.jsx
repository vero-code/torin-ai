import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import companyExampleLogo from '../../assets/company-example.png';
import { Link } from 'react-router-dom';

export default function CardUI() {
  return (
    <Link to="/sandbox" className="block hover:scale-105 transition-transform duration-200">
      <Card shadow="sm" padding="lg" radius="md" withBorder className="h-full">
        <Card.Section>
          <Image
            src={companyExampleLogo}
            height={160}
            alt="Company Logo"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Norway Fjord Company</Text>
          <Badge color="pink">Hiring</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          We are a tech company, and we’re hiring a developer whose drive and mindset matter more than past titles.
        </Text>

        <Button color="blue" fullWidth mt="md" radius="md">
          Take a challenge
        </Button>
      </Card>
    </Link>
  );
}