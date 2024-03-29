import { FC } from 'react';
import { Stack, Group, Button, Title, MediaQuery } from '@mantine/core';
import { ResetFilter } from 'entities';
import { CategoryFilter, PaymentFilter } from 'features';
import { DisclosureProps, useAppActions, useMatchBreakPoints } from 'shared';

export const Filters: FC<{ isFetching: boolean; context?: DisclosureProps }> = ({ isFetching, context }) => {
  const { isMatches } = useMatchBreakPoints('sm');

  const { setRequestParams } = useAppActions();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isFetching) {
      return;
    }

    setRequestParams();

    if (context) {
      context.handlers.close();
    }
  };

  return (
    <Stack spacing="md" m="1px">
      <Group mb={{ lg: '12px', md: '12px' }} noWrap align="center" position="apart">
        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <Title order={3}>Фильтры</Title>
        </MediaQuery>

        <ResetFilter />
      </Group>

      <form onSubmit={handleSubmit}>
        <Stack spacing="md">
          <CategoryFilter />

          <PaymentFilter isFetching={isFetching} />

          <Button size={isMatches ? 'md' : 'xs'} disabled={!!isFetching} data-elem="search-button" type="submit">
            Применить
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};
