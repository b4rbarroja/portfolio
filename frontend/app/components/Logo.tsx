interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src="/Wlogo.png"
        alt="Logo"
        className="h-48 w-auto"
      />
    </span>
  );
}
