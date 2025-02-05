import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.perguth.de/", // replace this with your deployed domain
  author: "Per Guth",
  desc: "Full-stack Developer",
  title: "Per Guth",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 100,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/perguth",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/perguth.d3v.ltd",
    linkTitle: `${SITE.title} on Bluesky`,
    active: true,
  },
  {
    name: "Telegram",
    href: "https://t.me/perguth",
    linkTitle: `${SITE.title} on Telegram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/perguth/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:mail@perguth.de",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/perguth.de",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://x.com/perguth",
    linkTitle: `${SITE.title} on X`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://chaos.social/@pguth",
    linkTitle: `${SITE.title} on Mastodon`,
    active: true,
  },
];
