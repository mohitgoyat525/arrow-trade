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

interface UsdJpy {
  title: string;
  price: string;
}

interface FooterLink {
  title: string;
  link: string;
}

interface FooterList {
  title: string;
  description?: string;
  descriptionTwo?: string;
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
    authorImg: "/assets/images/png/darellel-img.png",
    authorName: "Darrell Steward",
  },
  {
    image: "/assets/images/webp/advance-trading.webp",
    date: "29 Jan 2025",
    timeReamining: "7 min read",
    title: "Advanced Trading Platform",
    description:
      "Experience lightning-fast execution, customizable charts, and an intuitive interface designed for traders of all levels.",
    authorImg: "/assets/images/png/jerome-bell-img.png",
    authorName: "Jerome Bell",
  },
  {
    image: "/assets/images/webp/mastering-markets.webp",
    date: "20 Dec 2024",
    timeReamining: "4 min read",
    title: "Mastering the Markets",
    description:
      "Mastering the markets involves developing a comprehensive understanding of how financial markets work, creating.",
    authorImg: "/assets/images/png/eleanor-pena.png",
    authorName: "Eleanor Pena",
  },
  {
    image: "/assets/images/webp/risk-managment.webp",
    date: "17 Nov 2024",
    timeReamining: "5 min read",
    title: "Risk Management in Trading",
    description:
      "Risk management is a critical component of successful trading. without effective risk management strategies, traders.",
    authorImg: "/assets/images/png/leslie-alexander-img.png",
    authorName: "Leslie Alexander",
  },
  {
    image: "/assets/images/webp/building-a-diversifed.webp",
    date: "22 Oct 2024",
    timeReamining: "2 min read",
    title: "Building a Diversified Portfolio",
    description:
      "Building a diversified portfolio is an essential strategy for managing risk while aiming for steady returns over time.",
    authorImg: "/assets/images/png/wade-warren-img.png",
    authorName: "Wade Warren",
  },
  {
    image: "/assets/images/webp/psychology-trading.webp",
    date: "27 Sep 2024",
    timeReamining: "6 min read",
    title: "The Psychology of Trading",
    description:
      "Trading isn’t just about numbers, charts, and market analysis—it’s also a game of emotions and psychology.",
    authorImg: "/assets/images/png/kristin-watson-img.png",
    authorName: "Kristin Watson",
  },
  {
    image: "/assets/images/webp/devloping-trading.webp",
    date: "02 Aug 2024",
    timeReamining: "8 min read",
    title: "Developing a Trading Strategy",
    description:
      "Identify trends (up, down, sideways) and develop strategies that capitalize on the direction of the market.",
    authorImg: "/assets/images/png/guy-hawkins-img.png",
    authorName: "Guy Hawkins",
  },
  {
    image: "/assets/images/webp/security-realibaillity.webp",
    date: "12 July 2025",
    timeReamining: "9 min read",
    title: "Security & Reliability",
    description:
      "Your investments are safe with robust encryption, multi-layer authentication, and secure transaction processing.",
    authorImg: "/assets/images/png/jacob-jones-img.png",
    authorName: "Jacob Jones",
  },
  {
    image: "/assets/images/webp/seamless-mobile-trading.webp",
    date: "21 June 2025",
    timeReamining: "7 min read",
    title: "Seamless Mobile Trading",
    description:
      "Access your portfolio and trade on the go with a powerful mobile app designed for performance and ease of use.",
    authorImg: "/assets/images/png/courtney-henrey-img.png",
    authorName: "Courtney Henry",
  },
];

export const USDJPY_LIST: UsdJpy[] = [
  {
    title: "US30",
    price: "41048.38 / 41044.58",
  },
  {
    title: "NAS100",
    price: "18948.45 / 18945.15",
  },
  {
    title: "USDJPY",
    price: "143.651 / 143.637",
  },
];

export const FOOTER_LINKS_LIST: FooterLink[] = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About Us",
    link: "#about-us",
  },
  {
    title: "How It Works",
    link: "#how-it-works",
  },
  {
    title: "Testimonials",
    link: "#testimonials",
  },
  {
    title: "FAQs",
    link: "#faqs",
  },
  {
    title: "Contact Us",
    link: "#contact-us",
  },
];

export const FOOTER_LIST: FooterList[] = [
  {
    title: "Trade Responsibility Disclaimer",
    description:
      "Trading Forex and CFDs involves a high level of risk and may not be suitable for all investors. Leverage can work both for and against you, and it’s possible to lose more than your initial investment. Please ensure that you fully understand the risks involved, taking into account your financial objectives and risk appetite. Seek independent financial advice if necessary before starting trading. ArrowTrade does not offer financial advice.",
  },
  {
    title: "Disclaimer",
    description:
      "Information on this site is not directed at residents of any country or jurisdiction where distribution or use would be contrary to local law or regulation. Please check with your local regulations before proceeding.",
  },
  {
    title: "Regulatory Information",
    description:
      "Arrowtradefx.com is a website operated by Arrow Trade S.A.R.L, which is registered in: – Lebanon, Beirut, Barbour, Zrek Street, Najmat almazraa building, Eighth floor- company number 1028098. (Arrow trade offices: 2nd floor Hazmieh, Baabda Real Estate, Property 4370 sections 20/021, Beirut, Lebanon).",
  },
  {
    title: "Regulatory Information",
    description:
      "Arrowtradefx.com is a website operated by Arrow Trade S.A.R.L, which is registered in: – Lebanon, Beirut, Barbour, Zrek Street, Najmat almazraa building, Eighth floor- company number 1028098. (Arrow trade offices: 2nd floor Hazmieh, Baabda Real Estate, Property 4370 sections 20/021, Beirut, Lebanon).",
    descriptionTwo:
      "Arrow Trade S.A.R.L (Lebanon) is the sole entity authorized to operate the MetaTrader platform under our license. No other companies are involved in the operation or management of our MetaTrader license.",
  },
];