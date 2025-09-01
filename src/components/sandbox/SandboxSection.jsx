import { Box, Title, Grid, Paper, Text as MantineText } from '@mantine/core';
import { Sandpack } from "@codesandbox/sandpack-react";
import {nightOwl} from "@codesandbox/sandpack-themes";
import ReactMarkdown from 'react-markdown';

import taskDescription from '../../challenges/task.md?raw';
import indexJs from '../../challenges/index.js?raw';

export default function SandboxSection() {
  return (
    <Box py={50} px="md">
      <Title c="white" ta="center" mb="xl">The Challenge Sandbox</Title>

      <Grid maw={1400} mx="auto">
        <Grid.Col span={{ base: 12, lg: 4 }}>
          <Paper withBorder p="xl" radius="md">
            <ReactMarkdown>{taskDescription}</ReactMarkdown>
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 8 }}>
          <Sandpack
            template="vanilla"
            theme={nightOwl}
            files={{
              '/index.js': { code: indexJs, active: true },
            }}
            options={{
              showNavigator: true,
              showTabs: true,
              closableTabs: true,
              autorun: false,
              autoReload: false,
            }}
          />
        </Grid.Col>
      </Grid>
    </Box>
  );
}