import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Case Study Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The case study you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 text-base font-medium bg-foreground text-background rounded-md hover:opacity-90 transition-smooth"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
