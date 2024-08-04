import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/film/$filmId')({
  component: () => <div>Hello /film/$filmId!</div>,
});
