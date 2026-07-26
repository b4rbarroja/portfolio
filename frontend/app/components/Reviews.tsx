"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "./Container";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "جابر مطور رائع، ساعدنا في تحويل فكرتنا إلى منتج حقيقي. التواصل والاحترافية وجودة الكود فاقت توقعاتنا.",
    name: "أحمد صلاح",
    role: "الرئيس التنفيذي - EcomZone",
    initials: "AS",
  },
  {
    quote:
      "فهم متطلبات المشروع بدقة وسلّم في الوقت المحدد. الكود نظيف وسهل التوسعة، وسأعمل معه مرة أخرى بالتأكيد.",
    name: "محمد مصطفى",
    role: "المؤسس - TaskFlow",
    initials: "MM",
  },
  {
    quote:
      "تجربة ممتازة من البداية للنهاية، كان متجاوباً ومتمكناً تقنياً. أنصح بالتعامل معه لأي مشروع بدون تردد.",
    name: "عمر خالد",
    role: "مدير المنتج - StudyHub",
    initials: "OK",
  },
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      className={`py-16 sm:py-20 lg:py-24`}
    >
      <Container>
        <Reveal>
          <div className="flex flex-col items-center text-center mb-12 gap-2">
            <span className="text-black/30 text-lg">✦</span>
            <h2 className="text-5xl font-bold text-black" >
              ما يقوله العملاء
            </h2>
            <p className="text-black/50" >آراء العملاء الذين عملت معهم</p>
          </div>
        </Reveal>

        <div className="relative flex items-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            className="hidden sm:flex flex-shrink-0 w-11 h-11 items-center justify-center rounded-full border border-black/10 text-black transition hover:bg-black hover:text-white active:bg-black active:text-white"
            aria-label="السابق"
          >
            <ArrowLeft size={18} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
            {testimonials.map((t, index) => (
              <Reveal key={t.name} delay={index * 100}>
                <div className="rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 hover:border-black/20 hover:-translate-y-1 active:border-black/20 active:-translate-y-0.5">
                  <span className="text-black/20 text-4xl font-bold leading-none">
                    &rdquo;
                  </span>
                  <p className="text-black/70 text-sm leading-relaxed mt-2 mb-6" >
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white text-xs font-semibold">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-black text-sm font-semibold" >
                        {t.name}
                      </p>
                      <p className="text-black/40 text-xs" >{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="hidden sm:flex flex-shrink-0 w-11 h-11 items-center justify-center rounded-full border border-black/10 text-black transition hover:bg-black hover:text-white active:bg-black active:text-white"
            aria-label="التالي"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </Container>
    </section>
  );
}
