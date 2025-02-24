interface HeaderItem {
  name: string;
  path: string;
}

interface ArticleCardList {
  image: string;
  date: string;
  timeReamining: string;
  title: string;
  description: string;
  authorImg: string;
  authorName: string;
}

export const HEADER_LIST: HeaderItem[] = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "Learn to trade",
    path: "#learn-to-trade",
  },
  {
    name: "Promotions",
    path: "#promotions",
  },
  {
    name: "Arrowtrade",
    path: "#arrowtrade",
  },
  {
    name: "Blog",
    path: "#blog",
  },
];

export const ARTICLES_CARD_LIST: ArticleCardList[] = [
  {
    image: "/assets/images/webp/real-time-marketing.webp",
    date: "31 Jan 2025",
    timeReamining: "3 min read",
    title: "Real-Time Market Insights",
    description:
      "Stay ahead with AI-driven analytics, real-time news updates, and expert market research to make informed decisions.",
    authorImg: "/assets/images/darrell-img.webp",
    authorName: "Darrell Steward",
  },
  {
    image: "/assets/images/webp/advance-trading.webp",
    date: "29 Jan 2025",
    timeReamining: "7 min read",
    title: "Advanced Trading Platform",
    description:
      "Experience lightning-fast execution, customizable charts, and an intuitive interface designed for traders of all levels.",
    authorImg: "/assets/images/jerome-img.webp",
    authorName: "Jerome Bell",
  },
  {
    image: "/assets/images/webp/mastering-markets.webp",
    date: "20 Dec 2024",
    timeReamining: "4 min read",
    title: "Mastering the Markets",
    description:
      "Mastering the markets involves developing a comprehensive understanding of how financial markets work, creating.",
    authorImg: "/assets/images/eleanor-img.webp",
    authorName: "Eleanor Pena",
  },
  {
    image: "public/assets/images/webp/risk-managment.webp",
    date: "17 Nov 2024",
    timeReamining: "5 min read",
    title: "Risk Management in Trading",
    description:
      "Risk management is a critical component of successful trading. without effective risk management strategies, traders.",
    authorImg: "/assets/images/leslie-img.webp",
    authorName: "Leslie Alexander",
  },
  {
    image: "/assets/images/webp/building-a-diversifed.webp",
    date: "22 Oct 2024",
    timeReamining: "2 min read",
    title: "Building a Diversified Portfolio",
    description:
      "Building a diversified portfolio is an essential strategy for managing risk while aiming for steady returns over time.",
    authorImg: "/assets/images/wade-img.webp",
    authorName: "Wade Warren",
  },
  {
    image: "/assets/images/webp/psychology-trading.webp",
    date: "27 Sep 2024",
    timeReamining: "6 min read",
    title: "The Psychology of Trading",
    description:
      "Trading isn’t just about numbers, charts, and market analysis—it’s also a game of emotions and psychology.",
    authorImg: "/assets/images/kristin-waston.webp",
    authorName: "Kristin Watson",
  },
  {
    image: "/assets/images/webp/devloping-trading.webp",
    date: "02 Aug 2024",
    timeReamining: "8 min read",
    title: "Developing a Trading Strategy",
    description:
      "Identify trends (up, down, sideways) and develop strategies that capitalize on the direction of the market.",
    authorImg: "/assets/images/hawkins-img.webp",
    authorName: "Guy Hawkins",
  },
  {
    image: "/assets/images/webp/security-realibaillity.webp",
    date: "12 July 2025",
    timeReamining: "9 min read",
    title: "Security & Reliability",
    description:
      "Your investments are safe with robust encryption, multi-layer authentication, and secure transaction processing.",
    authorImg: "/assets/images/jacob-img.webp",
    authorName: "Jacob Jones",
  },
  {
    image: "/assets/images/webp/seamless-mobile-trading.webp",
    date: "21 June 2025",
    timeReamining: "7 min read",
    title: "Seamless Mobile Trading",
    description:
      "Access your portfolio and trade on the go with a powerful mobile app designed for performance and ease of use.",
    authorImg: "/assets/images/courtney-img.webp",
    authorName: "Courtney Henry",
  },
];