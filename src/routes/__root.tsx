import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { Container, Header } from '@/components/layout';

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Container component='main' style={{ marginTop: '48px' }}>
        <Outlet />
      </Container>
      <TanStackRouterDevtools position='bottom-right' />
    </>
  )
});
