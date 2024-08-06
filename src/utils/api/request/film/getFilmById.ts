import { queryOptions } from '@tanstack/react-query';

import { api } from '../../instance';

interface GetFilmById {
  filmId: string;
}

type GetFilmIdConfig = AxiosRequestConfig<GetFilmById>;

interface GetFilmByIdResponse {
  success: boolean;
  film: Film;
}

const getFilmById = ({ params: { filmId }, config }: GetFilmIdConfig) =>
  api.get<GetFilmByIdResponse>(`/cinema/film/${filmId}`, config).then((res) => res.data);

export const getFilmByIdQuery = (filmId: string) =>
  queryOptions({
    queryKey: ['getFilmById', { filmId }],
    queryFn: () => getFilmById({ params: { filmId } })
  });
