import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE:
    "Yan Min Thwin | Alfie Yang | Full-Stack Engineer | Front-end Engineer | Ruby on Rails Engineer",
  DESCRIPTION:
    "Explore Yan Min Thwin's portfolio showcasing projects built with Next.js, Ruby on Rails, and Astro. Discover innovative web designs and robust backend solutions.",
  AUTHOR: "Yan Min Thwin",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  // {
  //   TEXT: "Blog",
  //   HREF: "/blog",
  // },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "yanminthwin@gmail.com",
    HREF: "mailto:yanminthwin@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "anbehindY",
    HREF: "https://github.com/anbehindY",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Yan Min Thwin",
    HREF: "https://www.linkedin.com/in/yan-min-thwin/",
  },
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "@yanminthwin",
    HREF: "https://x.com/yanminthwin",
  },
];
