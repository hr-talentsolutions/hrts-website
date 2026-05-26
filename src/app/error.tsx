"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background text-center">
      <h2 className="text-3xl font-bold text-primary mb-4">Something went wrong!</h2>
      <p className="text-text-sub mb-8 max-w-md">
        The application encountered an unexpected error. This usually happens during cache refreshes.
      </p>
      <Button onClick={() => reset()} size="lg">
        Try again
      </Button>
    </div>
  );
}
