import { queryOptions } from '@tanstack/react-query';

import { api } from '../../instance';

interface GetFilmSchedule {
  filmId: string;
}

type GetFilmScheduleConfig = AxiosRequestConfig<GetFilmSchedule>;

interface GetFilmScheduleResponse {
  success: boolean;
  schedules: FilmSchedule[];
}

const getFilmSchedule = ({ params: { filmId }, config }: GetFilmScheduleConfig) =>
  api
    .get<GetFilmScheduleResponse>(`/cinema/film/${filmId}/schedule`, config)
    .then((res) => res.data);

export const getFilmScheduleQuery = (filmId: string) =>
  queryOptions({
    queryKey: ['getFilmSchedule', { filmId }],
    queryFn: () => getFilmSchedule({ params: { filmId } })
  });
