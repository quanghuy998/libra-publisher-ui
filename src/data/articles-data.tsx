import exp from "constants";
import Article from "../types/article";

const articleData: Article[] = [
  {
    id: "1",
    title: "Understanding React Hooks",
    status: "published",
    content: `Performance optimization in React applications is crucial for maintaining a smooth user experience, 
    especially as your application grows in complexity. There are several key strategies developers can employ to 
    optimize performance. One of the first steps is to identify unnecessary re-renders using tools like the React 
    DevTools Profiler. Components that re-render too frequently can slow down the entire application. Memoization 
    techniques such as React.memo, useMemo, and useCallback can help avoid redundant re-computations or re-renders. 
    However, developers must apply these techniques wisely, as excessive or incorrect memoization can sometimes make 
    performance worse. Another essential area of focus is code-splitting. Using tools like React.lazy and dynamic 
    imports allows your application to load only the necessary components initially and defer the rest, significantly 
    improving initial load time. Paired with Suspense, this can enhance user-perceived performance. Virtualization 
    libraries like react-window and react-virtualized can drastically reduce DOM nodes rendered at once in lists or 
    tables, improving scrolling performance and responsiveness. This is especially useful when dealing with thousands 
    of items. Efficient state management is also vital. Global state updates can lead to widespread re-renders, so 
    tools like Redux Toolkit, Zustand, or Jotai are recommended for scalable and efficient state handling. Keeping 
    state local where possible reduces dependencies and unnecessary updates. Finally, image optimization, lazy loading, 
    and proper use of server-side rendering (SSR) or static site generation (SSG) via frameworks like Next.js can provide 
    a big boost to perceived and actual performance. By combining these techniques, you can build highly responsive 
    React applications that scale well and maintain excellent user experiences.`,
    category: "React",
    author: "John Doe",
    publishedDate: "2023-10-01",
    views: 1500,
    rating: 4.5,
  },
  {
    id: "2",
    title: "A Guide to TypeScript",
    status: "draft",
    content:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
    category: "TypeScript",
    author: "Jane Smith",
    publishedDate: "2023-10-02",
    views: 1200,
    rating: 4.7,
  },
  {
    id: "3",
    title: "CSS Grid Layout",
    status: "published",
    content: "CSS Grid Layout is a two-dimensional layout system for the web.",
    category: "CSS",
    author: "Robert Johnson",
    publishedDate: "2023-10-03",
    views: 800,
    rating: 4.2,
  },
  {
    id: "4",
    title: "JavaScript ES6 Features",
    status: "draft",
    content:
      "ES6 introduces several new features to JavaScript, including arrow functions, classes, and modules.",
    category: "JavaScript",
    author: "Emily Davis",
    publishedDate: "2023-10-04",
    views: 600,
    rating: 4.0,
  },
  {
    id: "5",
    title: "Building RESTful APIs with Node.js",
    status: "published",
    content:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    category: "Node.js",
    author: "Michael Wilson",
    publishedDate: "2023-10-05",
    views: 900,
    rating: 4.6,
  },
  {
    id: "6",
    title: "Introduction to GraphQL",
    status: "draft",
    content:
      "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.",
    category: "GraphQL",
    author: "Sarah Brown",
    publishedDate: "2023-10-06",
    views: 700,
    rating: 4.3,
  },
];

export default articleData;
