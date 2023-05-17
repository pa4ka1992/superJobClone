import { FC } from 'react';
import { Container, Loader } from '@mantine/core';
import { useAppSelector, useSearchVacanciesQuery } from 'shared';
import { VacanciesOverview } from 'widgets';

export const Favorites: FC = () => {
  const { favorites } = useAppSelector((state) => state.favoritesReducer);

  // vacancies/?ids=ID[] query should reply with array of single vacancies,
  // but seems it doesn't work. So I'am using cash from main page, but I don't like that

  const { filteredFavorites, isFetching } = useSearchVacanciesQuery(
    { keyword: '', catalogues: '', payment_to: '', payment_from: '' },
    {
      skip: !favorites.length,
      selectFromResult: ({ data, isFetching, isLoading, isError }) => {
        const filteredFavorites = data?.filter((vacancy) => favorites.includes(vacancy.id));

        return { filteredFavorites, isFetching, isLoading, isError };
      }
    }
  );

  return (
    <Container size="lg" h="100%" pos="relative">
      {isFetching ? <Loader /> : <VacanciesOverview vacancies={filteredFavorites} isFetching={isFetching} />}
    </Container>
  );
};
