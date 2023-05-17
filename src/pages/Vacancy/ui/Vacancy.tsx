import { Container } from '@mantine/core';
import { FC } from 'react';
import { VacancyView } from 'widgets';

export const Vacancy: FC = () => {
  return (
    <Container size="lg" pos="relative" h="100%">
      <VacancyView />
    </Container>
  );
};
