import type { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { Container, Header } from '@/components/layout';

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: () => (
    <>
      <Header />
      <Container component='main'>
        <Outlet />
      </Container>
      <ReactQueryDevtools buttonPosition='top-right' />
      <TanStackRouterDevtools position='bottom-right' />
    </>
  ),
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
        <Link to='/'>Start Over</Link>
      </div>
    );
  }
});
