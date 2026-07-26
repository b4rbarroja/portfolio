"use client";
import { Code2, Smartphone, ShoppingCart, Palette } from "lucide-react";
import Container from "./Container";
import { Reveal, StaggerReveal } from "./Reveal";
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
        <Reveal>
          <div className="flex justify-center items-center flex-col text-center mb-14 w-full max-w-3xl">
            <span className="text-black/30 text-2xl mb-2">+</span>
            <h2 className="text-6xl font-bold text-black mb-4" >
              ما أقدمه
            </h2>
            <div className="w-full border-t border-dashed border-black/10" />
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 w-full max-w-6xl border-t border-r border-black/10">
          {services.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 100}>
              <div className="border-l border-b border-black/10 p-8 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:bg-black/[0.02] bg-white">
                <div className="w-20 h-20 rounded-full border border-black/10 flex items-center justify-center">
                  <Icon className="w-9 h-9 text-black" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-semibold text-black" >{title}</h3>
                <p className="text-black/50 text-xl leading-relaxed" >
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
