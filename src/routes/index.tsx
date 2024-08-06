import { createFileRoute } from '@tanstack/react-router';

import { Home } from '@/pages';
import { getFilmsTodayQuery } from '@/utils/api/request';

export const Route = createFileRoute('/')({
  loader: ({ context: { queryClient } }) => queryClient.ensureQueryData(getFilmsTodayQuery),
  component: () => {
    return <Home />;
  }
});
