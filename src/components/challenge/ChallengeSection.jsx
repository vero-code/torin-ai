import { Box, Title, SimpleGrid } from '@mantine/core';
import CardUI from "./CardUI.jsx";

export default function ChallengeSection({ onTakeChallenge }) {
  return (
    <Box ta="center" py={100}>
      <Title c="white" mb="xl">Here you will find your challenge</Title>

      <Box maw={1200} mx="auto" px="md">
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
          <CardUI onTakeChallenge={onTakeChallenge} />
          <CardUI onTakeChallenge={onTakeChallenge} />
          <CardUI onTakeChallenge={onTakeChallenge} />
          <CardUI onTakeChallenge={onTakeChallenge} />
          <CardUI onTakeChallenge={onTakeChallenge} />
        </SimpleGrid>
      </Box>
    </Box>
  );
}