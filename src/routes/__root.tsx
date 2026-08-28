import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});

// The app shell: playful background, sticky nav, and the page content.
function RootLayout() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden bg-cream text-ink">
      <BlobLayer />
      <NavBar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

// Soft floating colour blobs behind everything.
function BlobLayer() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -top-24 -left-20 size-[26rem] animate-blob bg-mango/25 blur-3xl" />
      <div className="absolute top-1/3 -right-24 size-[24rem] animate-blob bg-grape/20 blur-3xl [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/4 size-[22rem] animate-blob bg-mint/20 blur-3xl [animation-delay:-12s]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(28,26,41,0.07)_1px,transparent_0)] [background-size:22px_22px]" />
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <p className="font-display text-2xl font-semibold">This page does not exist.</p>
      <Link to="/" className="text-sm font-medium underline underline-offset-4">
        Go to the home page
      </Link>
    </div>
  );
}
