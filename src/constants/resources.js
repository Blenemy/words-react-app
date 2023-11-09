import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import react from "../assets/logos/react.png";
import redux from "../assets/logos/redux.svg";
import formik from "../assets/logos/formik-icon-1024x1024-deyd4zqw.png";
import typescript from "../assets/logos/typescript.png";
import reactRouter from "../assets/logos/react-router-mark-color.png";
import tanstack from "../assets/logos/react-query-logo-1340EA4CE9-seeklogo.com.png";
import mui from "../assets/logos/mui.png";
import tailwind from "../assets/logos/tailwind-css3232.logowik.com.webp";
import python from "../assets/logos/python.jpg";
import django from "../assets/logos/django.png";
import postgres from "../assets/logos/Postgresql_elephant.svg.png";
import redis from "../assets/logos/redis.jpg";
import celery from "../assets/logos/Celery_logo.png";
import docker from "../assets/logos/docker.png";

export const apiResources = [
  {
    title: "Pixaby API",
    path: "https://pixabay.com/",
    desc: "Used to find images related to a given word.",
  },
  {
    title: "Django Rest Framework",
    path: "https://www.django-rest-framework.org",
    desc: "Empowers our backend services to efficiently handle RESTful API requests and deliver data responses.",
  },
  {
    title: "Requests",
    path: "https://pypi.org/project/requests/",
    desc: "Facilitates outbound HTTP requests to third-party services for additional data retrieval and integration.",
  },
];

export const frontendTechnologies = [
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

export const backendTechnologies = [
  {
    title: "Python",
    path: "https://www.python.org/",
    avatar: python,
  },
  {
    title: "Django",
    path: "https://www.djangoproject.com/",
    avatar: django,
  },
  {
    title: "Django Rest Framework",
    path: "https://www.django-rest-framework.org/",
  },
  {
    title: "PostgreSQL",
    path: "https://www.postgresql.org/",
    avatar: postgres,
  },
  {
    title: "Redis",
    path: "https://redis.io/",
    avatar: redis,
  },
  {
    title: "Celery",
    path: "http://www.celeryproject.org/",
    avatar: celery,
  },
  {
    title: "Requests",
    path: "https://docs.python-requests.org/en/latest/",
  },
  {
    title: "Docker",
    path: "https://www.docker.com/",
    avatar: docker,
  },
];
