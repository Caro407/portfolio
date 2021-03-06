const projects = [
  {
    title: "Get A Band",
    slug: "get-a-band",
    pitch: "Platform for married-to-be couples to book an artist for their wedding.",
    description: "Get A Band was a 2 weeks project, in a 4 members team. Driven by the will of simplify a wedding's organization, we wanted to create a website where any couple can search for an artist according to their criterias; but also where artists could manage their calendar and exchange whith their clients.",
    image: "https://portfolio-cl.s3.eu-west-3.amazonaws.com/gab-1.png",
    duration: 14,
    github: [
      {
        link: "https://github.com/Caro407/THP_Get_A_Band_Final_Project",
        role: "fullstack on RoR"
      }],
    website_link: "https://get-a-band.herokuapp.com/",
    members: 4,
    technos: ["Rails", "bootstrap"],
    frameworks: [
      {
        role: "front/back",
        name: "Rails"
      },
      {
        role: "css",
        name: "bootstrap"
      }
    ],
    details: [
      {
        insight: "Dual Devise usage (for artists and users)"
      },
      {
        insight: "Search filters built with advanced Active Records queries"
      },
      {
        insight: "Admin platform management to confirm artists accounts using Forest Admin."
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
    pitch: "Marketplace for a new alcohol-free cocktails startup with a blog and a stores map.",
    description: "Ousia was a 2 weeks project, in a 4 members team. Ousia is a real starting business, which had just ended their Ulule campaign and needed a website to start receiving orders. We chose Next.js framework to improve their SEO and used a headless CMS to create them a blog.",
    image: "https://portfolio-cl.s3.eu-west-3.amazonaws.com/ousia-1.png",
    github: [
      {
        link: "https://github.com/EmmanuelQuere/Ousia-front/tree/MVP",
        role: "front"
      },
      {
        link: "https://github.com/EmmanuelQuere/Ousia-back/tree/MVP",
        role: "back"
      }],
    website_link: "https://ousia-front.herokuapp.com",
    duration: 14,
    members: 4,
    technos: ["Next.js", "Rails API", "tailwind", "Prismic"],
    frameworks: [
      {
        role: "front",
        name: "Next.js"
      },
      {
        role: "back",
        name: "Rails API"
      },
      {
        role: "cms",
        name: "Prismic"
      },
      {
        role: "css",
        name: "tailwind"
      }
    ],
    details: [
      {
        insight: "Fullstack website : Next.js frontend and Rails backend"
      },
      {
        insight: "Agile methodology : daily meetings, sprints plannings, iterations with client"
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
    pitch: "Website to look for new games and stay up-to-date with latest trends.",
    description: "The Hyper Program was a solo - 3 days project, to create a working single-page application in a rush which was able to query an external API.",
    image: "https://portfolio-cl.s3.eu-west-3.amazonaws.com/thp-1.png",
    duration: 3,
    github: [
      {
        link: "https://github.com/Caro407/SPA_Proj",
        role: "back"
      }],
    website_link: "https://caro407.github.io/SPA_Proj/",
    members: 1,
    technos: ["JS", "bootstrap"],
    frameworks: [
      {
        role: "front",
        name: "JS Vanilla"
      },
      {
        role: "back",
        name: "Rails API"
      },
      {
        role: "css",
        name: "bootstrap"
      }
    ],
    details: [
      {
        insight: "A SPA build from scratch using JS Vanilla."
      },
      {
        insight: "Extensive search query with an external API (RAWG)."
      },
      {
        insight: "Pixel Perfect integration of given visuals."
      },
    ]
  },
  {
    title: "Deep Adventure",
    slug: "deep-adventure",
    pitch: "In development project of a mobile application for an existing web video game.",
    description: "PROJECT CURRENTLY IN DEVELOPMENT. I offered my services to a friend of mine which has created his own web game, called Deep Adventure. His game is currently full developped on Ruby on Rails, and he would like to have a mobile application using React Native.",
    image: "",
    website_link: "",
    duration: 14,
    members: 4,
    technos: ["React Native", "Rails API", "Bulma"],
    frameworks: [
      {
        role: "front",
        name: "React Native"
      },
      {
        role: "back",
        name: "Rails API"
      },
      {
        role: "css",
        name: "Bulma"
      }
    ]
  }
];

export default projects;
