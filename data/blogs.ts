// lib/blogs.ts

export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
};

export const allBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Turn an Idea Into a Web Application: A Practical Guide for Lagos Entrepreneurs",
    slug: "how-to-turn-an-idea-into-a-web-application-lagos-entrepreneurs",
    excerpt: "A practical roadmap for founders, students, and small business owners in Lagos—from validating an idea to launching a web application and getting paid in naira.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071",
    category: "Web Development",
    readTime: "12 min read",
    date: "June 2, 2026",
    author: "LOPublications"
  },
  {
    id: 2,
    title: "Web Applications vs WordPress: Which Is Best for Your Business in Lagos, Nigeria?",
    slug: "web-applications-vs-wordpress-lagos-nigeria",
    excerpt: "Should you build your platform with WordPress or invest in a custom web application? Understanding the difference can help Lagos businesses make a smarter investment.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069",
    category: "Web Development",
    readTime: "11 min read",
    date: "June 4, 2026",
    author: "LOPublications"
  },
  {
    id: 3,
    title: "Why Do Ottawa Publishers Reject Manuscripts?",
    slug: "why-do-ottawa-publishers-reject-manuscripts",
    excerpt: "Rejection is a normal part of publishing. Here are the most common reasons Ottawa publishers reject manuscripts—and how authors can respond strategically.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073",
    category: "Publishing",
    readTime: "13 min read",
    date: "June 6, 2026",
    author: "LOPublications"
  },

  {
    id: 4,
    title: "What Is a Web Application and How Is It Different from a Website?",
    slug: "what-is-a-web-application-different-from-a-website",
    excerpt: "A website mainly helps people find information. A web application helps people do something. Understanding the difference can save you money and stress.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2028",
    category: "Web Development",
    readTime: "8 min read",
    date: "June 10, 2026",
    author: "LOPublications"
  },
  {
    id: 5,
    title: "How Long Does It Take to Develop a Web Application?",
    slug: "how-long-does-it-take-to-develop-a-web-application",
    excerpt: "A simple web application could take 4 to 8 weeks, while complex platforms can take 4 to 9 months or longer. The timeline depends largely on what you want to build.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070",
    category: "Web Development",
    readTime: "10 min read",
    date: "June 12, 2026",
    author: "LOPublications"
  }
];