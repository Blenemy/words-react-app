## Developers

- **Front-end**: Denys Topchyi, www.linkedin.com/in/denys-topchyi-4665a4188
- **Back-end**: Kirill Horodiskiy, https://www.linkedin.com/in/kirill-horodiskyi-6324ab1b2/
- **UI/UX Design Web design**: Anastasiia Untilova, https://www.linkedin.com/in/anastasiia-untilova-a4332b231/

# Ukrainian to English Word Learning SP Application

## Overview

This application is designed for learners to study and reinforce their vocabulary skills by translating words from Ukrainian to English. Through an interactive quiz format, users are presented with a word alongside supporting images and an English description. They then select from three possible translations, enhancing retention and engagement.

## Features

- **Quiz System**: Each question provides three possible answers, aiding in knowledge reinforcement.
- **Visual Aids**: Every word is paired with relevant images and an English description, offering contextual cues and enhancing the learning experience.
- **Deck System**: Words are grouped into decks based on themes or difficulty levels, allowing users to target specific vocabulary sets.
- **User Statistics**: Track your progress! Every registered user has access to their personal performance statistics.
- **User Registration**: To avail all features and track progress, users need to register.
- **Comments**: Users can leave comments, fostering a community feel and shared learning experience. These are displayed on the main page.
- **Custom Decks and Cards**: Personalization at its best! Users can create their own decks and cards. They have the ability to upload images, crafting their personal learning journey.
- **Daily Deck Limit**: Users can only complete a deck once a day to ensure effective learning.

## Viewing Recommendations

The project is not optimized for mobile view. For the best user experience, it's recommended to view the website on a PC with a screen width of 1440 pixels.

## Registration and Authentication

To ensure a seamless user experience and maintain user data, our application is hosted on a dedicated server with its own domain. This allows us to provide constant uptime and reliable service.

### Authentication Methods:

- **Google Account**: For users who prefer a quicker registration process, they can simply sign in using their Google accounts. This utilizes OAuth2.0, ensuring data security and swift access.
- **Manual Registration**: For users who prefer traditional registration methods, they can opt for the manual input of their data. This includes providing an email address, setting a password, and verifying their email.

### Security:

All user data, including passwords, are securely stored and encrypted to prevent unauthorized access.

## Technologies Used

### Front-end

- **React.js**: Powers the user interface through its component-based architecture.
- **Redux Toolkit**: Simplifies complex state logic, improves maintainability and optimizes performance.
- **React Router**: Implemented hash routing to enable client-side navigation without full page reloads.
- **Typescript**: Brings static typing to JavaScript for better linting and error checking.
- **HTML**: Structures the content on the application.
- **Tailwind CSS**: Offers utility-first CSS framework for rapid UI development.
- **Material/UI components**: Provides React components for faster and simpler web development.
- **Recharts**: Utilized for creating interactive charts.
- **Google Auth**: Allows users to log in using their Google accounts.
- **BlurHash**: Provides smooth image placeholders before the actual image loads.
- **External API for Image Search**: Searches for images based on keywords.
- **REST API**: Fetches and manipulates data from a server, decoupling the frontend and backend.
- **Formik**: Used for handling form state and providing validations for the registration form.
