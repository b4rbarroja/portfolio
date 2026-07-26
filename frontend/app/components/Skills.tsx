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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-0 gap-y-10 w-full max-w-6xl">
          {skills.map((skill, idx) => {
            const isLastInRow =
              (idx + 1) % 6 === 0 || idx === skills.length - 1;
            return (
              <Reveal key={skill.name} delay={idx * 80}>
                <div className="relative flex justify-center">
                  {!isLastInRow && (
                    <div className="hidden lg:block absolute top-[60px] right-0 -translate-x-1/2 w-full border-t border-dashed border-black/10 -z-10">
                      <span className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 w-1 h-1 rounded-full bg-black/20" />
                    </div>
                  )}
                  <div className="flex flex-col items-center text-center gap-3 border border-black/10 rounded-t-full rounded-b-2xl px-6 pt-8 pb-6 w-full max-w-[180px] transition-all duration-300 hover:border-black/25 hover:-translate-y-1 bg-white">
                    <Image
                      src={skill.src}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="w-9 h-9 sm:w-10 sm:h-10"
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-black font-semibold text-xl md:text-2xl">
                        {skill.name}
                      </p>
                      <p className="text-black/40 text-sm md:text-base">{skill.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
