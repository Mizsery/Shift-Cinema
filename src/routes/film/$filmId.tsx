import { createFileRoute } from '@tanstack/react-router';

import { Film } from '@/pages';
import { getFilmByIdQuery } from '@/utils/api/request';

export const Route = createFileRoute('/film/$filmId')({
  loader: ({ context: { queryClient }, params: { filmId } }) =>
    queryClient.ensureQueryData(getFilmByIdQuery(filmId)),
  component: () => <Film />
});
