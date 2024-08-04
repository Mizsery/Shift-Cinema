import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/tickets')({
  component: () => <div>Hello /tickets!</div>,
});
