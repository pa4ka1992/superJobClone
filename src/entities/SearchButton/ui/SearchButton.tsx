import { ActionIcon, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { FC } from 'react';
import { useMatchBreakPoints } from 'shared';

export const SearchButton: FC<{ isFetching: boolean }> = ({ isFetching }) => {
  const { isMatches } = useMatchBreakPoints('sm');

  if (isMatches) {
    return (
      <Button h="30px" data-elem="search-button" disabled={!!isFetching} type="submit" size="xs">
        Поиск
      </Button>
    );
  }

  return (
    <ActionIcon data-elem="search-button" c="whites.5" disabled={!!isFetching}>
      <IconSearch size="20px" stroke={2} />
    </ActionIcon>
  );
};
