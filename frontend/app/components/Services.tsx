"use client";
import { Palette, Server, Smartphone, Zap, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./Container";
import { Reveal } from "./Reveal";

const journey = [
  {
    icon: Palette,
    title: "تصميم الواجهات الأمامية",
    description: "تصميم واجهات أمامية لموقعك ذات شكل جمالي خلاب.",
    x: 70,
    y: 12,
  },
  {
    icon: Server,
    title: "تطوير الواجهات الخلفية",
    description: "تطوير الواجهات الخلفية لموقعك باستخدام أحدث التقنيات.",
    x: 30,
    y: 36,
  },
  {
    icon: Smartphone,
    title: "بتصميم متجاوب",
    description: "بتصميم متجاوب على جميع الأجهزة والشاشات.",
    x: 70,
    y: 60,
  },
  {
    icon: Zap,
    title: "وأداء فائق",
    description: "وأداء فائق لا تشكو منه بطئاً ولا انتظارات.",
    x: 30,
    y: 84,
  },
];

// مسار انسيابي متناسق وموزون في المنتصف (ViewBox 0-100)
const TRAIL_PATH =
  "M 50 2 " +
  "Q 70 2 70 12 " +
  "C 70 26 30 22 30 36 " +
  "C 30 50 70 46 70 60 " +
  "C 70 74 30 70 30 84 " +
  "Q 30 94 50 96";

export default function Services() {
  return (
    <section
      id="services"
      className="flex flex-col justify-center items-center py-16 sm:py-20 lg:py-24 overflow-x-hidden relative"
    >
      <Container>
        <Reveal>
          <div className="flex justify-center items-center flex-col text-center mb-12 w-full max-w-xl mx-auto">
            <span className="text-black/40 text-sm md:text-base font-medium mb-2">
              +
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              ما أقدمه
            </h2>
            <div className="w-full border-t border-dashed border-black/15" />
          </div>
        </Reveal>

        {/* حاوية متوسطة الحجم لإلغاء الفراغ الجانبي الكبير */}
        <div className="relative w-full max-w-2xl mx-auto h-[750px] sm:h-[900px] md:h-[1000px]">
          {/* رسم المسار التفاعلي */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            {/* خط خلفي خفيف ثابت */}
            <path
              d={TRAIL_PATH}
              fill="none"
              stroke="#00000015"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="1 2"
              vectorEffect="non-scaling-stroke"
            />
            {/* خط ينرسم تدريجياً مع السكرول */}
            <motion.path
              d={TRAIL_PATH}
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="1 2"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </svg>

          {/* دبوس البداية مع أنيميشن نبض */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring" }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            style={{ left: "50%", top: "2%" }}
          >
            <span className="absolute inset-0 rounded-full bg-black/20 animate-ping" />
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black text-white flex items-center justify-center shadow-md">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2.5} />
            </div>
          </motion.div>

          {/* محطات الخدمات */}
          {journey.map(({ icon: Icon, title, description, x, y }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 25, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: 0.2 + index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{ y: -6 }}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center gap-2 w-[160px] sm:w-[220px] md:w-[250px] group cursor-default"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {/* دائرة الأيقونة مع تأثير Hover */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-black/10 bg-white flex items-center justify-center shadow-md transition-all duration-300 group-hover:border-black group-hover:bg-black">
                <Icon
                  className="w-6 h-6 sm:w-8 sm:h-8 text-black group-hover:text-white transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>

              {/* كارت الخدمة */}
              <div className="w-full rounded-2xl bg-white/95 backdrop-blur-md border border-black/10 shadow-sm px-3 py-3 sm:px-5 sm:py-4 transition-all duration-300 group-hover:shadow-md group-hover:border-black/20">
                <h3 className="text-xs sm:text-base md:text-lg font-bold text-black mb-1">
                  {title}
                </h3>
                <p className="text-black/60 text-[11px] sm:text-xs md:text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* نقطة النهاية */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, type: "spring" }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            style={{ left: "50%", top: "96%" }}
          >
            <div className="w-4 h-4 rounded-full bg-black ring-4 ring-black/15" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
