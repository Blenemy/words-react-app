import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import react from "../assets/logos/react.png";
import redux from "../assets/logos/redux.svg";
import formik from "../assets/logos/formik-icon-1024x1024-deyd4zqw.png";
import typescript from "../assets/logos/typescript.png";
import reactRouter from "../assets/logos/react-router-mark-color.png";
import tanstack from "../assets/logos/react-query-logo-1340EA4CE9-seeklogo.com.png";
import mui from "../assets/logos/mui.png";
import tailwind from "../assets/logos/tailwind-css3232.logowik.com.webp";

export const apiResources = [
  {
    title: "Pixaby API",
    path: "https://pixabay.com/",
    desc: "Used to find images related to a given word.",
  },
];

export const resources = [
  {
    category: "API",
    items: [
      {
        title: "Words API",
        description:
          "Used to search for words, get definitions, transcriptions, synonyms and examples of words.",
        link: "https://www.wordsapi.com/",
      },
      {
        title: "Merriam-Webster API",
        description:
          "Merriam-Webster's Collegiate® Dictionary - used to get the audio pronunciation of the word.",
        link: "https://dictionaryapi.com/",
      },
    ],
  },
  {
    category: "Graphics",
    items: [
      {
        title: "Icon Pack: Language Learning",
        description: "Used for word learning modes on the Study page.",
        link: "https://www.flaticon.com/packs/language-learning-66",
      },
      {
        title: "Freepik Kawaii Flat Icons",
        description: "Used for achievements section on the Progress page.",
        link: "https://www.flaticon.com/authors/kawaii/flat?author_id=1&type=standard",
      },
      // ...other Graphics
    ],
  },
  // ...other categories
];

export const technologies = [
  {
    title: "TypeScript",
    path: "https://www.typescriptlang.org/",
    avatar: typescript,
  },
  {
    title: "React",
    path: "https://react.dev/",
    avatar: react,
  },
  {
    title: "React Redux",
    path: "https://react-redux.js.org/",
    avatar: redux,
  },
  {
    title: "React Router",
    path: "https://reactrouter.com/en/main",
    avatar: reactRouter,
  },
  {
    title: "Tailwind",
    path: "https://tailwindcss.com",
    avatar: tailwind,
  },
  {
    title: "Yup",
    path: "https://www.npmjs.com/package/yup",
  },
  {
    title: "Recharts",
    path: "https://recharts.org/en-US/",
  },
  {
    title: "Formik",
    path: "https://formik.org",
    avatar: formik,
  },
  {
    title: "Tanstack",
    path: "https://tanstack.com",
    avatar: tanstack,
  },
  {
    title: "MUI components",
    path: "https://mui.com",
    avatar: mui,
  },
  {
    title: "TransitionGroup",
    path: "https://reactcommunity.org/react-transition-group/transition-group",
  },
  {
    title: "BlurHash",
    path: "https://blurha.sh",
  },
];

export const contacts = [
  {
    title: "GitHub",
    path: "https://github.com/Blenemy",
    icon: <GitHub />,
  },
  {
    title: "LinkedIn",
    path: "www.linkedin.com/in/denys-topchyi-4665a4188",
    icon: <LinkedIn />,
  },
  {
    title: "Gmail",
    path: "mailto:denystopchyi2@gmail.com",
    icon: <Email />,
  },
];
