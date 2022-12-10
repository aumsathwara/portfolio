import { people01, people02, people03, facebook, instagram, linkedin, twitter, send, shield, star, vector  } from "../assets";

export const navLinks = [
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "Photos",
    title: "Captures",
  },
  {
    id: "Contact",
    title: "Contact",
  },
  {
    id: "social_links",
    title: "Social Links",
  },
];

export const projects = [
  {
    id: "project-1",
    icon: star,
    link: "https://github.com/aumsathwara/waste_management",
    title: "Waste Management",
    content:
      "Created a Machine Learning Model using Artificial Intelligence libraries like Keras and OpenCV that identifies the waste product and categorizes it into recycle, organic, plastic, and inorganic. Achieved accuracy of 78.34%.",
  },
  {
    id: "project-2",
    icon: shield,
    link: "https://github.com/aumsathwara/waste_management",
    title: "Attendance System",
    content:
      "Created an Attendance System that could detect face and compare it with the database. If the face being detected matches data in the database then student's id is marked as present.",
  },
  {
    id: "project-3",
    icon: send,
    link: "https://github.com/aumsathwara/book_listing",
    title: "Library Management",
    content:
      "Built a library management system in which the user can update, delete, add books. Created a secure login portal for the user to login and access database. Technologies worked on included Django, MySQL, Python, and AJAX",
  },
  {
    id: "project-2",
    icon: shield,
    link: "https://github.com/aumsathwara/hand_tracking",
    title: "Hand Tracking",
    content:
      "Developed a web application with the help of Node, AJAX and MediaPipe that tracks hand movement. Produced captivating animations with the help of the DOM concept and detected coordinates   of hand.",
  },
  {
    id: "project-2",
    icon: shield,
    link: "https://github.com/aumsathwara/discord_bot",
    title: " Discord Bot",
    content:
      "Built a Discord Bot from scratch using discord.py in Python that takes a user to a specified channel on specific interaction with a message, greets the user, keeps the community channel clean from spammy and explicit messages, and displays the live status of the community.",
  },
  // {
  //   id: "project-2",
  //   icon: shield,
  //   title: "Attendance System",
  //   content:
  //     "We take proactive steps make sure your information and transactions are secure.",
  // },

];

export const Photos = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    icon: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    icon: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    icon: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const social_links = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/aumsathwara",
  },
  {
    id: "social-media-2",
    icon: vector,
    link: "https://github.com/aumsathwara",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/sathwaraaum",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/in/aumsathwara",
  },
];

