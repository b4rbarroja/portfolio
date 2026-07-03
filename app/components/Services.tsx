"use client";

import { Outfit } from "next/font/google";
import { Code2, Smartphone, ShoppingCart, Palette } from "lucide-react";

const outfit = Outfit({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Build responsive and dynamic websites using the latest web technologies.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Pixel-perfect layouts that look and work great on any screen size.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description:
      "Custom online stores built to convert visitors into paying customers.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Clean, intuitive interfaces designed around your users' needs.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className={`flex flex-col justify-center items-center py-16 px-6 md:px-12 lg:px-20 ${outfit.className}`}
    >
      <div className="flex justify-center items-center flex-col text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          What I Do
        </h2>
        <p className="text-gray-400 mt-3 max-w-md">
          I help businesses and individuals turn their ideas into reality
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {services.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-6 rounded-2xl flex flex-col items-start gap-4 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1 active:bg-white/[0.06] active:border-white/20 active:-translate-y-0.5"
          >
            <div className="bg-gradient-to-r from-blue-600 to-cyan-400 p-3 rounded-xl">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-medium text-lg">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
