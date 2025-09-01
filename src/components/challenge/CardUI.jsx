import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import companyExampleLogo from '../../assets/company-example.png';

export default function CardUI({ onTakeChallenge }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={companyExampleLogo}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Company</Text>
        <Badge color="pink">Hiring</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        We are a tech company, and we’re hiring a developer whose drive and mindset matter more than past titles.
      </Text>

      <Button onClick={onTakeChallenge} color="blue" fullWidth mt="md" radius="md">
        Take a challenge
      </Button>
    </Card>
  );
}