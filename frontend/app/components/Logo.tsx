interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`logo-font text-3xl font-bold tracking-tight ${className}`}>
      جبر
    </span>
  );
}
