export interface Post {
  slug: string;
  title: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  content: { en: string[]; ar: string[] };
  category: { en: string; ar: string };
  date: string;
  readTime: { en: string; ar: string };
  image: string;
}

export const posts: Post[] = [
  {
    slug: "building-modern-web-apps-with-nextjs",
    title: {
      en: "Building Modern Web Apps with Next.js",
      ar: "بناء تطبيقات الويب الحديثة باستخدام Next.js",
    },
    excerpt: {
      en: "Discover why Next.js is the go-to framework for building fast, scalable, and SEO-friendly web applications.",
      ar: "اكتشف لماذا Next.js هو الإطار المثالي لبناء تطبيقات ويب سريعة وقابلة للتطوير وصديقة لمحركات البحث.",
    },
    content: {
      en: [
        "Next.js has become one of the most popular frameworks for building modern web applications. With its powerful features like server-side rendering, static site generation, and incremental static regeneration, it offers developers the flexibility to build applications that are both fast and scalable.",
        "One of the key advantages of Next.js is its file-based routing system. By simply creating files in the `app` directory, you can define routes, API endpoints, and layouts without any additional configuration. This makes development faster and more intuitive.",
        "Another standout feature is the ability to choose your rendering strategy on a per-page basis. You can statically generate pages at build time for maximum performance, use server-side rendering for dynamic content, or leverage incremental static regeneration to keep your static pages up to date without a full rebuild.",
        "With built-in support for TypeScript, CSS modules, and image optimization, Next.js provides everything you need to build production-ready applications out of the box. Whether you are building a marketing site, an e-commerce platform, or a SaaS product, Next.js has you covered.",
      ],
      ar: [
        "أصبح Next.js واحداً من أكثر الأطر استخداماً لبناء تطبيقات الويب الحديثة. بفضل ميزاته القوية مثل التقديم من جانب الخادم وتوليد المواقع الثابتة والتجديد الثابت التدريجي، فإنه يوفر للمطورين المرونة اللازمة لبناء تطبيقات سريعة وقابلة للتطوير.",
        "من أهم مزايا Next.js نظام التوجيه القائم على الملفات. بمجرد إنشاء ملفات في دليل `app`، يمكنك تعريف المسارات ونقاط نهاية API والتخطيطات دون أي إعدادات إضافية. وهذا يجعل التطوير أسرع وأكثر سهولة.",
        "ميزة أخرى بارزة هي القدرة على اختيار استراتيجية التقديم لكل صفحة على حدة. يمكنك توليد الصفحات بشكل ثابت أثناء البناء لأقصى أداء، أو استخدام التقديم من جانب الخادم للمحتوى الديناميكي، أو الاستفادة من التجديد الثابت التدريجي للحفاظ على تحديث صفحاتك الثابتة دون إعادة بناء كاملة.",
        "مع الدعم المدمج لـ TypeScript ووحدات CSS وتحسين الصور، يوفر Next.js كل ما تحتاجه لبناء تطبيقات جاهزة للإنتاج. سواء كنت تبني موقعاً تسويقياً أو منصة تجارة إلكترونية أو منتج SaaS، فإن Next.js يلبي احتياجاتك.",
      ],
    },
    category: { en: "Web Development", ar: "تطوير الويب" },
    date: "June 15, 2025",
    readTime: { en: "5 min read", ar: "5 دقائق قراءة" },
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
  },
  {
    slug: "clean-code-principles",
    title: {
      en: "Clean Code Principles Every Developer Should Know",
      ar: "مبادئ الكود النظيف التي يجب أن يعرفها كل مطور",
    },
    excerpt: {
      en: "Learn the fundamental principles of writing clean, maintainable, and readable code that your future self will thank you for.",
      ar: "تعلم المبادئ الأساسية لكتابة كود نظيف وقابل للصيانة والقراءة سيشكرك عليه مستقبلك.",
    },
    content: {
      en: [
        "Clean code is not just about making your code work — it is about making it understandable and maintainable for yourself and others. As software projects grow, the importance of writing clean code becomes increasingly apparent.",
        "One of the most important principles is meaningful naming. Variables, functions, and classes should have names that clearly describe their purpose. Avoid abbreviations and single-letter names unless they are universally understood (like `i` for loop indices).",
        "Another key principle is keeping functions small and focused. Each function should do one thing and do it well. If a function is doing multiple things, it is a sign that it should be broken down into smaller, more focused functions.",
        "Finally, consistent formatting and commenting conventions make your code more readable. Use a linter and formatter to enforce consistency across your codebase. Remember: code is read far more often than it is written.",
      ],
      ar: [
        "الكود النظيف لا يقتصر على جعل الكود يعمل فقط - بل يتعلق بجعله مفهومًا وقابلاً للصيانة لك وللآخرين. مع نمو المشاريع البرمجية، تزداد أهمية كتابة كود نظيف بشكل متزايد.",
        "من أهم المبادئ هي التسمية ذات المعنى. يجب أن يكون للمتغيرات والدوال والكلاسات أسماء تصف بوضوح الغرض منها. تجنب الاختصارات والأسماء المكونة من حرف واحد إلا إذا كانت مفهومة عالمياً.",
        "مبدأ رئيسي آخر هو إبقاء الدوال صغيرة ومركزة. يجب أن تقوم كل دالة بشيء واحد وتقوم به بشكل جيد. إذا كانت الدالة تقوم بأشياء متعددة، فهذه علامة على أنها بحاجة إلى التقسيم إلى دوال أصغر وأكثر تركيزاً.",
        "أخيراً، التنسيق المتسق واصطلاحات التعليقات تجعل الكود أكثر قابلية للقراءة. استخدم أداة الفحص والتنسيق لفرض الاتساق عبر قاعدة الكود الخاصة بك. تذكر: الكود يُقرأ أكثر بكثير مما يُكتب.",
      ],
    },
    category: { en: "Best Practices", ar: "أفضل الممارسات" },
    date: "June 1, 2025",
    readTime: { en: "4 min read", ar: "4 دقائق قراءة" },
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
  },
  {
    slug: "responsive-design-guide",
    title: {
      en: "The Complete Guide to Responsive Design",
      ar: "الدليل الشامل للتصميم المتجاوب",
    },
    excerpt: {
      en: "Master responsive design techniques to create websites that look great on every device, from mobile phones to large desktop screens.",
      ar: "أتقن تقنيات التصميم المتجاوب لإنشاء مواقع ويب تبدو رائعة على كل جهاز، من الهواتف المحمولة إلى شاشات الكمبيوتر الكبيرة.",
    },
    content: {
      en: [
        "Responsive design is no longer optional — it is a necessity. With users accessing the web from a wide variety of devices, your website must adapt seamlessly to different screen sizes and orientations.",
        "The foundation of responsive design is the flexible grid. Using relative units like percentages, `fr` units in CSS Grid, or `flex` values in Flexbox allows your layout to adapt naturally to the available space. Combined with media queries, you can fine-tune the design at specific breakpoints.",
        "Images and media should also be responsive. Use the `max-width: 100%` technique to ensure images never overflow their container, and consider using the `<picture>` element or `srcset` attribute to serve different image sizes based on the viewport.",
        "With the rise of mobile-first development, start your design from the smallest screen and progressively enhance it for larger screens. This approach ensures that your core content and functionality work on every device, and you add complexity only when there is enough space.",
      ],
      ar: [
        "التصميم المتجاوب لم يعد خياراً - بل ضرورة. مع وصول المستخدمين إلى الويب من مجموعة واسعة من الأجهزة، يجب أن يتكيف موقعك بسلاسة مع أحجام الشاشات المختلفة واتجاهاتها.",
        "أساس التصميم المتجاوب هو الشبكة المرنة. استخدام الوحدات النسبية مثل النسب المئوية ووحدات `fr` في CSS Grid أو قيم `flex` في Flexbox يسمح لتخطيطك بالتكيف بشكل طبيعي مع المساحة المتاحة. بالإضافة إلى استعلامات الوسائط، يمكنك ضبط التصميم بدقة عند نقاط التوقف المحددة.",
        "يجب أن تكون الصور والوسائط متجاوبة أيضاً. استخدم تقنية `max-width: 100%` لضمان عدم تجاوز الصور للحاوية الخاصة بها، وفكر في استخدام عنصر `<picture>` أو خاصية `srcset` لتقديم أحجام صور مختلفة بناءً على منفذ العرض.",
        "مع ظهور تطوير الهواتف المحمولة أولاً، ابدأ تصميمك من أصغر شاشة وقم بتحسينه تدريجياً للشاشات الأكبر. يضمن هذا النهج أن المحتوى والوظائف الأساسية الخاصة بك تعمل على كل جهاز، وتضيف التعقيد فقط عندما تكون هناك مساحة كافية.",
      ],
    },
    category: { en: "CSS", ar: "CSS" },
    date: "May 20, 2025",
    readTime: { en: "6 min read", ar: "6 دقائق قراءة" },
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop",
  },
  {
    slug: "why-typescript",
    title: {
      en: "Why TypeScript is a Game Changer for Web Development",
      ar: "لماذا TypeScript هو تغيير جذري في تطوير الويب",
    },
    excerpt: {
      en: "Explore how TypeScript improves developer experience, catches bugs early, and makes your codebase more maintainable.",
      ar: "استكشف كيف يحسن TypeScript تجربة المطور ويكتشف الأخطاء مبكراً ويجعل قاعدة الكود الخاصة بك أكثر قابلية للصيانة.",
    },
    content: {
      en: [
        "TypeScript has rapidly become one of the most popular languages in web development. As a superset of JavaScript, it adds static typing to the language, enabling developers to catch errors at compile time rather than at runtime.",
        "One of the biggest benefits of TypeScript is improved developer experience. With features like autocompletion, type inference, and refactoring tools, your IDE becomes much more powerful. TypeScript can suggest properties and methods as you type, reducing the need to constantly refer to documentation.",
        "TypeScript also makes your codebase more maintainable, especially in larger projects. Types serve as a form of documentation that is always up to date. When you change a function signature, TypeScript will flag every place that needs updating, preventing runtime errors in production.",
        "The TypeScript ecosystem has matured significantly, with excellent support in all major frameworks including React, Next.js, Angular, and Vue. If you haven't tried TypeScript yet, now is the perfect time to start.",
      ],
      ar: [
        "أصبح TypeScript بسرعة واحدة من أكثر اللغات استخداماً في تطوير الويب. كمجموعة شاملة من JavaScript، يضيف الكتابة الثابتة إلى اللغة، مما يمكن المطورين من اكتشاف الأخطاء في وقت الترجمة بدلاً من وقت التشغيل.",
        "من أكبر فوائد TypeScript تحسين تجربة المطور. بفضل ميزات مثل الإكمال التلقائي واستنتاج الأنواع وأدوات إعادة الهيكلة، يصبح محرر الأكواد الخاص بك أكثر قوة. يمكن لـ TypeScript اقتراح الخصائص والطرق أثناء الكتابة، مما يقلل الحاجة إلى الرجوع المستمر إلى التوثيق.",
        "كما يجعل TypeScript قاعدة الأكواد الخاصة بك أكثر قابلية للصيانة، خاصة في المشاريع الكبيرة. تعمل الأنواع كشكل من أشكال التوثيق الذي يكون محدثاً دائماً. عندما تغير توقيع دالة، سيقوم TypeScript بتحديد كل مكان يحتاج إلى تحديث، مما يمنع أخطاء التشغيل في الإنتاج.",
        "لقد نضج نظام TypeScript البيئي بشكل كبير، مع دعم ممتاز في جميع الأطر الرئيسية بما في ذلك React و Next.js و Angular و Vue. إذا لم تجرب TypeScript بعد، فالآن هو الوقت المثالي للبدء.",
      ],
    },
    category: { en: "TypeScript", ar: "TypeScript" },
    date: "May 5, 2025",
    readTime: { en: "4 min read", ar: "4 دقائق قراءة" },
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop",
  },
  {
    slug: "api-design-best-practices",
    title: {
      en: "The Art of API Design: Best Practices",
      ar: "فن تصميم واجهات البرمجة: أفضل الممارسات",
    },
    excerpt: {
      en: "Learn the principles of designing clean, consistent, and developer-friendly REST APIs that stand the test of time.",
      ar: "تعلم مبادئ تصميم واجهات برمجة REST نظيفة ومتسقة وصديقة للمطور تصمد أمام اختبار الزمن.",
    },
    content: {
      en: [
        "A well-designed API is a joy to work with. It should be intuitive, consistent, and predictable. Whether you are building an internal microservice or a public API, following established design principles will save you and your users countless hours of frustration.",
        "Start with consistent naming conventions. Use nouns for resources (`/users`, `/orders`) and HTTP methods for actions (GET to fetch, POST to create, PUT to update, DELETE to remove). Keep your URLs clean and hierarchical, avoiding verbs in the URL path.",
        "Versioning your API is crucial for maintaining backward compatibility. Include the version in the URL (`/v1/users`) or in the request header. This allows you to introduce breaking changes without affecting existing clients.",
        "Good documentation is just as important as good code. Provide clear, up-to-date documentation with examples for every endpoint. Tools like OpenAPI/Swagger make it easy to generate interactive documentation that your users will love.",
      ],
      ar: [
        "واجهة البرمجة المصممة جيداً هي متعة في العمل معها. يجب أن تكون بديهية ومتسقة وقابلة للتوقع. سواء كنت تبني خدمة داخلية أو واجهة برمجة عامة، فإن اتباع مبادئ التصميم المعتمدة سيوفر لك ولمستخدميك ساعات لا حصر لها من الإحباط.",
        "ابدأ باتفاقيات تسمية متسقة. استخدم الأسماء للموارد (`/users`، `/orders`) وطرق HTTP للإجراءات (GET للجلب، POST للإنشاء، PUT للتحديث، DELETE للحذف). حافظ على عناوين URL نظيفة وهرمية، وتجنب الأفعال في مسار URL.",
        "إصدار واجهة البرمجة الخاصة بك أمر بالغ الأهمية للحفاظ على التوافق العكسي. قم بتضمين الإصدار في عنوان URL (`/v1/users`) أو في رأس الطلب. يتيح لك ذلك إجراء تغييرات جوهرية دون التأثير على العملاء الحاليين.",
        "التوثيق الجيد لا يقل أهمية عن الكود الجيد. قدم توثيقاً واضحاً ومحدثاً مع أمثلة لكل نقطة نهاية. أدوات مثل OpenAPI/Swagger تجعل من السهل إنشاء توثيق تفاعلي سيحبه مستخدموك.",
      ],
    },
    category: { en: "Backend", ar: "الخلفية" },
    date: "April 18, 2025",
    readTime: { en: "5 min read", ar: "5 دقائق قراءة" },
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    slug: "tailwind-css-productivity",
    title: {
      en: "Why Tailwind CSS Boosts Your Productivity",
      ar: "لماذا Tailwind CSS يعزز إنتاجيتك",
    },
    excerpt: {
      en: "Discover how utility-first CSS can speed up your workflow, reduce code size, and make styling a breeze.",
      ar: "اكتشف كيف يمكن لـ CSS القائم على الأدوات المساعدة تسريع سير عملك وتقليل حجم الكود وجعل التصميم سهلاً.",
    },
    content: {
      en: [
        "Tailwind CSS has revolutionized the way developers approach styling. Instead of writing custom CSS for every component, you compose designs using pre-built utility classes directly in your HTML or JSX.",
        "The utility-first approach leads to faster development because you don't need to switch between files or come up with class names. Everything happens right in your template, making the design process more fluid and iterative.",
        "One common concern is that utility classes result in bloated HTML. However, with Tailwind's built-in purging, unused classes are removed from the production build, resulting in a final CSS file that is often smaller than hand-written CSS.",
        "Tailwind also promotes consistency in your designs. With a predefined design system of spacing, colors, typography, and breakpoints, every component naturally follows the same visual language, eliminating the inconsistency that often plagues large projects.",
      ],
      ar: [
        "لقد أحدث Tailwind CSS ثورة في طريقة تعامل المطورين مع التصميم. بدلاً من كتابة CSS مخصص لكل مكون، يمكنك تركيب التصاميم باستخدام فئات أدوات مساعدة مبنية مسبقاً مباشرة في HTML أو JSX الخاص بك.",
        "النهج القائم على الأدوات المساعدة يؤدي إلى تطوير أسرع لأنك لست بحاجة إلى التبديل بين الملفات أو ابتكار أسماء فئات. كل شيء يحدث في قالبك، مما يجعل عملية التصميم أكثر سلاسة وتكرارية.",
        "أحد المخاوف الشائعة هو أن فئات الأدوات المساعدة تؤدي إلى HTML متضخم. ومع ذلك، مع التنظيف المدمج في Tailwind، تتم إزالة الفئات غير المستخدمة من بناء الإنتاج، مما ينتج ملف CSS نهائي أصغر غالباً من CSS المكتوب يدوياً.",
        "Tailwind يعزز أيضاً الاتساق في تصميماتك. مع نظام تصميم محدد مسبقاً من التباعد والألوان والطباعة ونقاط التوقف، يتبع كل مكون بشكل طبيعي نفس اللغة البصرية، مما يلغي عدم الاتساق الذي غالباً ما يثقل المشاريع الكبيرة.",
      ],
    },
    category: { en: "CSS", ar: "CSS" },
    date: "April 1, 2025",
    readTime: { en: "4 min read", ar: "4 دقائق قراءة" },
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&h=400&fit=crop",
  },
];
