import { v4 as uuid4 } from "uuid";

export const projects = [
  {
    id: uuid4(),
    Title: "Dhindhora",
    subTitle: "Social Media",
    shortDescription:
      "Experience the ultimate quiz challenge with our Quiz App. Developed using React and TypeScript, powered by Firebase Firestore, this app offers an engaging home page, categorized quizzes, clear rules, MCQ-based questions with timers, and a results page with answers and scores. Get ready to test your knowledge while enjoying seamless authentication and an immersive quiz experience.",
    description:
      "The Quiz App is a feature-packed interactive platform built with React, TypeScript, and Firebase Firestore. Users are greeted with a dynamic home page showcasing various quiz categories. Before diving into a quiz, they can review the rules for a smooth experience. \n Once in a quiz, multiple-choice questions (MCQs) keep users engaged while a timer adds a sense of urgency. After completing a quiz, the Result Page provides detailed answers and scores, offering valuable feedback. \n To personalize the experience, users can authenticate, allowing them to track their progress and compete with others. Whether you're a quiz enthusiast or just looking for a fun challenge, the Quiz App promises an exciting journey through knowledge and entertainment.",
    technologies: ["React", "Typescript", "Firebase", "Sinister UI"],
    githubLink: "https://github.com/mimansha-swarup/puchu",
    liveLink: "https://puchu.netlify.app/",
    thumbnail: "",
  },
  {
    id: uuid4(),
    Title: "Sinister UI",
    subTitle: "Component Library",
    shortDescription:
      "Sinister UI redefines web styling. Swap CSS with ease using its utility class-packed component library, accessible via CDN. Enjoy seamless, sophisticated web design.",
    description:
      "Sinister UI is a game-changing component library that transcends the limitations of traditional CSS. This innovative solution empowers web developers and designers to effortlessly enhance web styling. By simply linking your website to Sinister UI's CDN, you gain access to a rich assortment of utility classes. These classes enable you to craft visually appealing and user-friendly web interfaces with unparalleled ease. Say goodbye to CSS complexities and embrace the future of web design with Sinister UI.",
    technologies: ["Vanilla CSS"],
    githubLink: "https://github.com/mimansha-swarup/Component-Library",
    liveLink: "https://sinister-ui.netlify.app/",
    thumbnail:
      "https://user-images.githubusercontent.com/69811810/154858801-aec5ff38-ea68-42e9-a313-cfae0a8c8f84.png",
  },
];

export const blogList = [
  {
    id: uuid4(),
    title: "Input Box with Character Counter in React",
    imgSrc:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1718520730704/f1fae85c-392b-48f0-a21b-2df307bf85f9.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    url: "https://mimansha-swarup.hashnode.dev/input-box-with-character-counter-in-react",
  },
  {
    id: uuid4(),
    title: "Essential Function Concepts to Master Before Your Next Interview",
    imgSrc:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1718521273154/e45dc790-10d0-40bf-bc8d-49531af91a50.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    url: "https://mimansha-swarup.hashnode.dev/essential-function-concepts",
  },
  {
    id: uuid4(),
    title: "What is React Context API and How to Use Them",
    imgSrc:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1718519960118/fed1049c-e29c-4369-a6d6-0248a46ec10f.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    url: "https://mimansha-swarup.hashnode.dev/what-is-react-context-api-and-how-to-use-them",
  },
];
