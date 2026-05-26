import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background text-center">
      <h2 className="text-4xl font-bold text-primary mb-4">404</h2>
      <p className="text-xl font-medium text-primary/80 mb-4">Page Not Found</p>
      <p className="text-text-sub mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/">
        <Button size="lg">Return Home</Button>
      </Link>
    </div>
  );
}
