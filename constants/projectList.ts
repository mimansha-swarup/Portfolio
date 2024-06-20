import { v4 as uuid4 } from "uuid";

export const projects = [
  {
    id: uuid4(),
    title: "Dhindhora",
    subTitle: "Social Media",
    shortDescription:
      " A social media platform designed for sharing your thoughts and spreading the latest gossip. Express yourself freely and stay connected with your friends and the world.",
    // description:
    //   "The Quiz App is a feature-packed interactive platform built with React, TypeScript, and Firebase Firestore. Users are greeted with a dynamic home page showcasing various quiz categories. Before diving into a quiz, they can review the rules for a smooth experience. \n Once in a quiz, multiple-choice questions (MCQs) keep users engaged while a timer adds a sense of urgency. After completing a quiz, the Result Page provides detailed answers and scores, offering valuable feedback. \n To personalize the experience, users can authenticate, allowing them to track their progress and compete with others. Whether you're a quiz enthusiast or just looking for a fun challenge, the Quiz App promises an exciting journey through knowledge and entertainment.",
    // technologies: ["React", "Typescript", "Firebase", "Sinister UI"],
    githubLink: "https://github.com/mimansha-swarup/dhindhora",
    liveLink: "https://dhindhora.netlify.app/",
    thumbnail:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1718876874935/d453b54c-edb9-4562-814c-5bbaf35734c7.png",
  },
  {
    id: uuid4(),
    title: "Mystery Shacks",
    subTitle: "E-commerce",
    shortDescription:
      "Mystery Shacks is an innovative e-commerce web app designed to provide a seamless online shopping experience. It features a user-friendly interface, secure payment options, and a robust product catalog.",
    // description:
    //   "Sinister UI is a game-changing component library that transcends the limitations of traditional CSS. This innovative solution empowers web developers and designers to effortlessly enhance web styling. By simply linking your website to Sinister UI's CDN, you gain access to a rich assortment of utility classes. These classes enable you to craft visually appealing and user-friendly web interfaces with unparalleled ease. Say goodbye to CSS complexities and embrace the future of web design with Sinister UI.",
    // technologies: ["Vanilla CSS"],
    githubLink: "https://github.com/mimansha-swarup/mystery-shack-ecommerce",
    liveLink: "https://sinister-ui.netlify.app/",
    thumbnail:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1718876479652/a75f8c76-4460-45e0-aa7a-07eb6a8242ee.png",
  },
];
