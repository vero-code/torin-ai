import { Box, Title, SimpleGrid } from '@mantine/core';
import CardUI from "./CardUI.jsx";

export default function ChallengeSection() {
  return (
    <Box ta="center" py={100}>
      <Title c="white" mb="xl">Here you will find your challenge</Title>

      <Box maw={1200} mx="auto" px="md">
        <SimpleGrid cols={3}>
          <CardUI />
          <CardUI />
          <CardUI />
          <CardUI />
          <CardUI />
          <CardUI />
        </SimpleGrid>
      </Box>
    </Box>
  );
}