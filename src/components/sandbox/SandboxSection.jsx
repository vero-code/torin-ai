import { Box, Title } from '@mantine/core';
import { Sandpack } from "@codesandbox/sandpack-react";
import {nightOwl} from "@codesandbox/sandpack-themes";

import indexJs from '../../challenges/index.js?raw';

export default function SandboxSection() {
  return (
    <Box py={50} px="md">
      <Title c="white" ta="center" mb="xl">The Challenge Sandbox</Title>
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
    </Box>
  );
}