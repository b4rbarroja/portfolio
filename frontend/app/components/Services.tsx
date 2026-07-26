"use client";
import { Code2, Smartphone, ShoppingCart, Palette } from "lucide-react";
import Container from "./Container";

const services = [
  {
    icon: Code2,
    title: "تطوير الويب",
    description:
      "أبني مواقع وتطبيقات ويب سريعة ومستجابة باستخدام أحدث التقنيات.",
  },
  {
    icon: Smartphone,
    title: "تصميم متجاوب",
    description:
      "تصاميم عصرية وتجربة مستخدم مثالية على جميع الأجهزة.",
  },
  {
    icon: ShoppingCart,
    title: "حلول التجارة الإلكترونية",
    description:
      "متاجر إلكترونية متكاملة تساعدك على تحويل الزوار إلى عملاء.",
  },
  {
    icon: Palette,
    title: "تصميم واجهات وتجربة مستخدم",
    description:
      "واجهات نظيفة وبديهية تركز على احتياجات المستخدم وتحقق أهدافك.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className={`flex flex-col justify-center items-center py-16 sm:py-20 lg:py-24`}
    >
      <Container>
        <div className="flex justify-center items-center flex-col text-center mb-12 w-full max-w-3xl">
          <span className="text-black/30 text-lg mb-2">+</span>
          <h2 className="section-title text-2xl md:text-3xl text-black mb-4" >
            ما أقدمه
          </h2>
          <div className="w-full border-t border-dashed border-black/10" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 w-full max-w-6xl border-t border-r border-black/10">
        {services.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="border-l border-b border-black/10 p-8 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:bg-black/[0.02] bg-white"
          >
            <div className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-black" strokeWidth={1.5} />
            </div>
            <h3 className="text-black font-semibold text-base" >{title}</h3>
            <p className="text-black/50 text-sm leading-relaxed" >
              {description}
            </p>
          </div>
        ))}
      </div>
      </Container>
    </section>
  );
}
