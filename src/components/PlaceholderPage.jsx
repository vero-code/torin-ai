// src/components/PlaceholderPage.jsx
import { Title, Text as MantineText } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function PlaceholderPage({ title, theme = 'dark' }) {
  const titleColor = theme === 'dark' ? 'white' : 'dark';
  const textColor = theme === 'dark' ? 'dimmed' : 'gray.6';
  const linkColor = theme === 'dark' ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-500';

  return (
    <div className="text-center py-40 px-6">
      <Title order={2} c={titleColor}>
        {title}
      </Title>

      <MantineText mt="md" size="lg" c={textColor}>
        This feature is currently under development and will be available after the hackathon.
      </MantineText>

      <Link to="/" className={`mt-8 inline-block ${linkColor}`}>
        &larr; Go back to Home
      </Link>
    </div>
  );
}