import { queryOptions } from '@tanstack/react-query';

import { api } from '../../instance';

interface GetFilmsTodayResponse {
  success: boolean;
  films: Film[];
}

const getFilmsToday = (requestConfig?: AxiosRequestConfig) =>
  api.get<GetFilmsTodayResponse>('/cinema/today', requestConfig?.config).then((res) => res.data);

export const getFilmsTodayQuery = queryOptions({
  queryKey: ['getCinemaToday'],
  queryFn: () => getFilmsToday()
});
