import Image from "next/image";
import Container from "./Container";
import { Reveal } from "./Reveal";

const skills = [
  { src: "/html.png", name: "HTML5", desc: "لغة ترميز" },
  { src: "/css2.svg", name: "CSS3", desc: "تصميم" },
  { src: "/js.png", name: "JavaScript", desc: "لغة برمجة" },
  { src: "/ts.png", name: "TypeScript", desc: "لغة برمجة" },
  { src: "/react.png", name: "React", desc: "مكتبة واجهات" },
  { src: "/next.png", name: "Next.js", desc: "إطار عمل" },
  { src: "/node.png", name: "Node.js", desc: "بيئة تشغيل" },
  { src: "/ex.png", name: "Express.js", desc: "إطار عمل ويب" },
  { src: "/postgres.png", name: "PostgreSQL", desc: "قاعدة بيانات" },
  { src: "/prisma.png", name: "Prisma", desc: "ORM" },
  { src: "/git.png", name: "Git", desc: "نظام تحكم" },
  { src: "/tailwind2.png", name: "Tailwind CSS", desc: "إطار عمل CSS" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className={`py-16 sm:py-20 lg:py-24 flex flex-col justify-center items-center gap-10`}
    >
      <Container className="flex flex-col justify-center items-center gap-10">
        <Reveal>
          <div className="flex justify-center items-center flex-col text-center gap-3 max-w-lg">
            <span className="text-black/30 text-sm md:text-base">✦</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              التقنيات التي أستخدمها
            </h2>
            <p className="text-black/50 text-base md:text-lg">
              أدوات وتقنيات حديثة أستخدمها لبناء حلول رقمية عالية الجودة.
            </p>
            <div className="w-10 border-t border-dashed border-black/10 mt-1" />
          </div>
        </Reveal>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-y-10 gap-x-4 w-full max-w-6xl">
          {skills.map((skill, idx) => (
            <Reveal key={skill.name} delay={idx * 80}>
              <div className="group flex flex-col items-center text-center gap-3">
                <Image
                  src={skill.src}
                  alt={skill.name}
                  width={56}
                  height={56}
                  className="w-12 h-12 sm:w-14 sm:h-14 transition-all duration-300 group-hover:scale-105"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-black font-semibold text-base md:text-lg">
                    {skill.name}
                  </p>
                  <p className="text-black/40 text-xs md:text-sm">
                    {skill.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
