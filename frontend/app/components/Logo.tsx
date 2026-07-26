interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src="/jabr2-cropped.png"
        alt="جبر"
        className="h-10 w-auto brightness-0"
      />
    </span>
  );
}
