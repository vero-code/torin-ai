import { Box, Title, SimpleGrid } from '@mantine/core';
import CardUI from "./CardUI.jsx";
import {companiesData} from "../../data/companiesData.js";

export default function ChallengeSection() {
  return (
    <Box ta="center" py={100}>
      <Title c="white" mb="xl">Find Your Challenge</Title>

      <Box maw={1200} mx="auto" px="md">
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
          {companiesData.map((company) => (
            <CardUI
              key={company.id}
              name={company.name}
              description={company.description}
              logoSrc={company.logoSrc}
              badgeText={company.badgeText}
              badgeColor={company.badgeColor}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}