import { AlertCircle } from "lucide-react";

export function DevelopmentBanner() {
  return (
    <div className="bg-amber-50 border-b border-amber-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-2 text-amber-900">
        <AlertCircle className="w-5 h-5 flex-shrink-0" />
        <p className="text-sm">
          This site is currently in development. Features and pricing are subject to change.
        </p>
      </div>
    </div>
  );
}
