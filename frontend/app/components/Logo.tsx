import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/cropped2.png"
      alt="Logo"
      width={417}
      height={297}
      className={`h-14 md:h-14 w-auto ${className}`}
      priority
    />
  );
}
