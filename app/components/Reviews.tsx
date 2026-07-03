import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const testimonials = [
  {
    quote:
      "Jabr is an amazing developer. He delivered exactly what we needed and more, highly recommended!",
    name: "Ahmed Salah",
    role: "CEO, Brandio",
    initials: "AS",
  },
  {
    quote:
      "Professional, fast, and very skilled. He understood the project perfectly and built a clean solution.",
    name: "Mona Mostafa",
    role: "Founder, Shopio",
    initials: "MM",
  },
  {
    quote:
      "Great communication and top-notch code quality. Will definitely work with him again.",
    name: "Omar Khaled",
    role: "Product Manager",
    initials: "OK",
  },
];

export default function Testimonials() {
  return (
    <section className={`px-6 md:px-16 py-16 ${outfit.className}`}>
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
          What Clients Say
        </h2>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#0d1420] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-white/20 hover:-translate-y-1 active:border-white/20 active:-translate-y-0.5"
            >
              {/* Quote mark */}
              <span className="text-blue-400 text-4xl font-bold leading-none">
                &ldquo;
              </span>

              {/* Quote text */}
              <p className="text-gray-300 text-sm leading-relaxed mt-2 mb-6">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-semibold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
