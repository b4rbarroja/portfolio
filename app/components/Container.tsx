import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen mx-auto px-2 md:px-12 lg:px-20">{children}</div>
  );
}
