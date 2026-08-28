import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FDF6EC]">
      <p className="text-2xl font-semibold text-[#1C1A29]">Portfolio landing page</p>
    </div>
  );
}
