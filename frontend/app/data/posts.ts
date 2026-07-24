export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export const posts: Post[] = [
  {
    slug: "building-modern-web-apps-with-nextjs",
    title: "Building Modern Web Apps with Next.js",
    excerpt: "Discover why Next.js is the go-to framework for building fast, scalable, and SEO-friendly web applications.",
    content: [
      "Next.js has become one of the most popular frameworks for building modern web applications. With its powerful features like server-side rendering, static site generation, and incremental static regeneration, it offers developers the flexibility to build applications that are both fast and scalable.",
      "One of the key advantages of Next.js is its file-based routing system. By simply creating files in the `app` directory, you can define routes, API endpoints, and layouts without any additional configuration. This makes development faster and more intuitive.",
      "Another standout feature is the ability to choose your rendering strategy on a per-page basis. You can statically generate pages at build time for maximum performance, use server-side rendering for dynamic content, or leverage incremental static regeneration to keep your static pages up to date without a full rebuild.",
      "With built-in support for TypeScript, CSS modules, and image optimization, Next.js provides everything you need to build production-ready applications out of the box. Whether you are building a marketing site, an e-commerce platform, or a SaaS product, Next.js has you covered.",
    ],
    category: "Web Development",
    date: "June 15, 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
  },
  {
    slug: "clean-code-principles",
    title: "Clean Code Principles Every Developer Should Know",
    excerpt: "Learn the fundamental principles of writing clean, maintainable, and readable code that your future self will thank you for.",
    content: [
      "Clean code is not just about making your code work — it is about making it understandable and maintainable for yourself and others. As software projects grow, the importance of writing clean code becomes increasingly apparent.",
      "One of the most important principles is meaningful naming. Variables, functions, and classes should have names that clearly describe their purpose. Avoid abbreviations and single-letter names unless they are universally understood (like `i` for loop indices).",
      "Another key principle is keeping functions small and focused. Each function should do one thing and do it well. If a function is doing multiple things, it is a sign that it should be broken down into smaller, more focused functions.",
      "Finally, consistent formatting and commenting conventions make your code more readable. Use a linter and formatter to enforce consistency across your codebase. Remember: code is read far more often than it is written.",
    ],
    category: "Best Practices",
    date: "June 1, 2025",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
  },
  {
    slug: "responsive-design-guide",
    title: "The Complete Guide to Responsive Design",
    excerpt: "Master responsive design techniques to create websites that look great on every device, from mobile phones to large desktop screens.",
    content: [
      "Responsive design is no longer optional — it is a necessity. With users accessing the web from a wide variety of devices, your website must adapt seamlessly to different screen sizes and orientations.",
      "The foundation of responsive design is the flexible grid. Using relative units like percentages, `fr` units in CSS Grid, or `flex` values in Flexbox allows your layout to adapt naturally to the available space. Combined with media queries, you can fine-tune the design at specific breakpoints.",
      "Images and media should also be responsive. Use the `max-width: 100%` technique to ensure images never overflow their container, and consider using the `<picture>` element or `srcset` attribute to serve different image sizes based on the viewport.",
      "With the rise of mobile-first development, start your design from the smallest screen and progressively enhance it for larger screens. This approach ensures that your core content and functionality work on every device, and you add complexity only when there is enough space.",
    ],
    category: "CSS",
    date: "May 20, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop",
  },
  {
    slug: "why-typescript",
    title: "Why TypeScript is a Game Changer for Web Development",
    excerpt: "Explore how TypeScript improves developer experience, catches bugs early, and makes your codebase more maintainable.",
    content: [
      "TypeScript has rapidly become one of the most popular languages in web development. As a superset of JavaScript, it adds static typing to the language, enabling developers to catch errors at compile time rather than at runtime.",
      "One of the biggest benefits of TypeScript is improved developer experience. With features like autocompletion, type inference, and refactoring tools, your IDE becomes much more powerful. TypeScript can suggest properties and methods as you type, reducing the need to constantly refer to documentation.",
      "TypeScript also makes your codebase more maintainable, especially in larger projects. Types serve as a form of documentation that is always up to date. When you change a function signature, TypeScript will flag every place that needs updating, preventing runtime errors in production.",
      "The TypeScript ecosystem has matured significantly, with excellent support in all major frameworks including React, Next.js, Angular, and Vue. If you haven't tried TypeScript yet, now is the perfect time to start.",
    ],
    category: "TypeScript",
    date: "May 5, 2025",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop",
  },
  {
    slug: "api-design-best-practices",
    title: "The Art of API Design: Best Practices",
    excerpt: "Learn the principles of designing clean, consistent, and developer-friendly REST APIs that stand the test of time.",
    content: [
      "A well-designed API is a joy to work with. It should be intuitive, consistent, and predictable. Whether you are building an internal microservice or a public API, following established design principles will save you and your users countless hours of frustration.",
      "Start with consistent naming conventions. Use nouns for resources (`/users`, `/orders`) and HTTP methods for actions (GET to fetch, POST to create, PUT to update, DELETE to remove). Keep your URLs clean and hierarchical, avoiding verbs in the URL path.",
      "Versioning your API is crucial for maintaining backward compatibility. Include the version in the URL (`/v1/users`) or in the request header. This allows you to introduce breaking changes without affecting existing clients.",
      "Good documentation is just as important as good code. Provide clear, up-to-date documentation with examples for every endpoint. Tools like OpenAPI/Swagger make it easy to generate interactive documentation that your users will love.",
    ],
    category: "Backend",
    date: "April 18, 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    slug: "tailwind-css-productivity",
    title: "Why Tailwind CSS Boosts Your Productivity",
    excerpt: "Discover how utility-first CSS can speed up your workflow, reduce code size, and make styling a breeze.",
    content: [
      "Tailwind CSS has revolutionized the way developers approach styling. Instead of writing custom CSS for every component, you compose designs using pre-built utility classes directly in your HTML or JSX.",
      "The utility-first approach leads to faster development because you don't need to switch between files or come up with class names. Everything happens right in your template, making the design process more fluid and iterative.",
      "One common concern is that utility classes result in bloated HTML. However, with Tailwind's built-in purging, unused classes are removed from the production build, resulting in a final CSS file that is often smaller than hand-written CSS.",
      "Tailwind also promotes consistency in your designs. With a predefined design system of spacing, colors, typography, and breakpoints, every component naturally follows the same visual language, eliminating the inconsistency that often plagues large projects.",
    ],
    category: "CSS",
    date: "April 1, 2025",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&h=400&fit=crop",
  },
];
