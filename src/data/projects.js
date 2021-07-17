const projects = [
  {
    title: "Get A Band",
    slug: "get-a-band",
    pitch: "Platform for married-to-be couples to book an artist for their wedding.",
    duration: 14,
    github: ["https://github.com/Caro407/THP_Get_A_Band_Final_Project"],
    website_link: "https://get-a-band.herokuapp.com/",
    members: 4,
    frameworks: {
      front: "Rails",
      back: "Rails",
      css: "bootstrap"
    },
    details: [
      {
        insight: "Dual Devise usage (for artists and users)"
      },
      {
        insight: "Search filters built with advanced Active Records queries"
      },
      {
        insight: "Admin platform management to confirm artists accounts"
      },
      {
        insight: "Payment solution with Stripe"
      },
      {
        insight: "Active Storage connected to AWS S3"
      },
      {
        insight: "Set up of a mailer (Mailjet)"
      },
      {
        insight: "Spotify API integration for artists to share their music"
      }
    ]
  },
  {
    title: "Ousia",
    slug: "ousia",
    pitch: "Marketplace for a new alcohol-free cocktails startup.",
    github: ["https://github.com/EmmanuelQuere/Ousia-front/tree/MVP", "https://github.com/EmmanuelQuere/Ousia-back/tree/MVP"],
    website_link: "https://ousia-front.herokuapp.com",
    duration: 14,
    members: 4,
    frameworks: {
      front: "Next.js",
      back: "Rails API",
      css: "tailwind"
    },
    details: [
      {
        insight: "Fullstack website : Next.js frontend and Rails backend"
      },
      {
        insight: "Agile methodology : daily meetings, sprints plannings, iterations with client"
      },
      {
        insight: "SEO centered web building with Next.js framework"
      },
      {
        insight: "Coordinating pushes to production back / front"
      },
      {
        insight: "Active Storage connected to AWS S3"
      },
      {
        insight: "Payment solution with Stripe API"
      },
      {
        insight: "Set up of a headless CMS (Prismic) for blogging purposes"
      },
      {
        insight: "Admin platform to facilitate the overall website management"
      }
    ]
  },
  {
    title: "The Hyper Program",
    slug: "the-hyper-program",
    pitch: "Website to look for new games and be updated with last tendances.",
    duration: 14,
    github: ["https://github.com/Caro407/THP_Get_A_Band_Final_Project"],
    website_link: "",
    members: 4,
    frameworks: {
      front: "Next.js",
      back: "Rails API",
      css: "tailwind"
    },
    details: [
      {
        insight: "A SPA build from scratch"
      }
    ]
  },
  {
    title: "Need a 4th",
    slug: "need-one-more",
    pitch: "Website to look for new games and be updated with last tendances.",
    github: ["https://github.com/Caro407/THP_Get_A_Band_Final_Project"],
    website_link: "",
    duration: 14,
    members: 4,
    frameworks: {
      front: "Next.js",
      back: "Rails API",
      css: "tailwind"
    },
    details: [
      {
        insight: "Not inspired yet."
      }
    ]
  }
];

export default projects;
