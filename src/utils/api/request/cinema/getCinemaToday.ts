import { api } from '../../instance';

export interface GetCinemaTodayResponse {
  success: boolean;
  films: Film[];
}

export const getCinemaToday = async (requestConfig?: AxiosRequestConfig) => {
  return api.get<GetCinemaTodayResponse>('/cinema/today', requestConfig?.config);
};
