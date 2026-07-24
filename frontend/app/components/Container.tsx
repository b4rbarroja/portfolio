import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
      {children}
    </div>
  );
}
